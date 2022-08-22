import React from 'react'
import { useRouter } from 'next/router';

export default function Cart() {
    const router = useRouter();

    const cartModal =()=>{
        const cart= document.querySelector('.cart')
        cart.classList.add('hidden')
        cart.classList.remove('flex')
    }

  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden justify-end bg-gray-900/70  fade cart">
        <div className="h-screen w-full md:w-[430px] bg-white flex flex-col justify-between absolute fade-left">
           <div>
                <div className="relative flex items-center justify-center border-b border-gray-300 space-x-2 py-4 ">
                    <span>Your Cart</span><span>(1)</span>
                    <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main absolute right-5 text-gray-400" onClick={cartModal}/>
                </div>
                <div className="flex flex-col items-center  w-full px-2 py-3">
                    <div className="flex items-center justify-between space-x-5">
                        <img src="/prod-test.jpg" className="w-[150px] h-[150px] object-cover" />
                        <div className="flex flex-col items-left">
                            <span className="text-xs font-bold">SAFRAN DE TALIOUINE 0,5G</span>
                            <span className="text-xs text-gray-400 font-bold mt-2">18,00 MAD</span>
                            <div className="flex justify-between mt-6">
                                <div className="flex items-center border border-gray-300 space-x-5 py-2 px-1 text-sm">
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
           </div>
            <div className="w-full flex flex-col py-4">
                <div className="flex items-center justify-between bg-gray-100 py-5 px-3 text-sm mb-6">
                    <span>Total:</span>
                    <span>18.00 MAD</span>
                </div>
                <a  onClick = {() => router.push("/card")} className="cursor-pointer bg-main flex items-center justify-center py-3 text-white mx-3 mb-3">
                    Consulter votre carte
                </a>
                <a className="flex text-black items-center justify-center py-3 border border-black/50 mx-3">
                    Checkout
                </a>
            </div>
        </div>
    </div>
  )
}
