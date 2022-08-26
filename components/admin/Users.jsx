import React from 'react'
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

export default function Users() {
  const router = useRouter();

  const Delete =() =>{
    console.log('first')
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
  return (
    <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
      <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
            <h1 className="uppercase font-bold">Utilisateurs</h1>
            <div className="flex items-center space-x-1 text-xs">
                <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                <i className='bx bx-chevron-right'></i>
                <span>Utilisateurs</span>
            </div>
        </div>
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
            <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-md">Bonne journée, AdminName!</h3>
                <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
                <div className="flex items-center text-xs bg-gray-700/40 rounded">
                    <span className='px-3'>Vendredi 14 Aout 2022</span>
                    <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                </div>
                <div  onClick = {() => router.push("/admin/product")} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                    <i className='bx bx-plus-circle'></i>
                    <span>Ajouter un produit</span>
                </div>
            </div>
        </div>
        
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
              <h1 className="text-xl">Liste d'utilisateurs</h1>
                <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                </div>
            </div>
            <table className="w-full text-sm text-left  text-gray-400">
                <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nom
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Commande
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
                    <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                        <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                            <img className="w-10 h-10 rounded-full" src="/user.jpg" />
                            <div className="pl-3">
                                <div className="text-md">UserName</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td className="py-4 px-6">
                            20 commande
                        </td>
                        <td className="py-4 px-6">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="py-4 px-6 text-red-500 space-x-1 hover:underline">
                            <a onClick={Delete} href="#" className="font-medium  text-red-500">Supprimer</a>
                        </td>
                    </tr>
                    <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                    
                        <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                            <img className="w-10 h-10 rounded-full" src="/user.jpg" />
                            <div className="pl-3">
                                <div className="text-md">UserName</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td className="py-4 px-6">
                            20 commande
                        </td>
                        <td className="py-4 px-6">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="py-4 px-6 text-red-500 space-x-1 hover:underline">
                            <a onClick={Delete} href="#" className="font-medium  text-red-500">Supprimer</a>
                        </td>
                    </tr>
                    <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                        
                        <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                            <img className="w-10 h-10 rounded-full" src="/user.jpg" />
                            <div className="pl-3">
                                <div className="text-md">UserName</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td className="py-4 px-6">
                            20 commande
                        </td>
                        <td className="py-4 px-6">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="py-4 px-6 text-red-500 space-x-1 hover:underline">
                            <a onClick={Delete} href="#" className="font-medium  text-red-500">Supprimer</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

 
    </div>
  )
}
