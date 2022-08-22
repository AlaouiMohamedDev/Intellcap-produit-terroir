import React from 'react'
import ProductModal from './ProductModal'

export default function NewProduct() {
    const ModalP = () => {
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
  return (
    <div className="py-24 flex flex-col items-center justify-center  md:px-16 xl:px-24 bg-white">
        <h1 className="text-2xl font-bold mb-4">Nouveau Produits</h1>
        <h6 className="text-md text-gray-400">100% Marocaine</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 md:gap-24 xl:gap-28 py-10">
            <div className="flex flex-col space-y-5 group ">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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
            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
                    <img src="/product/harissa.jpg" className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                    <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                        <a  className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
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
            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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
            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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

            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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
            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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
            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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
            <div className="flex flex-col space-y-5 group">
                <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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
    </div>
  )
}
