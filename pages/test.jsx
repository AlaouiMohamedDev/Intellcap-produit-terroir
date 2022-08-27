import React, { useState } from "react";
import Head from 'next/head'
import axios from 'axios'
import swal from 'sweetalert2'


// axios.defaults.baseURL= "";
axios.defaults.headers.post['Access-Control-Allow-Origin']="http://127.0.0.1:5000";


export default function test() {
    const [loginInput,setLogin] = useState({
        userName:'',
        password:'',
        error_list:[],
    });
    const handleInput =(e) =>{
        e.persist();
        setLogin({...loginInput,[e.target.name]:e.target.value});
    }

    const loginSubmit=async(e)=>
    {
        e.preventDefault();
        const data ={
            username:loginInput.userName,
            password:loginInput.password,
        }
        console.log("🚀 ~ file: test.jsx ~ line 27 ~ test ~ data", data)

        // const result = await fetch('http://127.0.0.1:5000/login', {
        //     method: 'POST-',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        //   })

        // const resultInJson = await result.json()
        // console.log(resultInJson)
        await axios.post('http://127.0.0.1:5000/login',data).then(res => {
            console.log(res)
            
            // if(res.data.status === 200){
            //     localStorage.setItem('auth_token',res.data.token);
            //     localStorage.setItem('auth_name',res.data.name);
            //     swal("Success",res.data.message,"success");
            //     document.location.reload();
            // }
            // else if(res.data.status === 401){
            //    swal("Warning",res.data.message,"warning");
            // }
            // else{
            //     setLogin({...loginInput,error_list:res.data.validation_errors});
            // }
        })
    }



  return (
    <div className="h-screen font-poppins">
        <Head>
            <title>Intellcap-Product</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <form  onSubmit={loginSubmit}>
            <input name="userName" onChange={handleInput} value={loginInput.userName} placeholder = "Nom d'utilisateur" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="password" onChange={handleInput} value={loginInput.password} placeholder = "Mot de passe" type="password" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input type="submit" value="ok" />
        </form>
    </div>
  )
}