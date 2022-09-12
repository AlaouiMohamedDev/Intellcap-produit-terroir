import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

export default function Commands() {
//Setting date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", options).replace(/,/g,' ');
  const router = useRouter();

  
  // Function EDITMODAL
const ExitModalProd  = () => {
    const produitModal = document.querySelector('.produitModal')
    produitModal.classList.remove('flex')
    produitModal.classList.add('hidden')
}
const ModalProd  = () => {
    const produitModal = document.querySelector('.produitModal')
    produitModal.classList.remove('hidden')
    produitModal.classList.add('flex')
}


  const Delete =() =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire('Deleted!','Your file has been deleted.','success')
        }
})}
const [name,setName] = useState(null)

useEffect(() =>{
 setName(localStorage.getItem('name'))
},[])

  return (
    <>
        <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
                <h1 className="uppercase font-bold">Commandes</h1>
                <div className="flex items-center space-x-1 text-xs">
                    <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>Commandes</span>
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
                <h1 className="text-xl">Liste des Commandes</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher commande" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Numero
                            </th>
                            <th scope="col" className="py-3 px-6">
                                user
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Prix
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
                        <tr onClick={ModalProd} className="cursor-pointer border-b  border-gray-800  hover:bg-dashBlack">
                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                <div className="pl-3">
                                    <div className="text-md">0001</div>
                                </div>  
                            </th>
                            <td className="py-4 px-6">
                                @ommar
                            </td>
                            <td className="py-4 px-6">
                                200 MAD
                            </td>
                            <td className="py-4 px-6 text-custGreen">
                                Livré
                            </td>
                            <td className="py-4 px-6 space-x-10">
                                <a className="bg-custGreen text-white py-1 px-4 rounded text-xs cursor-pointer">Livré</a>
                                <a className="bg-black text-white py-1 px-4 rounded text-xs cursor-pointer">Annulé</a>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
         {/* EditModal */}
         <div className="fixed top-0 hidden fade produitModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitModalProd} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 px-5 py-5 rounded z-100 space-y-5 w-screen md:w-[60%]">
                <i onClick={ExitModalProd} className='bx bx-x absolute text-2xl top-5 right-5'></i>
                <h1 className="text-gray-300">Liste des produits de la commande 0001!</h1>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    
                    <table className="w-full text-sm text-left  text-gray-400">
                        <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nom
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Cooperative
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Categorie
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Prix
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                                <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                    <img className="w-12 h-12 rounded-lg" src="/product/harissa.jpg" />
                                    <div className="pl-3">
                                        <div className="text-md">Harissa 250g</div>
                                        <div className="font-normal text-gray-500">Taliouine</div>
                                    </div>  
                                </th>
                                <td className="py-4 px-6">
                                    Taliouine
                                </td>
                                <td className="py-4 px-6">
                                    Miel et confitures
                                </td>
                                <td className="py-4 px-6">
                                    10 MAD
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
            </div>
            </div>
        </div>

    </>
  )
}
