// src/App.js
import DateInput  from './components/Calendar/DateInput';
import './App.css';

const App = () => {
  const minDate = new Date(2024, 8, 1); // Sept 1, 2024
  const maxDate = new Date(2024, 8, 15); // Sept 15, 2024
  return (
    <div className="App">
      <h1>Custom Calendar</h1>
      <DateInput  minDate={minDate} maxDate={maxDate}  />
    </div>
  );
}

export default App;
