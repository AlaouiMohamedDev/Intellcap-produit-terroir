import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'

export default function aboutUs() {
  return (
    <div class="font-poppins h-screen">
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
        <div class="bg-card bg-center space-y-4 bg-cover w-full flex flex-col items-center justify-center text-white relative h-1/3">
            <div class="bg-black/50 absolute w-full h-full z-10">

            </div>
            <div class="flex items-center text-xl z-20 space-x-2">
                <a onClick = {() => router.push("/")} class="cursor-pointer hover:text-main duration-200">Home</a>
                <i class='text-lg bx bxs-label'></i>
                <span class="">Panier</span>
            </div>
            <h1 class="z-20 text-3xl font-bold uppercase">Panier</h1>
        </div>
        <div class="grid grid-cols-3 gap-5 px-24 py-10">
            <div class="col-span-2 space-y-5 flex flex-col items-center w-full px-2 py-3">
                <div class="flex items-center w-full space-x-5 border-t-2 py-3">
                    <img src="/product/miel.jpg" class="w-[150px] h-[150px] object-cover rounded" />
                    <div class="flex flex-col items-left w-full">
                        <div class="flex items-center justify-between w-full">
                            <span class="text-md font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span class="text-md font-bold mt-2">18,00 MAD</span>
                        </div>

                        <div class="flex justify-between mt-6">
                            <div class="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-md">
                                <span class="text-gray-400">-</span>
                                <span>3</span>
                                <span class="text-gray-400">+</span>
                            </div>
                            <div class="flex items-center text-xs text-gray-400">
                                <i class='bx bx-x' ></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center w-full space-x-5 border-t-2 py-3">
                    <img src="/product/paprika.jpg" class="w-[150px] h-[150px] object-cover rounded" />
                    <div class="flex flex-col items-left w-full">
                        <div class="flex items-center justify-between w-full">
                            <span class="text-md font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span class="text-md font-bold mt-2">18,00 MAD</span>
                        </div>

                        <div class="flex justify-between mt-6">
                            <div class="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-md">
                                <span class="text-gray-400">-</span>
                                <span>3</span>
                                <span class="text-gray-400">+</span>
                            </div>
                            <div class="flex items-center text-xs text-gray-400">
                                <i class='bx bx-x' ></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center w-full space-x-5 border-t-2 py-3">
                    <img src="/product/harissa.jpg" class="w-[150px] h-[150px] object-cover rounded" />
                    <div class="flex flex-col items-left w-full">
                        <div class="flex items-center justify-between w-full">
                            <span class="text-md font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span class="text-md font-bold mt-2">18,00 MAD</span>
                        </div>

                        <div class="flex justify-between mt-6">
                            <div class="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-md">
                                <span class="text-gray-400">-</span>
                                <span>3</span>
                                <span class="text-gray-400">+</span>
                            </div>
                            <div class="flex items-center text-xs text-gray-400">
                                <i class='bx bx-x' ></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer /> 
    </div>
  )
}
