'use client'

import React, { useState } from 'react';
import bcrypt from 'bcryptjs'; 

const SignUp = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Department, setDepartment] = useState("");
  const [Message, setMessage] = useState("");
  var [status, setStatus] = useState(false);

  // this function will work upon onclick on submit button
  const saveData = async () => {


    const fetchdata = await fetch("http://localhost:3000/api/projects");
    const jsondata = await fetchdata.json();



    if (Email != "" && Password != "" && Department != "") {

      // this will run a loop to check these values and conditions

      jsondata.map((items) => {

        if (Email == items.Email) {

          setMessage("User with this Email is Already Registered")
          setTimeout(() => { window.location.href = ("/") }, 2000)

        }
        else if (Email != items.Email) {

          setStatus(true);

        }
      })
      //  loop ends here

      if (status == true) {
        
        const hashedPassword = await bcrypt.hash(Password,10);
        let data = await fetch("http://localhost:3000/api/projects", {
          method: "POST",
          body: JSON.stringify({ Email, Password: hashedPassword, Department })
        });

        setMessage("you are registered successfully")
        setTimeout(() => { window.location.href = ("/login"); }, 2000);
        
      }
    }

    else {
      setMessage("All Fields are Required")
    }

  }



  return (
    <>
      <div className='BG'>
        <div className='BG-OneSide'>
          <div className="Signup-Flex">
            <h3>START FOR FREE</h3>
            <h2>Create new account.</h2>

            <h4  >Already A Member? <a href='/login' style={{ color: 'white' }}>Log in</a></h4>
            <div className='textbox'>

              <input type='email' placeholder='Enter your Email' value={Email} onChange={(e) => { setEmail(e.target.value) }} required />
              <input placeholder='Password' value={Password} onChange={(e) => { setPassword(e.target.value) }} type='password'></input>
              <h4 className='department'>Select Your Department</h4>
              <select value={Department} onChange={(e) => { setDepartment(e.target.value) }}>
                <option></option>
                <option>Creative</option>
                <option>Admin</option>
              </select>

              <h4 style={{ color: 'red', marginLeft: '10px' }}>{Message}</h4>

              <button onClick={saveData}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUp
