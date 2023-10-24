'use client'
import { useEffect, useState } from "react";

export default function Table(){

    const [Data, setData]=useState([]);


const tdata=async ()=>{
    const fetchdata= await fetch("http://localhost:3000/api/projects");
    const jsondata= await fetchdata.json();

    setData(jsondata);
    
}

useEffect(()=>{tdata();},[]);

console.log(Data);

    return(

        <main>
<table border={2}>

<thead >
    <tr>
        <td>Email</td>
        <td>Password</td>
        <td>Department</td>
    </tr>
</thead>

<tbody>
    {
        Data.map((item)=>(
        <tr key={item._id}>
            <td>{item.Email}</td>
            <td>{item.Password}</td>
            <td>{item.Department}</td>
        </tr>
        ))
    }
</tbody>


</table>
        </main>
    )
}