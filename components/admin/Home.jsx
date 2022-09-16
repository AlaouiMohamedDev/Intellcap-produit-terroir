import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { setCookie,getCookie,deleteCookie } from 'cookies-next';



export default function Home({topProducts,users,coops,commandes}) {
    //Setting date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", options).replace(/,/g,' ');
    const router = useRouter();
const [name,setName] = useState(null)

var idCoop =0

var countCoop =0
var id=0
topProducts.forEach(i=>{
    if(i.coopId != id){
        id=i.coopId
        countCoop ++
    }
})

var usersCount =0

users.forEach(u=>{
    if(!u.admin)
    usersCount ++
})

var coopCount =0

coops.forEach(u=>{
    coopCount ++
})

var cmdCount =0
var totalVente = 0
console.log("🚀 ~ file: Home.jsx ~ line 41 ~ Home ~ totalVente", totalVente)

const now= new Date()
commandes.forEach(u=>{
    var dc = new Date(u.date)
    if(dc.getMonth() == now.getMonth())
    {
        totalVente += u.prixT
    }
    cmdCount ++
})

useEffect(() =>{
 setName(getCookie('name'))
},[])
  return (
    <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
            <h1 className="uppercase font-bold">Dashboard</h1>
            <div className="flex items-center space-x-1 text-xs">
                <span className="text-white">Dashboard</span>
                <i className='bx bx-chevron-right'></i>
                <span>Dashboard</span>
            </div>
        </div>
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
            <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-md">Bonne journée, {name}</h3>
                <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
                <div className="flex  items-center text-xs bg-gray-700/40 rounded">
                    <span className='px-3'>{date}</span>
                    <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                </div>
                <div onClick = {() => router.push("/admin/product")} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                    <i className='bx bx-plus-circle'></i>
                    <span>Ajouter un produit</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
            <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Total vente</span>
                    <div className="flex items-center text-sm space-x-2 text-custGreen">
                        <i className='bx bx-up-arrow-alt rotate-45'></i>
                        <span>+16.24 %</span>
                    </div>
                </div>
                <div class="flex justify-between items-end">
                    <div class="flex flex-col space-y-6 w-full">
                        <span className="text-lg">{totalVente} MAD</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i class='flex items-center bx bx-dollar-circle text-3xl text-custGreen bg-custGreen/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
            <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Commandes</span>
                    <div className="flex items-center text-sm space-x-2 text-red-500">
                        <i className='bx bx-down-arrow-alt rotate-45'></i>
                        <span>-10.24 %</span>
                    </div>
                </div>
                <div class="flex justify-between items-end">
                    <div class="flex flex-col space-y-6 w-full">
                        <span className="text-lg">{cmdCount} cmd</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i class='flex items-center bx bx-shopping-bag text-3xl text-blue-500 bg-blue-500/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
            <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Clients</span>
                    <div className="flex items-center text-sm space-x-2 text-custGreen">
                        <i className='bx bx-up-arrow-alt rotate-45'></i>
                        <span>+22.24 %</span>
                    </div>
                </div>
                <div class="flex justify-between items-end">
                    <div class="flex flex-col space-y-6 w-full">
                        <span className="text-lg">{usersCount} client</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i class='flex items-center bx bx-user text-3xl text-orange-500 bg-orange-500/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
            <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
                <div className="flex items-center justify-between w-full">
                    <span className="text-gray-400">Coopératives</span>
                    <div className="flex items-center text-sm space-x-2 text-custGreen">
                        <i className='bx bx-up-arrow-alt rotate-45'></i>
                        <span>+10.24 %</span>
                    </div>
                </div>
                <div class="flex justify-between items-end">
                    <div class="flex flex-col space-y-6 w-full">
                        <span className="text-lg">{coopCount} coop</span>
                        <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                    </div>
                    <i class='flex items-center bx bxs-leaf text-3xl text-lime-500 bg-lime-500/20 w-max h-max rounded py-2 px-3'></i>
                </div>
            </div>
        </div>
        <div className="grid gri-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-dashBlack flex flex-col space-y-3 rounded-md overflow-x-auto relative w-full h-max">
                <div class="border-b border-gray-700 flex w-full">
                    <div className="py-4 px-3 flex items-center justify-between text-sm w-full">
                        <span>Produits les plus vendus</span>
                        <span>Total : <span className="text-gray-500">{topProducts.length<5 ?topProducts.length:5}</span></span>
                    </div>
                </div>
                {
                    topProducts.slice(0,5).map(prod=>{
                        return(
                            <div key={prod.id_prod} className="border-b border-gray-700 md:w-full w-max ">
                                <div className="pb-3 px-3 flex items-center justify-around space-x-2 text-xs">
                                    <img src={prod.image} className="w-12 h-12 rounded" />
                                    <div className="flex flex-col space-y-2">
                                        <span>{prod.nom}</span>
                                        <span class="text-[10px] text-gray-500">{prod.created}</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>{prod.prix} MAD</span>
                                        <span class="text-[10px] text-gray-500">Prix</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>{prod.qte} cmds</span>
                                        <span class="text-[10px] text-gray-500">Commande</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>{prod.stock}</span>
                                        <span class="text-[10px] text-gray-500">Stock</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span>{prod.prix * prod.qte} MAD </span>
                                        <span class="text-[10px] text-gray-500">Total</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <div className="bg-dashBlack flex flex-col space-y-3 rounded-md overflow-x-auto relative w-full h-max">
                <div class="border-b border-gray-700 ">
                    <div className="py-4 px-3 flex items-center justify-between text-sm">
                        <span>Meilleures ventes</span>
                        <span>Total : <span className="text-gray-500">{countCoop}</span></span>
                    </div>
                </div>
                {
                    topProducts.map(i=>{
                        if(i.coopId != idCoop)
                        {
                            idCoop = i.coopId
                            return (
                                <div key={i.coopId} className="border-b border-gray-700  md:w-full w-max">
                                    <div className="pb-3 px-3 flex items-center justify-around space-x-2 text-xs">
                                        <img src={i.coopImage} className="w-12 h-12 rounded-full object-cover" />
                                        <div className="flex flex-col space-y-2">
                                            <span>{i.coopName}</span>
                                            <span class="text-[10px] text-gray-500">{i.coopJoined}</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <span>{i.nom}</span>
                                            <span class="text-[10px] text-gray-500">Produit</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <span>{i.countProd}</span>
                                            <span class="text-[10px] text-gray-500">Total produit</span>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <div classNme="flex items-center">
                                                <span>20%</span>
                                                <i class='bx bx-bar-chart text-custGreen text-md '></i>
                                            </div>
                                            <span class="text-[10px] text-gray-500">vente</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}
