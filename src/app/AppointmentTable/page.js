'use client'
import React, { useEffect, useState } from 'react'

const page = () => {


    const [data, setdata] = useState([]);


   const fetching=async()=> {

        const mydata = await fetch("http://localhost:3000/api/appointRoute");
        const jsondata = await mydata.json();
        setdata(jsondata);
    }


    useEffect(() => { fetching(); }, []);

console.log(data)
    return (

        <div>

            <h1>Appointment Details</h1>

            <table border={2}>

                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Contact Number</td>
                        <td>Email</td>
                        <td>Procedure</td>
                        <td>Appointment Date</td>
                        <td>Time</td>
                        <td>Doctor</td>
                        <td>Message</td>

                    </tr>
                </thead>

                <tbody>{

                    data.map((item) => (

                        <tr key={item._id}>

                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.ContactNumber}</td>
                            <td>{item.Email}</td>
                            <td>{item.Procedure}</td>
                            <td>{item.AppointDate}</td>
                            <td>{item.Time}</td>
                            <td>{item.Doctor}</td>
                            <td>{item.Message}</td>

                        </tr>
                    ))

                }</tbody>
            </table>



        </div>
    )
}

export default page