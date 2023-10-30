'use client'
import { deleteCookie,  } from "cookies-next"

export default function Adashboard(){

    const setCooky=()=>{
        deleteCookie('loggedin', 'false');

        window.location.href="/login"
       }

return(

    <main > 
        <h1>Welcome to Admin Dashboard</h1>
        <button onClick={setCooky} style={{alignContent:"center", width:500}}>Logout</button>
    
    </main>
)

}