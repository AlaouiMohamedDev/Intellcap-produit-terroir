import React, { useEffect,useContext, useState } from 'react'
import AOS from 'aos'
import { useRouter } from 'next/router'
import 'aos/dist/aos.css'
import axios from 'axios'
import DropDown from './DropDown'
import { useSelector } from "react-redux";
import { selectUserById } from '../app/users/usersSlice'
import { setCookie,getCookie,deleteCookie } from 'cookies-next';
import {selectAllCategories} from '../app/categories/categoriesSlice'



export default function Header({categories}) {


//     const [cats,setCats] = useState([])
    
//    useEffect(()=>{
//             setCats(categories)
//     },[cats])

    const dropDown =()=> {
        const drop = document.querySelector('.dropDown')
        drop.classList.toggle('flex')
        drop.classList.toggle('hidden')
    }
    //const {user} =useContext(DataContext);     

    const user = useSelector(state => selectUserById(state,Number(getCookie('id'))))

    const router = useRouter();

    useEffect(() => {

        

        AOS.init();
        const header = document.querySelector('.header')
        
        window.addEventListener('scroll', () => {
            if ((window.scrollY || window.pageYOffset) > 10 ) {
                header.classList.add('fixed')
                header.classList.add('z-90')
                header.classList.add('shadow');
                header.classList.add('top-0');
                header.classList.remove('py-5');
                header.classList.add('py-3');
            }else{
                header.classList.remove('fixed')
                header.classList.remove('z-90')
                header.classList.remove('shadow');
                header.classList.remove('py-3');
                header.classList.remove('top-0');
                header.classList.add('py-5');
            }        
        })
    },[]);

    const sidebar = () => {
        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.remove('hidden')
        sidebar2.classList.remove('-left-full')
        sidebar2.classList.add('left-0');
    }
    const CatHover = () => {
        const cat = document.querySelector('.cat')
        cat.classList.remove('hidden')
        cat.classList.add('grid')
    }

    const CatLeave = () => {
        const cat = document.querySelector('.cat')
        cat.classList.add('hidden')
        cat.classList.remove('grid')
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

    const cats = () => {
        const c= document.querySelector('.cat')
        c.classList.toggle('hidden')
        c.classList.toggle('grid')
    }
  return (
    <div>
          {/* topbar */}
        <div className="bg-main text-white flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between py-3 px-10">
            <h6 className="text-sm">PRODUCTION 100% MAROCAINE.</h6>
            <div className="flex items-center space-x-3 text-lg">
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-android' ></i>
                <i className='bx bxl-facebook' ></i>
            </div>
            <div className="text-sm flex items-center ">
                <i className='bx bx-phone-call pr-2' ></i>
                <span>+212 658987515</span>
            </div>
        </div> 
        {/* END topbar

        {/* Header */}  
        <div className="header duration-300 flex items-center justify-between py-5 px-10 bg-white w-screen select-none">
            <img src="/logo-1.png" className=" w-48 md:w-64" />
            <i className='bx bx-menu flex xl:hidden text-4xl cursor-pointer' onClick= {sidebar}></i>
            <div className="text-xs space-x-7 items-center hidden xl:flex"> 
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/")} className="hover:text-main duration-500 cursor-pointer" >ACCEUIL</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => 
                        {
                            deleteCookie('cat')
                            router.push("/products")
                        }} className="hover:text-main duration-500 cursor-pointer">SHOP </a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick={cats} className="hover:text-main cursor-pointer duration-500 flex items-center space-x-2" >
                        <span>CATÉGORIES</span>
                        <i className='text-xs bx bxs-down-arrow'></i>
                    </a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                    <div className="fade cat top-10 z-50 uppercase hidden duration-700  absolute  left-0  grid-cols-2 h-max gap-7 py-5 px-5 bg-white w-max shadow-md rounded">
                       {
                       categories.map(category=>{
                        if(category.deletedAt == null)
                        {
                            return(
    
                                <div key={category.id} onClick = {() => {
                                    setCookie('cat',category.id)
                                    deleteCookie('coop')
                                    deleteCookie('search')
                                    router.push(`/products`)
                                }} className="flex items-center w-full space-x-3 cursor-pointer ">
                                        <img src={category.image} alt="" className="w-8" />
                                        <span className="text-sm hover:text-main duration-500">{category.name}</span>
                                </div>
                            )
                        }
                        })
                       }
                    </div>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/cooperatives")} className="hover:text-main duration-500 cursor-pointer">COOPÉRATIVES</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/aboutUs")} className="hover:text-main duration-500 cursor-pointer" >A PROPOS</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/contact")} className="hover:text-main duration-500 cursor-pointer">CONTACTEZ NOUS</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>   
            </div>
            <div className="hidden text-xl xl:flex items-center space-x-7">
                <i className='bx bx-search cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={searchModal}></i>
                {
                    (user !=null) 
                    ?
                    <div className="relative flex flex-col items-center">
                        <i onClick={dropDown} className='bx bx-user-check text-2xl cursor-pointer text-main' ></i>
                        <DropDown user={user}/>
                    </div>
                    :  
                    <i className='bx bx-user cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={ModalAuth} ></i>
                 } 
                
                <i onClick = {() => router.push("/wishList")} className='bx bx-heart cursor-pointer hover:text-main hover:-translate-y-1 duration-300' ></i>
                <i className='bx bx-cart cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={cartModal}></i>
            </div>
        </div>
    {/* END Header */}
    </div>
  )
}
