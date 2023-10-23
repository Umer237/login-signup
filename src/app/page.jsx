import React from 'react'

const SignUp = () => {
  return (
 <>
 <div className='BG'>
    <div className='BG-OneSide'>
    <div className="Signup-Flex">
 <h3>START FOR FREE</h3>
 <h2>Create new account.</h2>
 
<h4>Already A Member? <a href='/login'>Log in</a></h4>
<div className='textbox'>
<input placeholder='Enter your Email' type='email'></input>
<input placeholder='Password' type='password'></input>
<h4 className='department'>Select Your Department</h4>
<select>
<option></option>
    <option>Creative</option>
    <option>Admin</option>
</select>
<button>SUBMIT</button>
 </div>
 </div>
 </div>
</div>
{/* <Login/> */}

 </>
  )
}

export default SignUp
