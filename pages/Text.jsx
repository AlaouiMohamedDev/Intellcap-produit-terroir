import Head from 'next/head'
import React from 'react'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section1 from '../components/products/Section1'
import Section2 from '../components/products/Section2'
import SearchModal from '../components/SearchModal'
import Sidebar from '../components/Sidebar'

export default function Text() {
  return (
    <div>
      <Head>
      <title>IntellCap Produit 100% Marocaine</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
     <Header />
      <Sidebar />
      <AuthModal />
      <Cart />
      <SearchModal />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}
