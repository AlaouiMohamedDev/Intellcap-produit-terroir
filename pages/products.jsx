import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchModal from '../components/SearchModal';
import Cart from '../components/Cart';
import AuthModal from '../components/AuthModal'
import Sidebar from '../components/SideBar'
import Section1 from '../components/products/Section1'
import Section2 from '../components/products/Section2'


export async function getServerSideProps(context) {
  const response = await fetch('http://127.0.0.1:5000/categories')
  const data = await response.json();

  const response1 = await fetch('http://127.0.0.1:5000/products')
  const data1 = await response1.json();

  const response2 = await fetch('http://127.0.0.1:5000/cooperatives')
  const data2 = await response2.json();
  return {
    props: {
      coop:data2,
      cats:data,
      products:data1
    },
  }
}


export default function Products({cats,products,coop}) {
  const categories = cats
  const cooperatives =coop
  return (
    <div className="h-screen font-poppins">
        <Head>
            <title>Intellcap-Product</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <main>
          <Header categories={categories}/>
          <Sidebar categories={categories}/>
          <AuthModal />
          <Cart />
          <SearchModal categories={categories}/>
          <Section1 />
          <Section2 products={products} categories={categories} cooperatives={cooperatives}/>
          <Footer />
        </main>
    </div>
  )
}
