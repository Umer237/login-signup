'use client'
import { NextResponse } from 'next/server';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {


  const [FirstName , setFirstName]= useState("");
  const [LastName , setLastName]= useState("");
  const [ContactNumber , setContactNumber]= useState("");
  const [Email , setEmail]= useState("");
  const [Procedure , setProcedure]= useState("");
  const [Time , setTime]= useState("");
  const [Doctor , setDoctor]= useState("");
  const [Message , setMessage]= useState("");
  const [AppointDate, setSelectedDate] = useState(new Date());


  async function onSubmit()
  {
  
    const data = await fetch("http://localhost:3000/api/appointRoute",{
      method: 'POST',
      body: JSON.stringify({FirstName, LastName, ContactNumber, Email, Procedure, AppointDate, Time, Doctor, Message})
    });
    setTimeout(() => { window.location.href = ("/Appointment"); }, 500);
  
  }



  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

const minDate = new Date();


  return (
    <>
   <div className='Appointment-Full-Div'>
        <div className='Appointment-Inputs'>
<h1>Dental Appointment</h1>
<input type='text' placeholder='First Name' value={FirstName}  onChange={(e)=>{setFirstName(e.target.value)}}></input>
<input type='text' placeholder='Last Name' value={LastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
<input type='text' placeholder='Contact Number' value={ContactNumber} onChange={(e)=>{setContactNumber(e.target.value)}}></input>
<input type='text' placeholder='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}}></input>
<div>
      <div>
        <h4>Select Your Date</h4>
        <DatePicker
          selected={AppointDate}
          onChange={handleDateChange}
          minDate={minDate}
          dateFormat="MMMM d, yyyy"
        />
      </div>
    </div>
    <select value={Time} onChange={(e)=>{setTime(e.target.value)}}>
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

<select value={Doctor} onChange={(e)=>{setDoctor(e.target.value)}}>
  <option>Select Your Doctor</option>
  <option>Doctor01</option>
  <option>Doctor02</option>
</select>

<select value={Procedure}  onChange={(e)=>{setProcedure(e.target.value)}}>
  <option>Progress</option>
  <option>Filling</option>
  <option>Teeth Broken</option>
</select>
<textarea placeholder='Message' value={Message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
<h3>Incorect Password</h3>

<button className='Submit-btn' onClick={onSubmit}>SUBMIT</button>
    </div>
    </div>
    </>

  );
};

export default Calendar;