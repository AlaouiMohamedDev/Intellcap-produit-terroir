import React, { useEffect, useMemo, useState } from "react";
import Head from 'next/head'
import axios from 'axios'
import swal from 'sweetalert2'
import {getCookie} from 'cookies-next'
import {selectAllCategories} from '../app/categories/categoriesSlice'
import { useSelector } from "react-redux";
import { useRouter } from "next/router"



export async function getServerSideProps(context) {

  const response = await fetch('http://127.0.0.1:5000/categories');
  const data = await response.json();
  return {
    props: {
      cats:data,
    },
  }
}
export default function test({cats}) {
    
    console.log("🚀 ~ file: test.jsx ~ line 23 ~ test ~ cats", cats)
    const categories =cats
  return (
    <div className="h-screen font-poppins">
        <Head>
            <title>Intellcap-Product</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        {

            categories.map(c=>{
              return(

                <h1>{c.name}</h1>
              )
            })
        }
       

    </div>
  )
}