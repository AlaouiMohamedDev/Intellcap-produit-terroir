import React from 'react'
import Head from 'next/head'
import SideBar from '../../components/admin/SideBar'
import Cooperative  from '../../components/admin/Cooperative'
export async function getServerSideProps(context) {

  const response2 = await fetch('http://127.0.0.1:5000/cooperatives')
  const data2 = await response2.json();

  const response1 = await fetch('http://127.0.0.1:5000/products')
  const data1 = await response1.json();
  return {
    props: {
      products:data1,
      cooperatives:data2,
    },
  }
}

export default function dashboard({cooperatives,products}) {
  return (
    <div className="font-poppins overflow-y-hidden bg-[#1a1d21] flex relative w-full h-screen overflow-y-scroll">
    <Head>
      <title>Coopératives-IntellCap</title>
      <link rel="icon" href="/favicon.ico" />
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <SideBar/>
    <Cooperative products={products} cooperatives={cooperatives}/>
  </div>
  )
}
