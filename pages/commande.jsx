
import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import Footer from '../components/Footer'
import UserBanner from '../components/user/UserBanner'
import Command from '../components/user/Command'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {selectCommandesByUserId} from '../app/commandes/commandesSlices'


export async function getServerSideProps(context) {

  const response = await fetch('http://127.0.0.1:5000/categories');
  const data = await response.json();

  const response1 = await fetch('http://127.0.0.1:5000/commandes');
  const data1 = await response1.json();

  const response2 = await fetch('http://127.0.0.1:5000/details');
  const data2= await response2.json();

  const response3 = await fetch('http://127.0.0.1:5000/products');
  const data3 = await response3.json();
  

  return {
    props: {
      products:data3,
      details:data2,
      commandes:data1,
      cats:data,
    },
  }
}


export default function commande({cats,commandes,details,products}) {
  console.log("🚀 ~ file: commande.jsx ~ line 44 ~ commande ~ products", products)
  const categories = cats

      const ModalP = () => {
        const Products = document.querySelector('.Products')
        Products.classList.remove('hidden')
        Products.classList.add('flex')
    }
    const item =(id) =>{
        document.getElementById(`${-id}`).classList.toggle('hidden')
        document.getElementById(`${id}`).classList.toggle('border-b')

        document.getElementById(`i${id}`).classList.toggle('bx-chevron-down')
        document.getElementById(`i${id}`).classList.toggle('bx-chevron-up')
    }


    const [idProd,setProd] = useState(0)
    const [cmd,setCmd] = useState(commandes)

    useEffect(() =>{
        setCmd(commandes.filter(val=>{
            if(val.id_user == Number(getCookie('id'))) return val
        }))
    },[getCookie('id')])


  return (
    <div className="font-poppins ">
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
    
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Numero Commande
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Prix Total
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                    </tr>
            </thead>
            <tbody>
            {
                        cmd.map(c=>{
                            return (
                            <>
                                <tr key={c.id*Math.random()} id={c.id} onClick={()=>item(c.id)}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {c.id}
                                    </th>
                                    <td className="py-4 px-6">
                                        {c.date}
                                    </td>
                                    <td className="py-4 px-6">
                                        {c.prixT} MAD
                                    </td>
                                    {
                                        c.statut == "En traitement" && (<td className="py-4 px-6 text-orange-500">{c.statut}<i id={"i"+c.id} class='text-black font-bold bx bx-chevron-down absolute right-5 text-lg'></i> </td>)
                                    }
                                    {
                                        c.statut == "Annulé" && (<td className="py-4 px-6 text-gray-700">{c.statut} <i id={"i"+c.id} class='text-black font-bold bx bx-chevron-down absolute right-5 text-lg'></i></td>)
                                    }
                                    {
                                        c.statut == "livré" && (<td className="py-4 px-6 text-custGreen">{c.statut} <i id={"i"+c.id} class='text-black font-bold bx bx-chevron-down absolute right-5 text-lg'></i></td>)
                                    }
                                </tr>
                                <tr key={c.id*Math.random()} id={-c.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden">
                                    <td colSpan="5"> 
                                        <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Produit
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Nom
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Quantité
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Prix unitaire
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    details.filter(val=>{
                                                        if(val.id_cmd == c.id)
                                                        {
                                                            return val;
                                                        }
                                                    }).map(d=>{
                                                        var img=""
                                                        var price=0
                                                        var name=""
                                                        products.forEach(p=>{
                                                            if(p.id == d.id_prod)
                                                            {
                                                                img=p.image
                                                                price=p.prix
                                                                name=p.nom
                                                            }
                                                        })
                                                        return(
                                                            <tr key={d.id*Math.random()} className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row" className="py-4 px-6">
                                                                    <img src={img} className="w-8 h-8" />
                                                                </th>
                                                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {name}
                                                                </td>
                                                                <td className="py-4 px-6">
                                                                    {d.qte}
                                                                </td>
                                                                <td className="py-4 px-6">
                                                                    {price}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </>
                            )
                        })
                    }
            </tbody>
        </table>
      </div>
      <Footer /> 
    </div>
  )
}
