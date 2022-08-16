import React, { useEffect } from 'react'
import AOS from 'aos'
import { useRouter } from 'next/router';
import 'aos/dist/aos.css'

export default function Header() {

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
        console.log('hi')
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
        <div class="bg-main text-white flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between py-3 px-10">
            <h6 class="text-sm">PRODUCTION 100% MAROCAINE.</h6>
            <div class="flex items-center space-x-3 text-lg">
                <i class='bx bxl-instagram'></i>
                <i class='bx bxl-android' ></i>
                <i class='bx bxl-facebook' ></i>
            </div>
            <div class="text-sm flex items-center ">
                <i class='bx bx-phone-call pr-2' ></i>
                <span>+212 658987515</span>
            </div>
        </div>
        {/* END topbar */}

        {/* Header */}  
        <div class="header duration-300 flex items-center justify-between py-5 px-10 bg-white w-screen">
            <img src="/logo-1.png" class=" w-48 md:w-64" />
            <i class='bx bx-menu flex xl:hidden text-4xl cursor-pointer' onClick= {sidebar}></i>
            <div class="text-sm space-x-7 items-center hidden xl:flex"> 
                <div class="flex flex-col items-center group relative">
                    <a class="hover:text-main duration-500" href="">ACCEUIL</a>
                    <span class="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div class="flex flex-col items-center group relative">
                    <a onClick = {() => router.push("/products")} class="hover:text-main duration-500 flex items-center space-x-2" onMouseOver={CatHover}>
                        <span>CATÉGORIES DE PRODUITS</span>
                        <i class='text-xs bx bxs-down-arrow'></i>
                    </a>
                    <span class="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                    <div onMouseLeave={CatLeave}  class="fade cat top-10 z-20 uppercase hidden duration-700  absolute  left-0  grid-rows-4 grid-flow-col gap-7 py-5 px-5 bg-white w-max shadow-md rounded">
                        <div class="flex items-center space-x-3 ">
                            <img src="miel.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">Miels, Amlou et confitures</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="huile.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">Huiles alimentaires</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="rice.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">Semoules & farines</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="epice.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">épices & condiments</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="nuts.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">Fruits secs</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="tea-cup.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">Thés & Tisanes</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="serum.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">THydrolats & Tisanes</span>
                        </div>
                        <div class="flex items-center space-x-3 ">
                            <img src="bien-etre.png" alt="" class="w-8" />
                            <span class="text-sm hover:text-main duration-500">Bien être</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center group relative">
                    <a class="hover:text-main duration-500" href="">COOPÉRATIVES</a>
                    <span class="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div class="flex flex-col items-center group relative">
                    <a class="hover:text-main duration-500" href="">A PROPOS</a>
                    <span class="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>
                <div class="flex flex-col items-center group relative">
                    <a class="hover:text-main duration-500" href="">CONTACTEZ NOUS</a>
                    <span class="h-0.5 bg-main w-0 absolute -bottom-2 rounded transition-all duration-500 group-hover:w-full"></span>
                </div>   
            </div>
            <div class="hidden text-xl xl:flex items-center space-x-7">
                <i class='bx bx-search cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={searchModal}></i>
                <i class='bx bx-user cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={ModalAuth} ></i>
                <i class='bx bx-heart cursor-pointer hover:text-main hover:-translate-y-1 duration-300' ></i>
                <i class='bx bx-cart cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={cartModal}></i>
            </div>
        </div>
    {/* END Header */}
    </div>
  )
}
