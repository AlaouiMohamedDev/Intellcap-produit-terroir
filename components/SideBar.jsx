
import React, { useContext, useState,useEffect } from 'react'
import  { useRouter} from 'next/router';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { setCookie,getCookie,deleteCookie } from 'cookies-next';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectUserById } from '../app/users/usersSlice'
import { selectAllCategories } from '../app/categories/categoriesSlice';


export default function Sidebar({categories}) {
//     const [cats,setCats]= useState([])


//    useEffect(()=>{
//         setCats(categories)
//     },[cats])

    const logOut =async ()=>{
        localStorage.clear()
        deleteCookie('token');
        deleteCookie('admin');
        deleteCookie('name');
        deleteCookie('id');
        deleteCookie('public_id');
        deleteCookie('name');
        deleteCookie('email');
        const response =await axios.get(`http://127.0.0.1:5000/logout/${user.id}`);
        router.push("/")
        //document.location.replace('http://localhost:3000/')
    }
    //const {user}=useContext(DataContext)
    
    const user = useSelector(state => selectUserById(state,Number(getCookie('id'))))
    
 
    


    useEffect(() =>{
        AOS.init();
      },[])
    
    const router = useRouter();

    const closeSidebar = () =>{
        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.add('hidden')
        sidebar2.classList.add('-left-full')
        sidebar2.classList.remove('left-0')
    }

    const toggleList = () => {
        const list = document.querySelector('.list')
        list.classList.toggle('hidden')
        list.classList.toggle('flex')
    }

    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }

    const cartModal =()=>{
        const cart= document.querySelector('.cart')
        cart.classList.remove('hidden')
        cart.classList.add('flex')
    }

    const searchModal =()=>{
        const search= document.querySelector('.search')
        search.classList.remove('hidden')
        search.classList.add('flex')
    }
    
  return (
    <aside className="select-none xl:hidden">
            <div onClick={closeSidebar} className="sidebar1 hidden w-full h-screen fixed top-0 z-100 bg-gray-500 opacity-60  transform duration-100">

            </div>
           <div className="sidebar2 flex flex-col w-2/3 h-screen top-0 fixed bg-white z-100  -left-full transform duration-500 ">
                <div className=" flex items-center justify-between px-2 py-5 text-sm">
                    <img src="/logo-1.png" alt="Codata logo" className="h-14 "/>
                    <i onClick={closeSidebar} className='bx bx-x  text-2xl font-bold rounded cursor-pointer'></i>
                </div>
                <div className="flex flex-col px-5 text-gray-700  text-left font-semibold">
                    <span onClick = {() => router.push("/")} className="cursor-pointer hover:text-gray-500 py-4 border-y border-gray-200">Acceuil</span>
                    <div className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">
                        <div onClick={toggleList} className=" flex items-center justify-between">
                            <span >CATÉGORIES DE PRODUITS</span>
                            <i className='pr-1 bx bxs-chevron-down'></i>
                        </div>
                        <nav  className="hidden flex-col transition-all duration-500 text-xs text-left pl-10 py-5 space-y-3 list">
                            {
                            categories.map(cat=>{
                                return(

                                    <div key={cat.id}  onClick = {() => {
                                        closeSidebar()
                                        setCookie('cat',category.id)
                                        deleteCookie('coop')
                                        deleteCookie('search')
                                        router.push(`/products`)
                                    }} className="flex items-center space-x-3">
                                        <img src={`https://images.codata-admin.com/terroir/categories/${cat.image}`} alt="" className="w-5" />
                                        <a className="hover:text-main transition-all duration-500 cursor-pointer">{cat.name}</a>
                                    </div>
                                )
                            })
                            
                            }
                        </nav>
                    </div>
                    <span onClick = {() => router.push("/cooperatives")} className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">COOPÉRATIVES</span>
                    <span onClick = {() => router.push("/aboutUs")} className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">A PROPOS</span>
                    <span onClick = {() => router.push("/contact")} className="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">CONTACTEZ NOUS</span>
                </div>
                <div className="text-xl grid grid-cols-2 gap-4 text-center py-10 px-5">
                    <div onClick={searchModal} className="text-gray-500 flex flex-col hover:text-main duration-300 items-center space-y-2 border border-gray-300/50 py-2 px-2">
                        <i className='bx bx-search cursor-pointer'></i>
                        <span className="text-xs">Chercher</span>
                    </div>
                    {
                        (user != null)
                        ?
                        <div className="text-gray-500 flex flex-col hover:text-main duration-300 items-center space-y-2 border border-gray-300/50 py-2 px-2">
                            <i className='bx bx-user cursor-pointer text-main'></i>
                            <span className="text-xs">{user.name}</span>
                        </div>
                        :
                        <div onClick={ModalAuth}  className="text-gray-500 flex flex-col hover:text-main duration-300 items-center space-y-2 border border-gray-300/50 py-2 px-2">
                            <i className='bx bx-user cursor-pointer hover:text-main hover:-translate-y-1 duration-300'></i>
                            <span className="text-xs">Se connecter</span>
                        </div>
                    }
                    
                    <div onClick = {() => router.push("/wishList")} className="text-gray-500 flex flex-col hover:text-main duration-300 items-center space-y-2 border border-gray-300/50 py-2 px-2">
                        <i className='bx bx-heart cursor-pointer hover:text-main hover:-translate-y-1 duration-300'></i>
                        <span className="text-xs">Favories</span>
                    </div>
                    <div onClick={cartModal} className="text-gray-500 flex flex-col hover:text-main duration-300 items-center space-y-2 border border-gray-300/50 py-2 px-2">
                        <i className='bx bx-cart cursor-pointer hover:text-main hover:-translate-y-1 duration-300'></i>
                        <span className="text-xs">Cart</span>
                    </div>
                </div>
                <div className="flex space-x-3 px-3 w-full text-xs">
                   {
                    (user !=null)
                    &&
                    (user.admin==true)
                    &&
                    <div onClick = {() => router.push("/admin/dashboard")} className="w-full bg-main flex items-center justify-center rounded space-x-2 text-white cursor-pointer">
                        <span className="py-3">Dashboard</span>
                        <i className='bx bxs-dashboard' ></i>
                    </div>
                   }
                   {
                    (user != null)
                    &&
                    <div onClick={logOut} className="w-full bg-dashBlack flex items-center justify-center rounded space-x-2 text-white cursor-pointer">
                        <span className="py-3">déconnécter</span>
                        <i className='bx bx-lock' ></i>
                    </div>
                   }
                </div>
            </div>
    </aside>
  )
}
