
import React, { useState } from 'react'

export default function ProductModal({product}) {

const [count,setCount] = useState(1)

const increase = () =>{
    setCount(count+1)
}
const decrease = () =>{
    if(count>=2)
    {
        setCount(count-1)
    }
}


const ModalP = () => {
    const ProductM = document.querySelector('.ProductM')
    ProductM.classList.remove('flex')
    ProductM.classList.add('hidden')
}
  return  (
    <div className="fade  h-screen w-full fixed z-90 top-0 hidden ProductM justify-center items-center ">
        <div onClick={ModalP} className=" bg-gray-900/70 w-full h-screen absolute">
        </div>
        {
            (product !=null)
            &&
            <div className="w-full h-screen md:w-[850px] md:h-[510px] bg-white flex flex-col md:flex-row relative">
            <i onClick={ModalP} className='bx bx-x absolute right-5 top-5 text-lg text-gray-700 cursor-pointer hover:text-main duration-300'></i>
                <img src={`https://images.codata-admin.com/terroir/products/${product.image}`} alt="" className="w-full md:w-[50%] object-cover" />
                <div className="flex flex-col px-10 h-full py-5 md:py-10 justify-between w-full">
                    <div className="flex flex-col space-y-5 md:space-y-10">
                        <div  className="flex flex-col space-y-4">
                            <h1 className="text-xl">{product.name}</h1>
                            <span className="text-md text-gray-600">{product.price} DHs</span>
                            <p className="text-sm font-sans text-gray-600 text-justify">
                            {product.desc}
                            </p>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div className="flex items-center border-y  text-sm text-black/60">
                                <i onClick={decrease} className='cursor-pointer bx bx-chevron-down text-lg py-1 px-2 border-x'></i>
                                <span className="text-xs px-5 h-full flex items-center justify-center w-[40px]">{count}</span>
                                <i onClick={increase} className='cursor-pointer bx bx-chevron-up text-lg py-1 px-2 border-x'></i>
                            </div>
                            <a href="#" className="text-sm md:text-base text-white bg-main px-4 md:px-6 py-3">Ajouter au panier</a>
                        </div>
                    </div>           
                    <div className=" flex justify-center text-sm w-full text-gray-500">
                        <span>Produit terroir Marocaine <span className="text-main animate-pulse">100%</span> naturelle</span>
                    </div> 
                </div>
            </div>
        }
    </div>
  )
}
