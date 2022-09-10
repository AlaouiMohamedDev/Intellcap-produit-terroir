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
import { toast } from "react-toastify";
import axios from "axios";

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

    const [inputs,setInputs] = useState({
        firstName:getCookie('name'),
        lastName:'',
        city:'',
        adress:getCookie('adress'),
        tel:getCookie('tel')
    })
    const [cart,setCart] = useState([])
    const [countItems,setCount] = useState(0)
    const c = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
    setCart({})
    },[])

    const handler =(e) =>{
        e.persist()
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

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

    const cartModal =()=>{
        const cart= document.querySelector('.cart')
        cart.classList.remove('hidden')
        cart.classList.add('flex')
    }
    const commander = () => {
        if(inputs.firstName == "" || inputs.firstName == "" || inputs.adress =="" || inputs.tel =="" || inputs.city == "")
        {
            toast.error("Tous les champs sont requis",{ position: "bottom-left" })
        }
        else{
            var prods = []
            cart.cartItems.forEach(c=>{
                prods.push({id_prod:c.id,qte:c.cartQuantity})
            })
            const data ={
                id_user:getCookie('id'),
                firstName:inputs.firstName,
                lastName:inputs.lastName,
                city:inputs.city,
                adress:inputs.adress,
                tel:inputs.tel,
                prixT:total+50,
                prods:prods
            }
            axios.post('http://127.0.0.1:5000/commande',data,{
                headers:{'x-access-token':getCookie('token')}
                    }).then(res => {
                        if(res.data.status === 200){
                            localStorage.clear()
                            toast.success(res.data.message,{ position: "bottom-left" })
                            router.push('/commande')
                        }
                        else{
                            toast.error("Erreur :(",{ position: "bottom-left" })
                        }
                    })
        }
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
            countItems !== 0
            ?
                <div className="select-none grid gird-cols-1 lg:grid-cols-3 gap-10 lg:px-20 md:px-16 px-10 pb-10">
                {
                    cart.cartItems&&
                    countItems != 0
                    &&
                    <>
                        <div className="lg:col-span-2 space-y-5 w-full">
                            {
                                user != null
                                ?
                                <>
                                    <div className="flex items-center space-x-3">
                                        <i className='text-white bg-main py-1 px-2  text-lg rounded-full bx bxs-truck'></i>
                                        <h1 className="text-xl text-dashBlack font-bold">Livraison</h1>
                                    </div>
                                    <div className="px-7 space-y-3">
                                        <div className="flex flex-col md:flex-row items-center gap-5 uppercase w-full">
                                                <div className="space-y-2 w-full">
                                                    <h6 className="text-sm text-black/50 font-semibold">Nom</h6>
                                                    <input name="lastName" value={inputs.lastName} onChange={handler} type="text" className="w-full border rounded outline-none px-2 py-2 focus:border-main text-sm text-black/70" />
                                                </div>
                                                <div className="space-y-2 w-full">
                                                    <h6 className="text-sm text-black/50 font-semibold">Prénom</h6>
                                                    <input name="firstName" value={inputs.firstName} onChange={handler} type="text" className="w-full border rounded outline-none px-2 py-2 focus:border-main text-sm text-black/70" />
                                                </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center gap-5 uppercase w-full">
                                                <div className="space-y-2 w-full">
                                                    <h6 className="text-sm text-black/50 font-semibold">Ville</h6>
                                                    <input name="city" value={inputs.city} onChange={handler} type="text" className="w-full border rounded outline-none px-2 py-2 focus:border-main text-sm text-black/70" />
                                                </div>
                                                <div className="space-y-2 w-full">
                                                    <h6 className="text-sm text-black/50 font-semibold">Téléphone</h6>
                                                    <input name="tel" value={inputs.tel} onChange={handler} type="text" className="w-full border rounded outline-none px-2 py-2 focus:border-main text-sm text-black/70" />
                                                </div>
                                        </div>
                                        <div className="space-y-2 w-full">
                                            <h6 className="text-sm text-black/50 font-semibold">Adresse</h6>
                                            <input name="adress" value={inputs.adress} onChange={handler} type="text" className="w-full border rounded outline-none px-2 py-2 focus:border-main text-sm text-black/70" />
                                        </div>
                                        <div className="w-full  flex justify-end py-5">
                                            <span onClick={commander} className="w-full md:w-[40%] rounded bg-main text-white py-3 text-center">
                                                Confirmer la commande
                                            </span>
                                        </div>
                                    </div>
                                </>
                                :
                                <section className="w-full p-4 text-xs border flex flex-col space-y-5">
                                    <p>Vous devez d'abord vous inscrire pour connaître votre adresse exacte afin de livrer</p>
                                    <span onClick={ModalAuth} className="cursor-pointer w-full py-3 text-center bg-dashBlack text-white">
                                        Se connectez
                                    </span>
                                </section>
                            }
                        </div>
                        <div className="col-span-1 shadow border">
                            <div className="flex justify-between items-center py-4 px-4 border-b">
                                <h3 className="text-sm text-black/70">Récapitulatif de la commande</h3>
                                <span onClick={cartModal} className="text-blue-400 text-xs">Modifier cart</span>
                            </div>
                            <h6 className="text-xs text-gray-400 px-4 py-3">{countItems} éléments</h6>
                            <div className="px-4 py-3 flex flex-col max-h-[150px] overflow-x-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-black space-y-3">
                                {
                                    cart.cartItems&&
                                    cart.cartItems.map(cartItem =>(
                                        <div key={cartItem.id} className="flex items-start space-x-3 w-full">
                                            <img src={cartItem.image} className="w-14 h-14 object-cover" />
                                            <div className="flex justify-between w-full">
                                                <h6 className="text-[13px] text-black/70">{cartItem.cartQuantity} x {cartItem.nom}</h6>
                                                <span className="text-[13px] text-black/70">{cartItem.prix} MAD</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="border-y px-4 py-3 space-y-2">
                                <div className="flex items-center justify-between text-[13px] text-black/70">
                                    <h6>Sous total</h6>
                                    <span>{total} MAD</span>
                                </div>
                                <div className="flex items-center justify-between text-[13px] text-black/70">
                                    <h6>Livraison</h6>
                                    <span>50 MAD</span>
                                </div>
                                <div className="flex items-center justify-between text-[13px] text-black/70">
                                    <h6>Taxe</h6>
                                    <span>0 MAD</span>
                                </div>
                                <h5
                                onClick={()=>{
                                    document.querySelector('.cuppon').classList.toggle('hidden')
                                    document.querySelector('.cuppon').classList.toggle('flex')
                                }}
                                className="text-blue-400 text-xs hover:text-blue-500 cursor-pointer">Coupon/Certificat-cadeau</h5>
                                <div className="items-center w-full space-x-2 hidden cuppon">
                                    <input type="text" className="outline-none border  border-black/60 rounded w-2/3 py-2 px-2 text-xs" />
                                    <span class="text-center text-black/60 border border-black/40 rounded text-xs py-2 w-1/3">Apply</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 py-4">
                                <h6 className="text-sm text-black/70">Total</h6>
                                <span className="text-2xl text-dashBlack font-black">{total+50} MAD</span>
                            </div>
                        </div>
                    </>
                } 
                </div>
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