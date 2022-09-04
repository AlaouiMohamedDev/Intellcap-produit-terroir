import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function aboutUs() {
const [inputs,setInputs] = useState({
    name:'',
    email:'',
    message:'',
    error_list:[],
});

const router =useRouter();

const SubmitMessage =(e)=>{
        e.preventDefault();
        if (inputs.name=="" || inputs.email=="" || inputs.messgae=="")
        {
            setInputs({...inputs,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else{
            const data ={
                name: inputs.name,
                email:inputs.email,
                message:inputs.message
            }
            axios.post('http://127.0.0.1:5000/message',data).then(res => {
                      
                if(res.data.status === 200){
                    const message = document.querySelector('.message')
                    message.classList.add('flex')
                    message.classList.remove('hidden')
                    router.push('')
                }
            })
        }
}
const HandlerInput =(e) =>{
    e.persist();
    setInputs({...inputs,[e.target.name]:e.target.value});
}
  return (
    <div className="font-poppins h-screen">
        <Head>
            <title>IntellCap Produit 100% Marocaine</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header />
        <SideBar />
        <AuthModal />
        <Cart />
        <SearchModal />
        <div className="alert-animation right-5 duration-200 message fixed justify-center items-center  bg-custGreen space-x-2 text-gray-100 text-sm py-3 px-5 hidden top-20 z-100">
            <i class='bx bxs-check-circle text-md'></i>
            <span>Message envoyé</span>
        </div>
        <div className="bg-about space-y-4 bg-cover bg-center w-full flex flex-col items-center justify-center text-white relative h-1/3">
            <div className="bg-black/50 absolute w-full h-full z-10">

            </div>
            <div className="flex items-center text-xl z-20 space-x-2">
                <a onClick = {() => router.push("/")} className="cursor-pointer hover:text-main duration-200">Home</a>
                <i className='text-lg bx bxs-label'></i>
                <span className="">contactez-nous</span>
            </div>
            <h1 className="z-20 text-3xl font-bold">CONTACTEZ-NOUS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-start lg:grid-cols-3 gap-5 py-10 px-5">
            <div className="flex items-center border rounded-lg py-3 px-5 space-x-3 w-full h-full">
                <i className="flex justify-center items-center bx bx-map border rounded-full w-10 h-10 p-4 text-main text-3xl"></i>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-sm">LOCATION</p>
                    <p className="text-sm">131 Centre Guéliz , Ville Marrakech, Marroc.</p>
                </div>
            </div>
            <div className="flex items-center border rounded-lg py-3 px-5 space-x-3 w-full h-full">
                <i className="flex justify-center items-center bx bx-phone border rounded-full w-10 h-10 p-4 text-main text-3xl"></i>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-sm uppercase">Téléphone</p>
                    <p className="text-sm">+212 658987515</p>
                </div>
            </div>
            <div className="flex items-center border rounded-lg py-3 px-5 space-x-3 w-full h-full md:col-span-2 md:w-[50%] lg:w-full lg:col-span-1">
                <i className="flex justify-center items-center bx bx-share-alt border rounded-full w-10 h-10 p-4 text-main text-3xl"></i>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-500 text-sm">PARTAGEZ</p>
                    <p className="text-sm">@IntellCap</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-10 px-10">
            <form action="" className="space-y-4">
                <div class="flex justify-between items-center lg:w-[94%]">
                    <p className="font-bold text-lg ">Contactez-nous</p>
                    {
                        (inputs.error_list.error)
                        &&
                        <div className="text-sm text-red-500 flex items-center space-x-2 animate-pulse">
                          
                            <span>
                            {
                                inputs.error_list.messageErr
                            }
                            </span>
                            <i class='text-md bx bxs-help-circle'></i>
                        </div>
                    }
                </div>
                <p className="text-xs text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, distinctio laudantium eos officiis quaerat quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae dolorem deleniti consequuntur, quas maxime.</p>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm font-semibold text-gray-600">Nom</span>
                    <input name="name" value={inputs.name} onChange={HandlerInput} type="text" className="rounded w-full lg:w-[94%] py-2 px-2 outline-none border placeholder:text-sm hover:border-main duration-200 " placeholder='Ex:Mohamed..' />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm font-semibold text-gray-600">Email</span>
                    <input name="email" value={inputs.email} onChange={HandlerInput} type="text" className="rounded w-full lg:w-[94%] py-2 px-2 outline-none border placeholder:text-sm hover:border-main duration-200 " placeholder='Ex:..@contact.com' />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm font-semibold text-gray-600">Message</span>
                    <textarea name="message" value={inputs.message} onChange={HandlerInput}  cols="30" rows="5"  className="rounded w-full lg:w-[94%] py-2 px-2 outline-none border placeholder:text-sm hover:border-main duration-200 " placeholder='Ex:Bonjour..'></textarea>
                </div>
                <input onClick={SubmitMessage} type="submit" value="Envoyer" className="bg-main text-white rounded w-full lg:w-[94%] py-3 outline-none text-sm"/>
            </form>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.3100038907394!2d-8.021680983527329!3d31.65351535893844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafec210db584a7%3A0x1cb520ab88165485!2sEMSI%20MARRAKECH!5e0!3m2!1sfr!2sma!4v1660848844905!5m2!1sfr!2sma" width="100%"height="100%" style={{border:"0"}} allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
        <Footer /> 
    </div>
  )
}
