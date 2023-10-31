import { NextResponse } from 'next/server'
 
export function middleware(request) {

    const url = request.nextUrl.clone();

let admincookie = request.cookies.get('Adminloggedin','true');
let creativecookie= request.cookies.get('Creativeloggedin','true');

if(!admincookie){

    if (request.nextUrl.pathname.startsWith('/aDashboard')) {

        return NextResponse.rewrite(new URL('/login', request.url))

  }
}

 if(!creativecookie){

    if(request.nextUrl.pathname.startsWith("/cDashboard")){
        return NextResponse.rewrite(new URL('/login', request.url));
    }
}

else{

     if(url.pathname ==='/login'){
        
        if(admincookie){
            url.pathname = 'aDashboard'; 

            return NextResponse.redirect(url);
        }
        else if(creativecookie){

            url.pathname = 'cDashboard'; 
    
            return NextResponse.redirect(url);
         }
      
     }
    
} 


}