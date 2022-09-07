import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import UserBanner from '../components/user/UserBanner'
import Command from '../components/user/Command'


export async function getServerSideProps(context) {

  const response = await fetch('http://127.0.0.1:5000/categories');
  const data = await response.json();
  return {
    props: {
      cats:data,
    },
  }
}


export default function commande({cats}) {
  const categories = cats
  return (
    <div className="font-poppins h-screen w-screen overflow-x-hidden ">
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
      <UserBanner name="command"/>
      <Command/>
      <Footer /> 
    </div>
  )
}
