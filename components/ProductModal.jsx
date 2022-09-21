
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../app/cartSlices'

export default function ProductModal({product}) {

const [count,setCount] = useState(1)


useEffect(() => {
    setCount(1)
},[])
const increase = () =>{
    setCount(count+1)
}
const decrease = () =>{
    if(count>=2)
    {
        setCount(count-1)
    }
}

const dispatch = useDispatch();


const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
                <img src={product.image} alt="" className="w-full md:w-[50%] object-cover" />
                <div className="flex flex-col px-10 h-full py-5 md:py-10 justify-between w-full">
                    <div className="flex flex-col space-y-5 md:space-y-10">
                        <div  className="flex flex-col space-y-4">
                            <h1 className="text-xl">{product.nom}</h1>
                            <span className="text-md text-gray-600">{product.prix} DHs</span>
                            <p className="text-sm font-sans text-gray-600 text-justify">
                            {product.description}
                            </p>
                        </div>
                        <div className="flex justify-between items-center ">
                            <a onClick={()=> handleAddToCart(product)}  className="text-sm md:text-base text-white bg-main px-4 md:px-6 py-3">Ajouter au panier</a>
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
