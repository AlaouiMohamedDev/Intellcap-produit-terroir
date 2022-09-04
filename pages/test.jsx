import React, { useEffect, useMemo, useState } from "react";
import Head from 'next/head'
import axios from 'axios'
import swal from 'sweetalert2'
import {getCookie} from 'cookies-next'


// axios.defaults.baseURL= "";
axios.defaults.headers.post['Access-Control-Allow-Origin']="http://127.0.0.1:5000";


export default function test() {
    

  return (
    <div className="h-screen font-poppins">
        <Head>
            <title>Intellcap-Product</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <h1>Hi</h1>
       

    </div>
  )
}