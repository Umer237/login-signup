
// pages/calendar.js
'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';

import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for the calendar
import 'react-time-picker/dist/TimePicker.css'; // Import the styles for the time picker

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <h1>Calendar and Time Picker</h1>
      <div>
        <h2>Select a Date:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
        />
      </div>
      <div>
        <h2>Select a Time:</h2>
        <TimePicker
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
}

export default CalendarPage;

