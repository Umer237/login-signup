'use client'

import React, { useState } from 'react'

const page = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Department, setDepartment] = useState("");

  // this function will work on onclick

  const Success = async () => {

    const fetchdata = await fetch("http://localhost:3000/api/projects");
    const jsondata = await fetchdata.json();
    if (Email != "" && Password != "") {
      try {
        jsondata.map((items) => {
          if (Email==items.Email && Password==items.Password) {
            if ("Admin"==items.Department) {
              window.location.href = ("http://localhost:3000/aDashboard");
            }
            else if ("Creative"==items.Department) {
              window.location.href = ("http://localhost:3000/cDashboard");
            }

          }
        })

      }
      catch (error) {
        console.log(error);
      }
    }
    else {

      alert("Both fields are required")
    }



  }



  return (
    <div className='Login'>
      <div className='Login-OneSide'>
        <div className="Login-Flex">

          <h2>Login Now</h2>

          <div className='textbox'>

            <input type='email' value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your Email' />
            <input placeholder='Enter your Password' value={Password} onChange={(e) => { setPassword(e.target.value) }} type='password'></input>

            <button onClick={Success}>Login Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page