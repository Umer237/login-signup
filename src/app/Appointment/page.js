'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css'; 


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
   <div>
        <div className='Appointment-Inputs'>
<h1>Dental Appointment</h1>
<input type='text' placeholder='First Name'></input>
<input type='text' placeholder='Last Name'></input>
<input type='text' placeholder='Contact Number'></input>
<input type='text' placeholder='Email'></input>
<textarea></textarea>
<select>
  <option>Select Your Doctor</option>
  <option>Doctor01</option>
  <option>Doctor02</option>
</select>
    </div>
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
    </div>
    </>

  );
};

export default Calendar;