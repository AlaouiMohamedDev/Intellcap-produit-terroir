import React, { useEffect,useContext } from 'react'
import AOS from 'aos'
import { useRouter } from 'next/router'
import 'aos/dist/aos.css'
import axios from 'axios'
import {Providers,DataContext} from '../Context/ContextApi';

export default function Header() {
    const user  = useContext(DataContext); 
    console.log("🚀 ~ file: Header.jsx ~ line 10 ~ Header ~ user", user)
    
    
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
        {/* END topbar */}

        {/* Header */}  
        <div className="header duration-300 flex items-center justify-between py-5 px-10 bg-white w-screen">
            <img src="/logo-1.png" className=" w-48 md:w-64" />
            <i className='bx bx-menu flex xl:hidden text-4xl cursor-pointer' onClick= {sidebar}></i>
            <div className="text-sm space-x-7 items-center hidden xl:flex"> 
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/")} className="hover:text-main duration-500" >ACCEUIL</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a className="hover:text-main duration-500 flex items-center space-x-2" onMouseOver={CatHover}>
                        <span>CATÉGORIES DE PRODUITS</span>
                        <i className='text-xs bx bxs-down-arrow'></i>
                    </a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                    <div onMouseLeave={CatLeave}  className="fade cat top-10 z-50 uppercase hidden duration-700  absolute  left-0  grid-rows-4 grid-flow-col gap-7 py-5 px-5 bg-white w-max shadow-md rounded">
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="miel.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">Miels, Amlou et confitures</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="huile.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">Huiles alimentaires</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="rice.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">Semoules & farines</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="epice.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">épices & condiments</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="nuts.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">Fruits secs</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="tea-cup.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">Thés & Tisanes</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="serum.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">THydrolats & Tisanes</span>
                        </div>
                        <div onClick = {() => router.push("/products")} className="flex items-center space-x-3 ">
                            <img src="bien-etre.png" alt="" className="w-8" />
                            <span className="text-sm hover:text-main duration-500">Bien être</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/cooperatives")} className="hover:text-main duration-500">COOPÉRATIVES</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/aboutUs")} className="hover:text-main duration-500" >A PROPOS</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div className="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/contact")} className="hover:text-main duration-500">CONTACTEZ NOUS</a>
                    <span className="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>   
            </div>
            <div className="hidden text-xl xl:flex items-center space-x-7">
                <i className='bx bx-search cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={searchModal}></i>
                {
                  //  (user.data.status===200) ? <i className='bx bx-user cursor-pointer text-red-500 hover:text-main hover:-translate-y-1 duration-300' onClick={ModalAuth} ></i> : <i className='bx bx-user cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={ModalAuth} ></i>

                }
                <i onClick = {() => router.push("/wishList")} className='bx bx-heart cursor-pointer hover:text-main hover:-translate-y-1 duration-300' ></i>
                <i className='bx bx-cart cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={cartModal}></i>
            </div>
        </div>
    {/* END Header */}
    </div>
  )
}
