import React from 'react'
import { useRouter } from 'next/router';

export default function Users() {
  const router = useRouter();
  return (
    <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
      <div className="flex items-center justify-between  bg-dashBlack py-2 px-3">
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
            <div className="flex items-center space-x-3">
                <div className="flex items-center text-xs bg-gray-700/40 rounded">
                    <span className='px-3'>Vendredi 14 Aout 2022</span>
                    <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                </div>
                <div className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                    <i className='bx bx-plus-circle'></i>
                    <span>Ajouter un produit</span>
                </div>
            </div>
        </div>
        
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div class="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
              <h1 class="text-xl">Liste d'utilisateurs</h1>
                <div class="relative ">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i class='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Search for users" />
                </div>
            </div>
            <table class="w-full text-sm text-left  text-gray-400">
                <thead class="text-xs  uppercase bg-dashBlack text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Nom
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Commande
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class=" border-b  border-gray-800  hover:bg-dashBlack">
                        <th scope="row" class="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                            <img class="w-10 h-10 rounded-full" src="/user.jpg" />
                            <div class="pl-3">
                                <div class="text-md">UserName</div>
                                <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td class="py-4 px-6">
                            20 commande
                        </td>
                        <td class="py-4 px-6">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                            </div>
                        </td>
                        <td class="py-4 px-6 text-red-500 space-x-1 hover:underline">
                            <a href="#" class="font-medium  text-red-500">Delete user</a>
                        </td>
                    </tr>
                    <tr class=" border-b  border-gray-800  hover:bg-dashBlack">
                    
                        <th scope="row" class="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                            <img class="w-10 h-10 rounded-full" src="/user.jpg" />
                            <div class="pl-3">
                                <div class="text-md">UserName</div>
                                <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td class="py-4 px-6">
                            20 commande
                        </td>
                        <td class="py-4 px-6">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                            </div>
                        </td>
                        <td class="py-4 px-6 text-red-500 space-x-1 hover:underline">
                            <a href="#" class="font-medium  text-red-500">Delete user</a>
                        </td>
                    </tr>
                    <tr class=" border-b  border-gray-800  hover:bg-dashBlack">
                        
                        <th scope="row" class="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                            <img class="w-10 h-10 rounded-full" src="/user.jpg" />
                            <div class="pl-3">
                                <div class="text-md">UserName</div>
                                <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td class="py-4 px-6">
                            20 commande
                        </td>
                        <td class="py-4 px-6">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                            </div>
                        </td>
                        <td class="py-4 px-6 text-red-500 space-x-1 hover:underline">
                            <a href="#" class="font-medium  text-red-500">Delete user</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

 
    </div>
  )
}
