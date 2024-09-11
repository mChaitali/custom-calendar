import React, { useState } from 'react';
import './Calendar.css';

const Calendar = ({ selectedDate, onDateSelect, onCancel, onSetDate, minDate, maxDate }) => {
  const calendarDayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState(selectedDate);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateInRange = (date) => {
    return (!minDate || date >= minDate) && (!maxDate || date <= maxDate);
  };

  const isMinDate = (date) => {
    return minDate && date.getDate() === minDate.getDate() && date.getMonth() === minDate.getMonth() && date.getFullYear() === minDate.getFullYear();
  };

  const isMaxDate = (date) => {
    return maxDate && date.getDate() === maxDate.getDate() && date.getMonth() === maxDate.getMonth() && date.getFullYear() === maxDate.getFullYear();
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfMonth = getFirstDayOfMonth(month, year);

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = tempSelectedDate && day === tempSelectedDate.getDate() && month === tempSelectedDate.getMonth() && year === tempSelectedDate.getFullYear();
      const isDisabled = !isDateInRange(date);
      const isMin = isMinDate(date);
      const isMax = isMaxDate(date);

      days.push(
        <div 
          className={`calendar-day 
            ${isSelected ? 'selected' : ''} 
            ${isDisabled ? 'disabled' : ''} 
            ${isMin ? 'min-date' : ''} 
            ${isMax ? 'max-date' : ''}`} 
          key={day}
          onClick={() => !isDisabled && setTempSelectedDate(date)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const renderDayName = () => {
    calendarDayName.map((name) => {
      return <div className="calendar-day-name">{name}</div>;
    });
  };

  const changeMonthYear = (event) => {
    const [month, year] = event.target.value.split('-').map(Number);
    const newDate = new Date(currentDate.setFullYear(year, month));
    setCurrentDate(newDate);
  };

  const renderMonthYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (v, i) => currentYear - 50 + i);
    const months = Array.from({ length: 12 }, (v, i) => i);
    const options = [];

    years.forEach(year => {
      months.forEach(month => {
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        options.push(
          <option key={`${month}-${year}`} value={`${month}-${year}`}>
            {monthName} {year}
          </option>
        );
      });
    });

    return options;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <select 
          value={`${currentDate.getMonth()}-${currentDate.getFullYear()}`} 
          onChange={changeMonthYear}
        >
          {renderMonthYearOptions()}
        </select>
        <div>
          <button onClick={() => changeMonthYear({ target: { value: `${currentDate.getMonth() - 1}-${currentDate.getFullYear()}` } })}>&#8593;</button>
          <button onClick={() => changeMonthYear({ target: { value: `${currentDate.getMonth() + 1}-${currentDate.getFullYear()}` } })}>&#8595;</button>
        </div>
      </div>
      <div className="calendar-grid">
        {renderDayName()}
        {renderCalendar()}
      </div>
      <div className="calendar-footer">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={() => onSetDate(tempSelectedDate)}>Set Date</button>
      </div>
      <div className="symbols">
        <p><span className='circle red'></span>Due Date</p>
        <p><span className='circle blue'></span>Cycle/statement</p>
        <p><span className='circle filled'></span>Schedule Payment</p>
      </div>
    </div>
  );
};

export default Calendar;
