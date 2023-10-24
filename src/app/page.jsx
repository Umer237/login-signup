'use client'
import React, { useState } from 'react'

const SignUp = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Department, setDepartment] = useState("");


  // this function will work upon onclick on submit button
  const saveData = async () => {


    const fetchdata = await fetch("http://localhost:3000/api/projects");
    const jsondata = await fetchdata.json();


    if (Email != "" && Password != "" && Department != "") {

      jsondata.map((items) => {
        if (Email == items.Email) {

          alert("User with this Email is Already Registered")
          window.location.href = ("/");

        }
      });

      let data = await fetch("http://localhost:3000/api/projects", {
        method: "POST",
        body: JSON.stringify({ Email, Password, Department })
      });
       window.location.href = ("/login");
       alert("you are registered successfully")
    
    }

    else {
      alert("all fields are required")
    }

  }



  return (
    <>
      <div className='BG'>
        <div className='BG-OneSide'>
          <div className="Signup-Flex">
            <h3>START FOR FREE</h3>
            <h2>Create new account.</h2>

            <h4>Already A Member? <a href='/login'>Log in</a></h4>
            <div className='textbox'>

              <input type='email' placeholder='Enter your Email' value={Email} onChange={(e) => { setEmail(e.target.value) }} required />
              <input placeholder='Password' value={Password} onChange={(e) => { setPassword(e.target.value) }} type='password'></input>
              <h4 className='department'>Select Your Department</h4>
              <select value={Department} onChange={(e) => { setDepartment(e.target.value) }}>
                <option></option>
                <option>Creative</option>
                <option>Admin</option>
              </select>

              <button onClick={saveData}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUp
