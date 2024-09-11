Calendar Component
This project includes a customizable Calendar component built with React. The Calendar component allows users to select a date from a visually intuitive interface. The component includes several features and options, including a combined month-year dropdown for easy navigation.

Features
Date Selection: Users can select a specific date from the calendar. The selected date will be highlighted.
Combined Month-Year Dropdown: The header includes a single dropdown that allows users to select both the month and the year. This makes it easy to navigate to any month and year without needing to switch between multiple dropdowns.
Previous and Next Navigation: Buttons are provided to navigate to the previous or next month.
Date Range Restrictions: Optionally, you can specify a minimum and maximum date. Dates outside this range are disabled and cannot be selected.
Action Buttons: Two action buttons are provided:
Cancel: Closes the calendar without making a selection.
Set Date: Confirms the selection of the currently highlighted date.

Styling
The component is styled with CSS to ensure a clean and modern appearance. You can customize the appearance by modifying the Calendar.css file. Key classes include:

calendar: The container for the entire calendar component.
calendar-header: Contains the navigation buttons and the combined month-year dropdown.
calendar-grid: The grid layout for displaying the days of the month.
calendar-day: Styles for individual day cells in the calendar.
calendar-footer: Contains the action buttons (Cancel and Set Date).
Customization
You can further customize the Calendar component by adjusting the following:

Min/Max Date: Set the minDate and maxDate props to restrict date selection to a specific range.
Selected Date: Pass an initial date using the selectedDate prop to set a default date.
Event Handlers: Implement your own logic in the onDateSelect, onCancel, and onSetDate props to control what happens when a date is selected or an action is taken.
