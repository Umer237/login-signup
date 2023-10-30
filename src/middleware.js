import { getCookie } from 'cookies-next'
import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server'
 
export function middleware(request) {

    const url = request.nextUrl.clone();

let cookie = request.cookies.get('loggedin','true');

if(!cookie){

    if (request.nextUrl.pathname.startsWith('/aDashboard')) {

        return NextResponse.rewrite(new URL('/login', request.url))

  }
  else if(request.nextUrl.pathname.startsWith('/cDashboard')) {

    return NextResponse.rewrite(new URL('/login', request.url))

}
}

else{

     if(url.pathname ==='/login'){

        url.pathname = 'aDashboard'; 

        return NextResponse.redirect(url);
     }
     else if(url.pathname ==='/login'){

        url.pathname = 'cDashboard'; 

        return NextResponse.redirect(url);
     }
} 


}