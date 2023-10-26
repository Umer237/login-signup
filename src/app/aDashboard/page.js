import Cookies from "js-cookie"


export default function Adashboard(){

return(

    <main > 
        <h1>Welcome to Admin Dashboard</h1>
        <button onClick={Cookies.remove("login")} style={{alignContent:"center", width:500}}><a href="http://localhost:3000/login">Logout</a></button>
    
    </main>
)

}