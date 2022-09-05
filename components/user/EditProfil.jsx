
import axios from 'axios'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import {selectUserById} from '../../app/users/usersSlice'

export default function EditProfil() {

    const [profil,setProfil] = useState({
        name:'',
        email:'',
        tel:'',
        adress:'',
        password :'',
        confirm :'',
        error : '',
    })

    const handler =(e)=>{
        e.persist()
        setProfil({...profil,[e.target.name]:e.target.value})
    }

    const user = useSelector(state => selectUserById(state,Number(getCookie('id'))))
    console.log("🚀 ~ file: EditProfil.jsx ~ line 23 ~ EditProfil ~ user", user)
    
    useEffect(() =>{
        setProfil({...profil,name:user.name,email:user.email,tel:user.tel,adress:user.adresse})
    },[])

    const SubmitProfil =()=>{
        if(profil.name == "" || profil.password == "" || profil.password != profil.confirm)
        {
           setProfil({...profil,error:"Un champs ou plusieurs invalide"})
        }
        else{
            setProfil({...profil,error:""})
            
            const data ={
                name:profil.name,
                tel:profil.tel,
                adress:profil.adress,
                password :profil.password
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
                <div className="flex flex-col space-y-2">
                    <span className="text-sm text-black/70">Mot de passe</span>
                    <input name="password" value={profil.password} onChange={handler} type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="text-sm text-black/70">Confirmer mot de passe</span>
                    <input name="confirm" value={profil.confirm} onChange={handler} type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded"/>
                </div>
            </div>
        </div>
    </>
  )
}
