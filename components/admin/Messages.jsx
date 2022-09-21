import React, { useContext, useState } from 'react'
import  { useRouter } from 'next/router';
import Swal from 'sweetalert2'
import { setCookie,getCookie } from 'cookies-next';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {selectAllMessages} from '../../app/messages/messagesSlice'

export default function Messages() {
    //Setting date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", options).replace(/,/g,' ');
const router = useRouter();

//Get messages
//const {messages} = useContext(DataContext)

const messages = useSelector(selectAllMessages)

const [name,setName] = useState(null)

useEffect(() =>{
    setName(getCookie('name'))
},[])


const [search,setSearch] = useState([])
const handler =(e)=>{
    e.persist()
    setSearch(e.target.value)
}
  
  // Function EDITMODAL
const ExitModalMessage  = () => {
    const messageModal = document.querySelector('.messageModal')
    messageModal.classList.remove('flex')
    messageModal.classList.add('hidden')
}
const [content,setContent] = useState(null)
const ModalMessage  = (msg) => {
    UpdateMessage(msg)
    setContent(msg.message)
    const messageModal = document.querySelector('.messageModal')
    messageModal.classList.remove('hidden')
    messageModal.classList.add('flex')
}

const UpdateMessage =(msg) => {
    console.log("🚀 ~ file: Messages.jsx ~ line 57 ~ UpdateMessage ~ msg", msg)
    if(!msg.seen){
        axios.put(`http://127.0.0.1:5000/message/${msg.id}`).then(res => {
            if(res.data.status === 200){
                router.push('')
            }
       })
    }
}

  return (
    <>
        <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
                <h1 className="uppercase font-bold">Messages</h1>
                <div className="flex items-center space-x-1 text-xs">
                    <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>Messages</span>
                </div>
            </div>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
                <div className="flex flex-col text-center lg:text-left">
                    <h3 className="text-md">Bonne journée, {name}</h3>
                    <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
                    <div className="flex items-center text-xs bg-gray-700/40 rounded">
                        <span className='px-3'>{date}</span>
                        <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                    </div>
                    <div onClick = {() => router.push("/admin/product")} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                        <i className='bx bx-plus-circle'></i>
                        <span>Ajouter un produit</span>
                    </div>
                </div>
            </div>
            
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                <h1 className="text-xl">Liste des messages</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input name="search" value={search} onChange={handler} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher message" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Numero
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nom
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                               Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           messages.length!= 0
                           ?
                            messages.filter((val)=>{

                                    if(search==""){
                                        return val;
                                    }
                                    else if(val.name.toLowerCase().includes(search.toLowerCase())){
                                        return val;
                                    }
                              
                                
                            }).map((msg)=>{
                                return(
                                    <tr className="cursor-pointer border-b  border-gray-800  hover:bg-dashBlack">
                                        <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                            <div className="pl-3">
                                                <div className="text-md">{msg.id}</div>
                                            </div>  
                                        </th>
                                        <td className="py-4 px-6">
                                            {msg.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {msg.email}
                                        </td>
                                        {
                                             (msg.seen) &&<td className="py-4 px-6 text-custGreen text-xs">Ouvert</td>
                                        }
                                        {
                                             (!msg.seen) &&<td className="py-4 px-6 text-red-500 text-xs">non ouvert</td>
                                        }
                                        <td onClick={()=>ModalMessage(msg)}  className="py-4 px-6 space-x-1 flex items-center justify-center bg-custGreen text-white">
                                            <a className="  rounded text-xs cursor-pointer">
                                                ouvrir
                                            </a>
                                            <i class='bx bx-show-alt'></i>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <tr className="bg-custGreen/20 text-custGreen">
                                <td colSpan="5" className="py-4 px-6 w-full text-center">Aucun Messages</td>
                            </tr>
                        }
                        
                     
                    </tbody>
                </table>
            </div>
        </div>
         {/* Modal */}
         <div className="fixed top-0 hidden fade messageModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitModalMessage} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 px-5 py-5 rounded z-100 space-y-5 w-screen md:w-[50%]">
                <i onClick={ExitModalMessage} className='bx bx-x absolute text-2xl top-5 right-5'></i>
                <h1 className="text-gray-300">Message de omar@omar.com</h1>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <p class="text-sm text-justify">{content}</p>
            </div>
            </div>
        </div>

    </>
  )
}
