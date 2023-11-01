


const Calendar = () => {

  return (
    <>    <div className='Appointment-Inputs'>
<h1>Dental Appointment</h1>
<input type='text' placeholder='First Name'></input>
<input type='text' placeholder='Last Name'></input>
<input type='text' placeholder='Contact Number'></input>
<input type='text' placeholder='Email'></input>
<textarea></textarea>
<select>
  <option>Select Your Doctor</option>
  <option>Doctor01</option>
  <option>Doctor02</option>
</select>
<select>
  <option>Time</option>
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
</select>
    </div>

    </>

  );
};

export default Calendar;