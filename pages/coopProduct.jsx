import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'
import {selectCooperativeById} from '../app/cooperatives/cooperativesSlice'
import { selectAllProducts } from '../app/products/productsSlice';
import { useSelector } from 'react-redux'
import Cooperatives from './cooperatives'
import { getCookie } from 'cookies-next'
import { useEffect } from 'react'

export async function getServerSideProps(context) {
  
    const response2 = await fetch('http://127.0.0.1:5000/cooperatives')
    const data2 = await response2.json();
  
    const response1 = await fetch('http://127.0.0.1:5000/products');
    const data1 = await response1.json();
  
    const response = await fetch('http://127.0.0.1:5000/categories');
    const data = await response.json();
    return {
      props: {
        products:data1,
        cooperatives:data2,
        categories:data,
      },
    }
  }

export default  function coopProduct({categories,products,cooperatives}) {


      const[modal,setModal] = useState({
        name:"",
        desc:"",
        price:'',
        image:''
    }) 
    const [prod,setProd] = useState(0)
    
    const [cooperative,setCooperative] = useState([])
    const [prods,setProds] = useState([])
    useEffect(() =>{
            
            var prod =0
            var prods =[]
            var coops ={}
            cooperatives.forEach(coop=>{
                if(coop.id == getCookie('coop'))
                {
                    coops=coop
                }
            })
            products.forEach(product=>{
                if(product.cooperative == getCookie('coop'))
                {
                    prod=prod+1
                    prods.push(product)
                }
            })
              setProd(prod)
              setProds(prods)
              setCooperative(coops)
    },[])

    const ModalP = (pro) => {
        setModal({...modal,name:pro.nom,desc:pro.description,price:pro.prix,image:pro.image,qte:pro.qte})
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
    
  return (
    <div className="font-poppins overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-main">
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
        <div className="bg-cooperative space-y-4 bg-cover bg-center w-full flex flex-col items-center justify-center text-white relative h-1/3">
            <div className="bg-black/50 absolute w-full h-full z-10">

            </div>
            <div className="z-20 w-[65%] cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center rounded py-7 text-white space-x-5 px-5">
                <img src={cooperative.image} className="object-cover w-[150px] h-[150px] border-2 border-white p-2 rounded-full" />
                <div className="flex flex-col w-full space-y-5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">{cooperative.name}</h1>
                    
                    </div>
                <p className="text-sm text-gray-300">{cooperative.description}</p>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center text-xs space-x-2 text-main bg-white py-1 px-2 w-max rounded">
                        <i className='bx bx-calendar-check'></i>
                        <span className="">16 Decmber 2022</span>
                    </div>
                    <span className="text-xs text-main bg-white py-1 px-2 rounded w-max">{prod}</span>
                </div>
            </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-10">
            {
                prods.map(product =>{
                    if(product.deletedAt == null)
                    {
                        const d = new Date();
                        const d1 = new Date(product.date);
    
                        var Difference_In_Time = d.getTime() - d1.getTime();
                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                            return (
                                <div key={product.id} className="flex flex-col space-y-5 group">
                                    <div className="h-[300px] w-full   relative overflow-hidden border-box">
                                            {
                                                product.qte==0
                                                &&
                                                <div className="bg-white/50 w-full h-full absolute z-40 flex items-center justify-center">
                                                    <div className="flex items-center space-x-2 text-gray-600 font-bold text-sm -rotate-45">
                                                        <i class='text-lg bx bx-block'></i>
                                                        <span>EN RUPTURE DE STOCK</span>
                                                    </div>
                                                </div>
                                            }
                                            <img src={product.image} className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                                            {
                                                product.qte>0
                                                &&
                                                <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                                                    <a onClick ={ () => handleAddToCart(product)} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                                        Ajoutez à la Cart
                                                    </a>
                                                    <a onClick={()=>ModalP(product)} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                                    Vue Rapide
                                                    </a>
                                                </div>
                                            }
                                            {
                                                product.qte>0
                                                &&
                                                <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                                                    <div onClick ={ () => handleAddToFav(product)} className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                                                        <i className='bx bx-heart text-md '></i>
                                                    </div>
                                                    
                                                    {
                                                        Difference_In_Days<=2
                                                        &&
                                                        <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                                                    }
                                                </div>
    
                                            }
                                        </div>
                                    <div className="flex flex-col space-y-3 items-start">
                                        <h6 className="font-bold">{product.nom}</h6>
                                        <h6 className="text-sm text-black/50">Produit par : <span className="text-main">{cooperative.name}</span></h6>
                                        <div className="flex items-center justify-between w-full">
                                            <h6 className="text-main font-black">{product.prix} DHs</h6>
                                            <span className="text-xs text-black/40">100% naturelle</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                })
            }
        </div>
        <ProductModal product={modal} />
        <Footer /> 
    </div>
    
  )
}
