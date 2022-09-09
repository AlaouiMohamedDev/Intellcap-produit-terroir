import React from 'react'
import { useRouter } from 'next/router';
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../app/cartSlices";

export default function Cart() {
    const router = useRouter();

    const cartModal =()=>{
        const cart= document.querySelector('.cart')
        cart.classList.add('hidden')
        cart.classList.remove('flex')
    }

 const [cart,setCart] = useState([])

  const c = useSelector((state) => state.cart);
  const dispatch = useDispatch();

    useEffect(() => {
        setCart({})
    },[])


const [total,setTotal] = useState(0)

  useEffect(() => {
    setCart(c)
    
    var totalitem= 0
    c.cartItems.map(c=>{
        totalitem += c.prix * c.cartQuantity
    })
    setTotal(totalitem)
  }, [cart, dispatch,c]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden justify-end bg-gray-900/70  fade cart">
        <div className="h-screen w-full md:w-[430px] bg-white flex flex-col  absolute fade-left">
           <div>
                <div className="relative flex items-center justify-between bg-gray-200 space-x-2 py-1 px-3 text-gray-500">
                    <span className="text-xs uppercase">votre carte </span>
                    <i className = "bx bx-x cursor-pointer text-xl font-semibold hover:text-main  " onClick={cartModal}/>
                </div>
                <div className="flex flex-col items-center space-y-3 px-5 py-3 overflow-y-auto h-[400px] scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-black">
                    {
                        cart.cartItems &&
                        cart.cartItems.map(cartItem => (
                            <div key={cartItem.id} className="flex items-center  py-4 border-b last:border-none w-full  space-x-5">
                                <img src={`https://images.codata-admin.com/terroir/products/${cartItem.image}`} className="w-[100px] h-[100px] object-cover" />
                                <div className="flex flex-col space-y-3 items-left">
                                    <span className="text-[14px] text-black/70">{cartItem.nom}</span>
                                    <span className="text-xs font-bold ">{cartItem.prix} MAD</span>
                                    <div className="flex justify-between space-x-5 mt-6">
                                        <div className="flex items-center text-sm text-black/60">
                                            <i onClick={() => handleDecreaseCart(cartItem)}  className='cursor-pointer bx bx-chevron-down text-lg py-1 px-2 border'></i>
                                            <span className="text-xs px-5 border-y h-full flex items-center justify-center w-[40px]">{cartItem.cartQuantity}</span>
                                            <i onClick={() => handleAddToCart(cartItem)} className='cursor-pointer bx bx-chevron-up text-lg py-1 px-2 border'></i>
                                        </div>
                                        <div onClick={() => handleRemoveFromCart(cartItem)} className="flex items-center text-xs text-red-400">
                                            <i className='bx bx-x' ></i>
                                            <span>Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
           </div>
            <div className="w-full flex  flex-col ">
                <div className="flex items-center justify-between font-bold py-3 mx-5 border-y text-[13px] mb-6">
                    <span>Total:</span>
                    <span>{total} MAD</span>
                </div>
                <a  onClick = {() => router.push("/card")} className="cursor-pointer mx-5 bg-black flex items-center justify-center py-3 text-white  mb-3">
                    Consulter votre carte
                </a>
                <a className="flex text-black items-center justify-center py-3 border mx-5 border-black/50 ">
                    Checkout
                </a>
            </div>
        </div>
    </div>
  )
}
