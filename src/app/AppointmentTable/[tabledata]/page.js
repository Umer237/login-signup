'use client'
import React, { useEffect, useState } from 'react'

const tabledata = (props) => {


const [FirstName,setFirstName]= useState("");
const [LastName,setLastName]= useState("");
const [ContactNumber,setContactNumber]= useState("");
const [Email,setEmail]= useState("");
const [Procedure,setProcedure]= useState("");
const [AppointDate,setAppointDate]= useState("");
const [Time,setTime]= useState("");
const [Doctor,setDoctor]= useState("");
const [Message,setMessage]= useState("");

//to get id from url , also in main function argument is passed

const productid = props.params.tabledata;


const getdata= async()=>{

  const data = await fetch("http://localhost:3000/api/appointRoute/"+productid);
  const jsondata = await data.json();
 setFirstName(jsondata.FirstName);
setLastName(jsondata.LastName);
setContactNumber(jsondata.ContactNumber);
setEmail(jsondata.Email);
setProcedure(jsondata.Procedure);
setAppointDate(jsondata.AppointDate);
setTime(jsondata.Time);
setDoctor(jsondata.Doctor);
setMessage(jsondata.Message);
}

useEffect(()=>getdata, [])

  return (
        
    <>
     <input type='text' value={FirstName} name='firstname' /><br></br>
    <input type='text' value={LastName} name='lastname' /><br></br>
    <input type='text'  value={ContactNumber} name='contactnumber' /><br></br>
    <input type='text'value={Email} name='Email'/><br></br>
    <input type='text'value={Procedure} name='procedure' /><br></br>
    <input type='text' value={AppointDate} name='appointmentdate'/><br></br>
    <input type='text' value={Time} name='time' /><br></br>
    <input type='text'value={Doctor} name='doctor'/><br></br>
    <input type='text' value={Message} name='message' /><br></br>

    <button > submit </button>
    
    </>
   

  )
}

export default tabledata