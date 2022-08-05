
import React, { useEffect } from 'react'
import  { useRouter} from 'next/router';
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Sidebar() {

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

    
    
  return (
    <aside className="">
            <div onClick={closeSidebar} className="sidebar1 hidden w-full h-screen fixed top-0 z-50 bg-gray-500 opacity-60  transform duration-100">

            </div>
           <div className="sidebar2 flex flex-col w-2/3 h-screen top-0 fixed bg-white z-50  -left-full transform duration-500 ">
                <div className=" flex items-center justify-between px-2 py-5 text-sm">
                    <img src="/logo-1.png" alt="Codata logo" className="h-14 "/>
                    <i onClick={closeSidebar} class='bx bx-x  text-2xl font-bold rounded cursor-pointer'></i>
                </div>
                <div className="flex flex-col px-5 text-gray-700  text-left font-semibold">
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-y border-gray-200">Acceuil</span>
                    <div class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">
                        <div onClick={toggleList} class=" flex items-center justify-between">
                            <span>CATÉGORIES DE PRODUITS</span>
                            <i class='pr-1 bx bxs-chevron-down'></i>
                        </div>
                        <nav  class="hidden flex-col transition-all duration-500 text-xs text-left pl-10 py-5 space-y-3 list">
                            <div class="flex items-center space-x-3">
                                <img src="miel.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">Miels, Amlou et confitures</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="huile.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">Huiles alimentaires</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="rice.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">Semoules & farines</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="epice.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">épices & condiments</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="nuts.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">Fruits secs</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="tea-cup.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">Thés & Tisanes</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="serum.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">THydrolats & Tisanes</a>
                            </div>
                            <div class="flex items-center space-x-3">
                                <img src="bien-etre.png" alt="" class="w-5" />
                                <a class="hover:text-main transition-all duration-500 cursor-pointer">Bien être</a>
                            </div>
                        </nav>
                    </div>
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">COOPÉRATIVES</span>
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">A PROPOS</span>
                    <span class="cursor-pointer hover:text-gray-500 py-4 border-b border-gray-200">CONTACTEZ NOUS</span>
                </div>
               
            </div>
    </aside>
  )
}
