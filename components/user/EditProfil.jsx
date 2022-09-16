
import axios from 'axios'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import {selectUserById} from '../../app/users/usersSlice'

import { useRouter } from 'next/router'

export default function EditProfil() {

    const [profil,setProfil] = useState({
        name:'',
        email:'',
        tel:'',
        adress:'',
        password :'',
        newpass:'',
        confirm :'',
        error : '',
    })

    const handler =(e)=>{
        e.persist()
        setProfil({...profil,[e.target.name]:e.target.value})
    }

    const user = useSelector(state => selectUserById(state,Number(getCookie('id'))))


    useEffect(() =>{
        setProfil({...profil,name:getCookie('name'),email:getCookie('email'),tel:getCookie('tel'),adress:getCookie('adress')})
    },[])
    

    useEffect(() =>{
      if(user != null)
        setProfil({...profil,name:user.name,email:user.email,tel:user.tel,adress:user.adresse})
    },[user])

    const SubmitProfil =()=>{
        if(profil.name == "")
        {
           setProfil({...profil,error:"Un champs ou plusieurs invalide"})
        }
        else{
            setProfil({...profil,error:""})
            
            const data ={
                name:profil.name,
                tel:profil.tel,
                adress:profil.adress,
            }
            axios.put(`http://127.0.0.1:5000/user/${user.public_id}`,data,{
                headers:{'x-access-token':getCookie('token')}
            }).then(response =>{
                if (response.data.status == 200){
                    Swal.fire("Succes",response.data.message,"success")
                }
                else{
                    Swal.fire("Attention",response.data.message,"warning")
                }
            })
        }
        
    }   
    const router = useRouter();

    const submitPass = () =>{
        if (profil.password == "" || profil.newpass  == "" || profil.confirm == "")
        {
            toast.error("Tous les champs sont obilgatoire",{ position: "bottom-left" })
        }
        else if(profil.confirm != profil.newpass)
        {
            toast.error("Confimation incorrecte",{ position: "bottom-left" })
        }
        else{
            const data ={
                password:profil.newpass
            }
            axios.put(`http://127.0.0.1:5000/pass/${user.public_id}`,data,{
                headers:{'x-access-token':getCookie('token')}
            }).then(response =>{
                if (response.data.status == 200){
                    toast.success(response.data.message,{ position: "top-right" })
                    router.push('')
                }
                else{
                    toast.error(response.data.message,{ position: "bottom-left" })
                }
            })
        }
    }

    const check = () =>{
        document.querySelector('.formPass').classList.toggle('hidden')
    }
  return (
    <>
        <div className="lg:px-20 md:px-16 px-10 pb-20">
            <div className="pb-10 w-full flex justify-between">
                <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-gray-900 text-center w-full md:w-max">Modifier votre profile</h1>
                    <span className="text-red-500 text-sm">{profil.error}</span>
                </div>
                <input  onClick={SubmitProfil}  type="button" defaultValue="Enregistrer" className="cursor-pointer outline-none py-3 px-10 text-sm bg-main text-white rounded hidden md:block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-2">
                    <span className="text-sm text-black/70">Nom Complet</span>
                    <input name="name" value={profil.name} onChange={handler} type="text" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm text-black/70">Email</span>
                    <input disabled name="email" value={profil.email} onChange={handler} type="email" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm text-black/70">Téléphone</span>
                    <input name="tel" value={profil.tel} onChange={handler} type="text" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm text-black/70">Adresse</span>
                    <input name="adress" value={profil.adress} onChange={handler} type="text" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                </div>
                <div className="flex space-x-3 items-center col-span-2">
                <input onChange={check} type="checkbox" value="" class="w-4 h-4 accent-main bg-white" />
                    <span>Modifier mot de passe</span>
                </div>
                <div className="border py-7 px-7 space-y-3 w-full hidden formPass">
                    <h3 className="text-md text-center mb-5">Changer votre mot de passe</h3>
                    <div className="flex flex-col space-y-2">
                        <span className="text-sm text-black/70">Mot de passe ancien</span>
                        <input name="password" value={profil.password} onChange={handler} type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="text-sm text-black/70">Mot de passe nouveau</span>
                        <input name="newpass" value={profil.newpass} onChange={handler} type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="text-sm text-black/70">Confirmer nouveau mot de passe</span>
                        <input name="confirm" value={profil.confirm} onChange={handler} type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded"/>
                    </div>
                    <div className="py-5 w-full justify-end flex">
                        <a onClick={submitPass} className="bg-blue-500 text-white py-2 px-4 rounded w-1/3 text-center">Modifier</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
