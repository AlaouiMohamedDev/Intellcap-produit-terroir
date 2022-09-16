import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { deleteCookie, getCookie } from 'cookies-next';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function UserBanner(props) {
    
    const router = useRouter();
    const logOut =async ()=>{
        const response =await axios.get(`http://127.0.0.1:5000/logout/${getCookie('id')}`);
        deleteCookie('token');
        deleteCookie('admin');
        deleteCookie('name');
        deleteCookie('id');
        deleteCookie('public_id');
        deleteCookie('name');
        deleteCookie('email');
        deleteCookie('adress')
        deleteCookie('tel')
        deleteCookie('image')
        router.push("/")
        //document.location.replace('http://localhost:3000/')
    }
    
    const [name,setName] =useState("Guest")
    useEffect(() =>{
        if(getCookie('name'))
        {
            setName(getCookie('name'))
        }
        else{
            setName("Guest")
        }
    },[getCookie('name'),name])
    

    const [image, setImage] = useState(null);

    const [createObjectURL, setCreateObjectURL] = useState(getCookie('image') == null ? "/user.jpg" : getCookie('image'));
  
    const uploadToClient = async (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0]; 
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));

        const body = new FormData();
        body.append("file", i);  
        body.append("upload_preset","users_image")
        const response = await fetch('https://api.cloudinary.com/v1_1/realmoro/image/upload', {
          method: "POST",
          body:body
        }).then(r=>r.json());
        const data ={
            image:response.secure_url
        }
        axios.put(`http://127.0.0.1:5000/userImage/${getCookie('id')}`,data).then(async res => {
                          
            if(res.data.status === 200){
                toast.success(res.data.message,{ position: "bottom-left" })
                router.push('')
            }
            else
            {
                toast.error(res.data.message,{ position: "bottom-left" })
            }
        })

      }
    };

  return (
    <>
        <div className="lg:p-20 md:p-16 p-10">
            <div className="w-full flex xl:flex-row flex-col p-10 xl:space-x-10 space-y-3 xl:space-y-0 bg-user bg-cover rounded relative items-center xl:items-stretch">
                <div className="w-full h-full bg-black/40 absolute rounded top-0 left-0">
                </div>
                <div className="rounded-full cursor-pointer group w-40 h-40 overflow-hidden relative flex justify-center items-center border border-white p-2 z-20">
                    <img  src={createObjectURL}   alt="" className="object-cover rounded-full" />
                    <input type='file' name="myImage" onChange={uploadToClient} className="opacity-0 cursor-pointer absolute w-full h-full top-0 left-0 z-100" />
                    <i class='bx bxs-camera text-lg text-gray-700 hidden group-hover:flex absolute z-50 '></i>
                </div>
                <div className="flex flex-col justify-evenly z-20 space-y-3 xl:space-y-0 items-center xl:items-start">
                    <span className="text-xl font-semibold text-white">{name}</span>
                    <div className="flex flex-col xl:flex-row items-start xl:items-center space-y-5 xl:space-x-5 xl:space-y-0 text-sm w-max xl:w-auto">
                        
                        { 
                           name!="Guest" && ((props.name=="edit") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Modifier profile</a> : <a onClick = {() => router.push("/profil")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Modifier profile</a>)
                        }
                        {
                            (props.name=="wish") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Mes favoris</a> : <a onClick = {() => router.push("/wishList")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Mes favoris</a>

                        }
                        {
                            (props.name=="card") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Mon panier</a> : <a onClick = {() => router.push("/card")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Mon panier</a>

                        }
                        {
                            name!="Guest" && ((props.name=="command") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Historique des achats</a> : <a onClick = {() => router.push("/commande")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Historique des achats</a>)
 
                        }
                        {
                             name!="Guest"
                             &&
                        <a onClick={logOut} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 space-x-2 items-center w-full xl:w-auto">
                            <span>Se déconnecter</span>
                            <i className='bx bxs-lock'></i>
                        </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}