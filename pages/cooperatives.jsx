import Head from 'next/head'
import React from 'react'
import Section1 from '../components/cooperatives/Section1'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchModal from '../components/SearchModal';
import Cart from '../components/Cart';
import AuthModal from '../components/AuthModal';
import Sidebar from '../components/SideBar';
import Section2 from '../components/cooperatives/Section2';

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
      cats:data,
    },
  }
}
export default function Cooperatives({cats,cooperatives,products}) {
  const categories = cats
  return (
    <div className="font-poppins h-screen overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-main">
        <Head>
            <title>Intellcap-Coppératives</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Header categories={categories}/>
        <Sidebar categories={categories}/>
        <AuthModal />
        <Cart />
        <SearchModal categories={categories}/>
        <Section1/>
        <Section2 products={products} cooperatives={cooperatives}/>
        <Footer/>
    </div>
  )
}