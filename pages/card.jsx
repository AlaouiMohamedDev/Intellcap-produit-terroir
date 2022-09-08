import React,{ useEffect,useState } from "react";
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import UserBanner from '../components/user/UserBanner'

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../app/cartSlices";
import { selectUserById } from "../app/users/usersSlice";
import { getCookie } from "cookies-next";

export async function getServerSideProps(context) {

    const response = await fetch('http://127.0.0.1:5000/categories');
    const data = await response.json();
    return {
      props: {
        cats:data,
      },
    }
  }

export default function card({cats}) {
    const categories = cats
    const router = useRouter();
    const user = useSelector(state => selectUserById(state,Number(getCookie('id'))))

    
    const [cart,setCart] = useState([])
    const [countItems,setCount] = useState(0)
    const c = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
    setCart({})
    },[])


    const [total,setTotal] = useState(0)

    useEffect(() => {
    setCart(c)
    
    var totalitem= 0
    var i=0
    c.cartItems.map(c=>{
        totalitem += c.prix * c.cartQuantity
        i+=1
    })
    setTotal(totalitem)
    setCount(i)
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

    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }

  return (
    <div className="font-poppins h-screen overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-main">
        <Head>
            <title>IntellCap Produit 100% Marocaine</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header categories={categories}/>
        <SideBar categories={categories}/>
        <AuthModal />
        <Cart />
        <SearchModal categories={categories}/>
        <UserBanner name="card"/>
        {
            cart.cartItems&&
            countItems != 0
            ?
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 md:px-16 lg:px-24 py-10 items-start">
                <h1 className="lg:col-span-3 text-xl">Votre Carte :</h1>
                <div className="lg:col-span-2 space-y-5 flex flex-col items-center overflow-y-auto h-[600px] scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-black w-full px-2 py-3">
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
                                                <span className="text-xs px-5 border-y h-full flex items-center w-max">{cartItem.cartQuantity}</span>
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
                {
                    user != null
                    ?
                    <section className="w-full text-sm">
                        <div className="flex flex-col w-full space-y-5">
                            <div className="bg-gray-200/70 space-y-5 py-5 px-5 rounded">
                                <div className="flex justify-between items-center">
                                    <p>Sous totale</p>
                                    <span>{total} MAD</span>
                                </div>
                                <div className=" flex justify-between items-center">
                                    <p>Livraison</p>
                                    <span>50 MAD</span>
                                </div>
                                <div className="text-lg border-t border-black flex justify-between items-center pt-5">
                                    <p>Total</p>
                                    <span>{total+50} MAD</span>
                                </div>
                            </div>
                            <input type="submit" value="Confirmer Commande" className="cursor-pointer bg-main w-full text-white py-3" />
                            <div onClick = {() => router.push("/products")} className="flex items-center space-x-1 cursor-pointer hover:border-b border-black w-max duration-150">
                                <i className='bx bx-left-arrow-alt text-xl' ></i>
                                <span>Ajouter autre produit</span>
                            </div>
                        </div>
                    </section>
                    :
                    <section className="w-full p-4 text-xs border flex flex-col space-y-5">
                        <p>Vous devez d'abord vous inscrire pour connaître votre adresse exacte afin de livrer</p>
                        <span onClick={ModalAuth} className="cursor-pointer w-full py-3 text-center bg-dashBlack text-white">
                            Se connectez
                        </span>
                    </section>
                }
            </section>
            :
             <div className=" w-full px-10 md:px-16 lg:px-24 py-10 text-center">
                <div className="space-x-2 py-7 bg-orange-500/70 text-orange-700">
                    <span>Votre panier est vide</span>
                    <span onClick={()=>router.push('/products')} className="underline">Allez aux shop</span>
                </div>
            </div>
        }
        <Footer /> 
    </div>
  )
}