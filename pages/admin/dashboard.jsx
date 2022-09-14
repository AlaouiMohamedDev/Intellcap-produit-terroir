import React from 'react'
import Head from 'next/head'
import SideBar from '../../components/admin/SideBar'
import Home from '../../components/admin/Home'

export async function getServerSideProps(context) {

  const response3 = await fetch('http://127.0.0.1:5000/commandes');
  const data3 = await response3.json();

  const response2 = await fetch('http://127.0.0.1:5000/cooperatives');
  const data2 = await response2.json();

  const response1 = await fetch('http://127.0.0.1:5000/getUsers');
  const data1 = await response1.json();

  const response = await fetch('http://127.0.0.1:5000/topProducts');
  const data = await response.json();
  return {
    props: {
      commandes:data3,
      coops:data2,
      users:data1,
      topProducts:data,
    },
  }
}



export default function dashboard({topProducts,users,coops,commandes}) {
  return (
    <div className="font-poppins overflow-y-hidden bg-[#1a1d21] flex relative w-full h-screen overflow-y-scroll">
    <Head>
      <title>Dashboard-IntellCap</title>
      <link rel="icon" href="/favicon.ico" />
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <SideBar/>
    <Home className="w-4/5" topProducts={topProducts} users={users} coops={coops} commandes={commandes}/>
  </div>
  )
}
