import Head from 'next/head'
import React from 'react'
import Section1 from '../components/cooperatives/Section1'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchModal from '../components/SearchModal';
import Cart from '../components/Cart';
import AuthModal from '../components/AuthModal'
import Sidebar from '../components/Sidebar'
import Section2 from '../components/cooperatives/Section2'

export default function 
() {
  return (
    <div className="font-poppins h-screen">
        <Head>
            <title>Intellcap-Coppératives</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header/>
        <Sidebar />
        <AuthModal />
        <Cart />
        <SearchModal />
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}