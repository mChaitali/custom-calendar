import React, { useState, useRef, useEffect } from 'react';
import Calendar from './Calendar';
import './DateInput.css';

const DateInput = ({ minDate, maxDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCancel = () => {
    setShowCalendar(false);
  };

  const handleSetDate = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="date-input-container" ref={inputRef}>
      <input
        type="text"
        readOnly
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        onClick={handleInputClick}
        placeholder="Select a date"
      />
      {showCalendar && (
        <div className="calendar-popover">
          <Calendar 
            selectedDate={selectedDate} 
            onDateSelect={handleDateSelect} 
            onCancel={handleCancel}
            onSetDate={handleSetDate}
            minDate={minDate} 
            maxDate={maxDate} 
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;
