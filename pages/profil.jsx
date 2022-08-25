import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import UserBanner from '../components/user/UserBanner'
import EditProfil from '../components/user/EditProfil'

export default function profil() {
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
    <UserBanner name="edit"/>
    <EditProfil/>
    <Footer /> 
</div>
)
}
