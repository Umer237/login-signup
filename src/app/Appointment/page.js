'use client'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 

const page = () => {
  const [value, onChange] = useState(new Date()); 
  return (
    <>
    <div className='calendar'>
        <div className='header'>
            <button id='prevBtn'>
<AiOutlineArrowLeft/>
            </button>
            <div className='monthYear' id='monthYear'></div>
            <button id='nextbtn'>
                <AiOutlineArrowRight/>
            </button>
        </div>
        <div className='days'>
<div className='day'>Mon</div>
<div className='day'>Tue</div>
<div className='day'>Wed</div>
<div className='day'>Thu</div>
<div className='day'>Fri</div>
<div className='day'>Sat</div>
<div className='day'>Sun</div>
        </div>
        <div className='dates' id='dates'></div>
    </div>
    <div className='Appointment-BG'>
      <h2>Dental Appointment</h2>
    <div className='Appointment-Input'>
        <input type='text' placeholder='Enter Your Name'></input>
        <input type='text' placeholder='Date and Time'></input>
        <input type='text' placeholder='Enter Phone Number'></input>
        <textarea type='text' placeholder='Message'></textarea>
    </div>
    </div>
    <div>
    <Calendar 
                onChange={onChange} 
                value={value} 
            /> 
        </div> 
    </>
  )
}

export default page
