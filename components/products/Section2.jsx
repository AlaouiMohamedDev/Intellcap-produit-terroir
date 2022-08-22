import React from 'react'
import ProductModal from '../ProductModal'


export default function Section2() {
    const ModalP = () => {
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
  return (
    <>
        <div className="bg-white py-10 px-5 md:px-10 lg:px-0 grid grid-cols-4">
            <div className="col-span-4 lg:col-span-3 w-full h-full lg:pl-5"> 
                <div className="flex items-center justify-between text-sm text-black/60">
                    <span>(25) produits</span>
                    <div className="flex items-center space-x-2">
                        <span>Filter par :</span>
                        <select className="w-[200px] border hover:border-main duration-200 rounded outline-none py-1 px-2">
                            <option>Default</option>
                            <option>Prix</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
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
            </div>
            <div className="flex flex-col px-5 w-full space-y-5 col-span-4 lg:col-span-1">
                <div className="flex flex-col space-y-5 border hover:border-main duratio-200 rounded py-5 px-5 w-full">
                    <h1>Categories</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="rice.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">Semoules & farines</a>
                            </div>
                            <span className="text-black/60">(50)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="miel.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">Miels, Amlou..</a>
                            </div>
                            <span className="text-black/60">(10)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="epice.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">épices & condiments</a>
                            </div>
                            <span className="text-black/60">(2)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="nuts.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">Fruits secs</a>
                            </div>
                            <span className="text-black/60">(2)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="tea-cup.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">Thés & Tisanes</a>
                            </div>
                            <span className="text-black/60">(2)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="serum.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">THydrolats & Tisanes</a>
                            </div>
                            <span className="text-black/60">(2)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                                 <img src="bien-etre.png" alt="" className="w-4" />
                                 <a className="text-main cursor-pointer">Bien être</a>
                            </div>
                            <span className="text-black/60">(2)</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 border hover:border-main duratio-200 rounded py-5 px-5 w-full">
                    <h1>Cooperatives</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 text-xs text-main">
                            <i className='bx bxs-circle-half'></i>
                            <span>Ahmed</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-main">
                            <i className='bx bxs-circle-half'></i>
                            <span>Talioune</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-main">
                            <i className='bx bxs-circle-half'></i>
                            <span>DaraaCons</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-main">
                            <i className='bx bxs-circle-half'></i>
                            <span>Lorem</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <ProductModal />
    </>
  )
}
