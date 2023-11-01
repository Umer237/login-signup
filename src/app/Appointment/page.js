'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
 


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

const minDate = new Date();

  return (
    <>
   <div className='Appointment-Full-Div'>
        <div className='Appointment-Inputs'>
<h1>Dental Appointment</h1>
<input type='text' placeholder='First Name'></input>
<input type='text' placeholder='Last Name'></input>
<input type='text' placeholder='Contact Number'></input>
<input type='text' placeholder='Email'></input>
<div>
      <div>
        <h4>Select Your Date</h4>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={minDate}
          dateFormat="MMMM d, yyyy"
        />
      </div>
    </div>
    <select>
  <option>Select Your Time</option>
  <option>1:00pm</option>
  <option>1:30pm</option>
  <option>2:00pm</option>
  <option>2:30pm</option>
  <option>3:00pm</option>
  <option>3:30pm</option>
  <option>4:00pm</option>
  <option>4:30pm</option>
  <option>5:00pm</option>
  <option>5:30pm</option>
  <option>6:00pm</option>
  <option>6:30pm</option>
</select>
<select>
  <option>Select Your Doctor</option>
  <option>Doctor01</option>
  <option>Doctor02</option>
</select>
<select>
  <option>Progress</option>
  <option>Filling</option>
  <option>Teeth Broken</option>
</select>
<textarea placeholder='Message'></textarea>


    </div>

    </div>
    </>

  );
};

export default Calendar;