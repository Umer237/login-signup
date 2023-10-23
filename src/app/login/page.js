import React from 'react'

const page = () => {
  return (
    <div className='Login'>
    <div className='Login-OneSide'>
    <div className="Login-Flex">
 
 <h2>Login Now</h2>

<div className='textbox'>
  
<input type='email' placeholder='Enter your Email' />
<input placeholder='Password' type='password'></input>

<button><a href='/'>Login Now</a></button>
 </div>
 </div>
 </div>
</div>
  )
}

export default page