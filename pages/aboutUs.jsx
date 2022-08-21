import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'

export default function aboutUs() {
  return (
    <div class="font-poppins h-screen">
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
        <div class="bg-about space-y-4 bg-cover bg-center w-full flex flex-col items-center justify-center text-white relative h-1/3">
            <div class="bg-black/50 absolute w-full h-full z-10">

            </div>
            <div class="flex items-center text-xl z-20 space-x-2">
                <a onClick = {() => router.push("/")} class="cursor-pointer hover:text-main duration-200">Home</a>
                <i class='text-lg bx bxs-label'></i>
                <span class="">A propos</span>
            </div>
            <h1 class="z-20 text-3xl font-bold">A PROPOS</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-20">
            <div class="flex flex-col space-y-5">
                <h1 class="font-bold text-lg ">NOTRE MISSION</h1>
                <p class="text-sm text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex, nulla non debitis voluptate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit nisi, sed cumque pariatur aut.</p>
            </div>
            <div class="flex flex-col space-y-5">
                <h1 class="font-bold text-lg ">NOTRE HISTOIRE</h1>
                <p class="text-sm text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex, nulla non debitis voluptate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit nisi, sed cumque pariatur aut.</p>
            </div>
            <div class="flex flex-col space-y-5">
                <h1 class="font-bold text-lg ">NOTRE APPROCHE</h1>
                <p class="text-sm text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex, nulla non debitis voluptate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit nisi, sed cumque pariatur aut.</p>
            </div>
            <div class="flex flex-col space-y-5">
                <h1 class="font-bold text-lg ">NOTRE PHILOSOPHIE</h1>
                <p class="text-sm text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex, nulla non debitis voluptate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit nisi, sed cumque pariatur aut.</p>
            </div>
            <div class="md:col-span-2 bg-main/40 space-x-2 py-8 px-10 my-8 text-black/60 flex">
                <i class='text-lg bx bxs-quote-alt-left'></i>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem ullam.</p>
            </div>
        </div>
        <Footer /> 
    </div>
  )
}
