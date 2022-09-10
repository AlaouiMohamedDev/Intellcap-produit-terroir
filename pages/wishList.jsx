import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'
import UserBanner from '../components/user/UserBanner'
import { useDispatch, useSelector } from 'react-redux'
import {
    addToCart,
  } from "../app/cartSlices";
  import {
    clearfav,
    removeFromfav
  } from "../app/favSlices";


export async function getServerSideProps(context) {

    const response = await fetch('http://127.0.0.1:5000/categories');
    const data = await response.json();

    const response1 = await fetch('http://127.0.0.1:5000/cooperatives');
    const data1 = await response1.json();
    return {
      props: {
        cooperatives:data1,
        cats:data,
      },
    }
  }


export default function aboutUs({cats,cooperatives}) {

    const categories = cats
    const ModalP = () => {
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }

    const [fav,setFav] = useState([])

    const c = useSelector((state) => state.fav);
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleRemoveFromFav = (product) => {
        dispatch(removeFromfav(product));
    };
    const handleClearFav = () => {
        dispatch(clearfav());
      };


  useEffect(() => {
      setFav({})
  },[])
  
    useEffect(() => {
      setFav(c)
      
    }, [fav, dispatch,c]);
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
        <UserBanner name="wish"/>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-10">
            {
                fav.favItems &&
                fav.favItems.length !== 0
                ?
                fav.favItems.map(item=>{
                    var coopName=""
                    cooperatives.forEach(coop=>{
                        if(coop.id == item.cooperative)
                        {
                            coopName = coop.name
                        }
                    })
                    return (
                        <div key={item.id} class="flex flex-col space-y-5 group">
                        <div class="h-[300px] w-full   relative overflow-hidden border-box">
                            <img src={item.image} class="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                            <div class="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                                <a onClick ={()=> handleAddToCart(item)} class="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                    Ajoutez à la Cart
                                </a>
                                <a onClick={ModalP} class="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                Vue Rapide
                                </a>
                            </div>
                            <div class="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                                <a class="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                                <div onClick ={()=> handleRemoveFromFav(item)} class="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                                    <i class='bx bx-trash-alt text-md '></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-3 items-start">
                            <h6 class="font-bold">{fav.nom}</h6>
                            <h6 class="text-sm text-black/50">Produit par : <span class="text-main">Ahmed coopératives</span></h6>
                            <div class="flex items-center justify-between w-full">
                                <h6 class="text-main font-black">80 DHs</h6>
                                <span class="text-xs text-black/40">100% naturelle</span>
                            </div>
                        </div>
                        </div>
                    )
                })
                :
                <div className=" w-full col-span-4 px-10 md:px-16 lg:px-24 py-10 text-center">
                    <div className="space-x-2 py-7 bg-orange-500/70 text-orange-700">
                        <span>Votre wishList est vide</span>
                        <span onClick={()=>router.push('/products')} className="underline">Allez aux shop</span>
                    </div>
                </div>
            }
        </div>
        <ProductModal />
        <Footer /> 
    </div>
  )
}