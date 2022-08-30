import React from 'react'
import { setCookie,getCookie,deleteCookie } from 'cookies-next';

export default function DropDown(props) {
    const logOut = ()=>{
        localStorage.clear()
        document.location.reload();
        deleteCookie('token');
    }
  return (
    <div className="absolute top-14 z-100 bg-white hidden dropDown flex-col w-max text-sm text-black/70 py-3 px-5 shadow-md rounded fade">
       <span className="py-3 text-main text-xs text-center">{props.user.name}</span>
       <div className="flex justify-between items-center border-b py-3 space-x-2 hover:text-main">
            <a href="" >Profile</a>
            <i className='bx bxs-user-detail'></i>
       </div>
       {
        (props.user.admin==true) 
        && 
        <div className="flex justify-between items-center border-b py-3 space-x-2 hover:text-main">
            <a href="" >Dashboard</a>
            <i className='bx bxs-dashboard'></i>
        </div>
       }
       
       <div onClick={logOut} className="flex justify-between items-center py-3 space-x-2 hover:text-main">
            <a href="" >Se déconnécter</a>
            <i className='bx bx-door-open' ></i>
       </div>
    </div>
  )
}
