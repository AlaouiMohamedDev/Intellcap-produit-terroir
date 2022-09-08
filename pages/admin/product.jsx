import React from 'react'
import Head from 'next/head'
import SideBar from '../../components/admin/SideBar'
import Products from '../../components/admin/Products'


export async function getServerSideProps(context) {
  const response = await fetch('http://127.0.0.1:5000/categories')
  const data = await response.json();

  const response1 = await fetch('http://127.0.0.1:5000/products')
  const data1 = await response1.json();

  const response2 = await fetch('http://127.0.0.1:5000/cooperatives')
  const data2 = await response2.json();
  return {
    props: {
      cooperatives:data2,
      categories:data,
      products:data1
    },
  }
}


export default function dashboard({products,categories,cooperatives}) {
  return (
    <div className="font-poppins overflow-y-hidden bg-[#1a1d21] flex relative w-full h-screen overflow-y-scroll">
    <Head>
      <title>Utilisateurs-IntellCap</title>
      <link rel="icon" href="/favicon.ico" />
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <SideBar/>
    <Products categories={categories} cooperatives={cooperatives} products={products}/>
  </div>
  )
}
