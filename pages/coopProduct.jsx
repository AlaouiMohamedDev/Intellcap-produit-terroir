import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'

export default function coopProduct() {
    const ModalP = () => {
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
  return (
    <div className="font-poppins">
        <Head>
            <title>IntellCap Produit 100% Marocaine</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header />
        <SideBar />
        <AuthModal />
        <Cart />
        <SearchModal />
        <div className="bg-cooperative space-y-4 bg-cover bg-center w-full flex flex-col items-center justify-center text-white relative h-1/3">
            <div className="bg-black/50 absolute w-full h-full z-10">

            </div>
            <div className="z-20 w-[65%] cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center rounded py-7 text-white space-x-5 px-5">
                <img src="/cooperative/coop-2.png" className="object-cover w-[150px] h-[150px] border-2 border-white p-2 rounded-full" />
                <div className="flex flex-col w-full space-y-5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Cooperative Taliouine</h1>
                    
                    </div>
                <p className="text-sm text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eius officiis hic quia! Nobis, cupiditate.</p>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center text-xs space-x-2 text-main bg-white py-1 px-2 w-max rounded">
                        <i className='bx bx-calendar-check'></i>
                        <span className="">16 Decmber 2022</span>
                    </div>
                    <span className="text-xs text-main bg-white py-1 px-2 rounded w-max">10 produits</span>
                </div>
            </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-10">
            <div className="flex flex-col space-y-5 group">
                <div className="h-[300px] w-full   relative overflow-hidden border-box">
                    <img src="/product/miel.jpg" className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                    <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                        <a className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                            Ajoutez à la Cart
                        </a>
                        <a onClick={ModalP} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                        Vue Rapide
                        </a>
                    </div>
                    <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                        <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                        <div className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                            <i className='bx bx-heart text-md '></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-start">
                    <h6 className="font-bold">Miel de ravenelle - 220g</h6>
                    <h6 className="text-sm text-black/50">Produit par : <span className="text-main">Ahmed coopératives</span></h6>
                    <div className="flex items-center justify-between w-full">
                        <h6 className="text-main font-black">80 DHs</h6>
                        <span className="text-xs text-black/40">100% naturelle</span>
                    </div>
                </div>
                </div>
                <div className="flex flex-col space-y-5 group ">
                <div className="h-[300px] w-full bg-gray-300 relative overflow-hidden border-box">
                    <img src="/product/harissa.jpg" className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                    <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                        <a className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                            Ajoutez à la Cart
                        </a>
                        <a onClick={ModalP} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                        Vue Rapide
                        </a>
                    </div>
                    <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                        <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                        <div className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                            <i className='bx bx-heart text-md '></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-start">
                    <h6 className="font-bold">Harissa du souss rouge - 220g</h6>
                    <h6 className="text-sm text-black/50">Produit par : <span className="text-main">Taliouine coopératives</span></h6>
                    <div className="flex items-center justify-between w-full">
                        <h6 className="text-main font-black">38 DHs</h6>
                        <span className="text-xs text-black/40">100% naturelle</span>
                    </div>
                </div>
                </div>
                <div className="flex flex-col space-y-5 group ">
                <div className="h-[300px] w-full bg-gray-300 relative overflow-hidden border-box">
                    <img src="/product/paprika.jpg" className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                    <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                        <a className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                            Ajoutez à la Cart
                        </a>
                        <a onClick={ModalP} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                        Vue Rapide
                        </a>
                    </div>
                    <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                        <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                        <div className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                            <i className='bx bx-heart text-md '></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-start">
                    <h6 className="font-bold">Paprika - 100g</h6>
                    <h6 className="text-sm text-black/50">Produit par : <span className="text-main">Douceurs coopératives</span></h6>
                    <div className="flex items-center justify-between w-full">
                        <h6 className="text-main font-black">28 DHs</h6>
                        <span className="text-xs text-black/40">100% naturelle</span>
                    </div>
                </div>
                </div>
                <div className="flex flex-col space-y-5 group ">
                <div className="h-[300px] w-full bg-gray-300 relative overflow-hidden border-box">
                    <img src="/product/zaatr.jpg" className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                    <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                        <a className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                            Ajoutez à la Cart
                        </a>
                        <a onClick={ModalP} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                        Vue Rapide
                        </a>
                    </div>
                    <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                        <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                        <div className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                            <i className='bx bx-heart text-md '></i>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-start">
                    <h6 className="font-bold">Origan seche - 50g</h6>
                    <h6 className="text-sm text-black/50">Produit par : <span className="text-main">Herblo coopératives</span></h6>
                    <div className="flex items-center justify-between w-full">
                        <h6 className="text-main font-black">13 DHs</h6>
                        <span className="text-xs text-black/40">100% naturelle</span>
                    </div>
                </div>
                </div>
        </div>
        <ProductModal />
        <Footer /> 
    </div>
    
  )
}
