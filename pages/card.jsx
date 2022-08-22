import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

export default function aboutUs() {
    const router = useRouter();
  return (
    <div className="font-poppins h-screen">
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
        <div className="bg-card bg-center space-y-4 bg-cover w-full flex flex-col items-center justify-center text-white relative h-1/3">
            <div className="bg-black/50 absolute w-full h-full z-10">

            </div>
            <div className="flex items-center text-xl z-20 space-x-2">
                <a onClick = {() => router.push("/")} className="cursor-pointer hover:text-main duration-200">Home</a>
                <i className='text-lg bx bxs-label'></i>
                <span className="">Panier</span>
            </div>
            <h1 className="z-20 text-3xl font-bold uppercase">Panier</h1>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 md:px-16 lg:px-24 py-10 items-start">
            <div className="lg:col-span-2 space-y-5 flex flex-col items-center w-full px-2 py-3">
                <div className="flex items-center w-full space-x-5 border-t-2 py-3">
                    <img src="/product/miel.jpg" className="w-[150px] h-[150px] object-cover rounded" />
                    <div className="flex flex-col items-left w-full">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-md font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span className="text-md font-bold mt-2">18,00 MAD</span>
                        </div>

                        <div className="flex justify-between mt-6">
                            <div className="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-md">
                                <span className="text-gray-400">-</span>
                                <span>3</span>
                                <span className="text-gray-400">+</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-400">
                                <i className='bx bx-x' ></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full space-x-5 border-t-2 py-3">
                    <img src="/product/paprika.jpg" className="w-[150px] h-[150px] object-cover rounded" />
                    <div className="flex flex-col items-left w-full">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-md font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span className="text-md font-bold mt-2">18,00 MAD</span>
                        </div>

                        <div className="flex justify-between mt-6">
                            <div className="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-md">
                                <span className="text-gray-400">-</span>
                                <span>3</span>
                                <span className="text-gray-400">+</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-400">
                                <i className='bx bx-x' ></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full space-x-5 border-t-2 py-3">
                    <img src="/product/harissa.jpg" className="w-[150px] h-[150px] object-cover rounded" />
                    <div className="flex flex-col items-left w-full">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-md font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span className="text-md font-bold mt-2">18,00 MAD</span>
                        </div>

                        <div className="flex justify-between mt-6">
                            <div className="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-md">
                                <span className="text-gray-400">-</span>
                                <span>3</span>
                                <span className="text-gray-400">+</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-400">
                                <i className='bx bx-x' ></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full text-sm">
                <div className="flex flex-col w-full space-y-5">
                    <div className="bg-gray-200/70 space-y-5 py-5 px-5 rounded">
                        <div className="flex justify-between items-center">
                            <p>Sous totale</p>
                            <span>300 MAD</span>
                        </div>
                        <div className=" flex justify-between items-center">
                            <p>Livraison</p>
                            <span>50 MAD</span>
                        </div>
                        <div className="text-lg border-t border-black flex justify-between items-center pt-5">
                            <p>Total</p>
                            <span>350 MAD</span>
                        </div>
                    </div>
                    <input type="submit" value="Confirmer Commande" className="cursor-pointer bg-main w-full text-white py-3" />
                    <div onClick = {() => router.push("/products")} className="flex items-center space-x-1 cursor-pointer hover:border-b border-black w-max duration-150">
                        <i className='bx bx-left-arrow-alt text-xl' ></i>
                        <span>Ajouter autre produit</span>
                    </div>
                </div>
            </section>
        </section>
        <Footer /> 
    </div>
  )
}