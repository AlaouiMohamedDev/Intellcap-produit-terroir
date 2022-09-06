import React, { useState } from 'react'
import { useRouter } from 'next/router'
export default function SearchModal() {
    const router = useRouter();
    const [search,setSearch] = useState([])
    const handler =(e)=>{
        e.persist()
        setSearch(e.target.value)
    }
    const searchModal =()=>{
        const search= document.querySelector('.search')
        search.classList.add('hidden')
        search.classList.remove('flex')
    }
  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden justify-end bg-gray-900/70  fade search">
        <div className="h-screen w-full md:w-[430px] bg-white flex flex-col  absolute fade-left">
           <div>
                <div className="relative flex items-center justify-center border-b border-gray-300 space-x-2 py-4 mb-7 ">
                    <span>Rechercher un produit</span>
                    <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main absolute right-5 text-gray-400" onClick={searchModal}/>
                </div>
                <div className="flex flex-col items-center w-full px-10 space-y-7">
                    <div className="relative flex group items-center justify-between border border-gray-500/50 hover:border-main  w-full">
                        <input name="search" value={search} onChange={handler} placeholder = "Nom du produit" type="text" className = "placeholder:text-sm text-sm py-3 px-3 w-full outline-none text-gray-600" />
                        <i onClick = {() =>{
                            searchModal()
                            router.push(`/products?search=${search}`)
                        }}  className='absolute group-hover:text-main bx bx-search cursor-pointer right-3 text-lg text-gray-500/50'></i>
                    </div>
                    <div className="grid grid-cols-2 gap-3  uppercase">
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="miel.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">Miels, Amlou et confitures</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="huile.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">Huiles alimentaires</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="rice.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">Semoules & farines</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="epice.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">épices & condiments</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="nuts.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">Fruits secs</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="tea-cup.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">Thés & Tisanes</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="serum.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">THydrolats & Tisanes</span>
                        </div>
                        <div className="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="bien-etre.png" alt="" className="w-10" />
                            <span className="text-xs group-hover:text-main duration-500">Bien être</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
