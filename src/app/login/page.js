'use client'
import React, { useState } from 'react'
import { setCookie } from 'cookies-next';



const page = () => {


  var [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");

  // this function will work on onclick

  const Success = async () => {

    const fetchdata = await fetch("http://localhost:3000/api/projects");
    const jsondata = await fetchdata.json();
    if (Email != "" && Password != "") {
      try {
        jsondata.map((items) => {
          if (Email == items.Email && Password == items.Password) {
            if ("Admin" == items.Department) {

              setCookie('Adminloggedin');
              window.location.href = ("http://localhost:3000/aDashboard");

            }
            else if ("Creative" == items.Department) {

              setCookie('Creativeloggedin');
              window.location.href = ("http://localhost:3000/cDashboard");
            }
           
          }
          else if(Email!=items.Email){

            setTimeout(() => {
              setMessage("Email or Password is Incorrect");
            }, 1000);

          }
        
        })  
        // loop ends here

      }
      catch (error) {
        setMessage(error);
      }
    }
    else {

      setMessage("Both fields are required");
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

            <h4 style={{ color: 'red', marginLeft: '10px' }}>{Message}</h4>
            <button onClick={Success}>Login Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page