import React from 'react'
import { setCookie,getCookie,deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function DropDown(props) {
  const router = useRouter();
  const logOut =async ()=>{
    localStorage.clear()
    deleteCookie('token');
    deleteCookie('admin');
    deleteCookie('name');
    deleteCookie('id');
    deleteCookie('public_id');
    deleteCookie('name');
    deleteCookie('email');
    const response =await axios.get(`http://127.0.0.1:5000/logout/${props.user.id}`);
    console.log("🚀 ~ file: DropDown.jsx ~ line 15 ~ logOut ~ response", response)
    router.push("/")
    //document.location.replace('http://localhost:3000/')
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
            <a onClick = {() => router.push("/admin/dashboard")}  >Dashboard</a>
            <i className='bx bxs-dashboard'></i>
        </div>
       }
       
       <div onClick={logOut} className="flex justify-between items-center py-3 space-x-2 hover:text-main">
            <a >Se déconnécter</a>
            <i className='bx bx-door-open' ></i>
       </div>
    </div>
  )
}
