import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {selectAllCategories} from '../app/categories/categoriesSlice'
import { useRouter } from 'next/router'

export default function HomeCategory({categories}) {
  const router = useRouter();
  const [cats1,setCats1]= useState([])
  const [cats2,setCats2]= useState([])

  
  // useEffect(() =>{
  //   setCats1(categories.slice(0,4))
  //   setCats2(
  //     categories.slice(4,8))
  // },[cats1,cats2])
  return (
    <div className="relative grid lg:grid-cols-3 grid-cols-1 gap-3 py-28 px-12 lg:px-20 lg:space-x-10 items-center select-none">
       <div className="lg:hidden flex flex-col mb-10 items-center text-center space-y-6">
        <h1 className="text-3xl font-bold">TROUVEZ VOTRE PRODUIT PAR RUBRIQUE</h1>
        <p className="text-xs text-black/90 w-2/3">Retrouvez des produits du terroir certifiés et labellisés pour attester de leur qualité exceptionnelle.</p>
        <a className="bg-main text-white py-2 px-5 rounded text-xs">Voir plus</a>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {categories.slice(0,4).map(cat=>{
          return (
            <div key={cat.id}  onClick = {() => router.push(`/products?cat=${cat.id}`)} className="cursor-pointer flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
            <img src={`https://images.codata-admin.com/terroir/categories/${cat.image}`} alt="" className="w-14" />
            <span className="text-md group-hover:text-main duration-500">{cat.name}</span>
            </div>
          )
        })}
       </div>
      <div className="hidden lg:flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl font-bold">TROUVEZ VOTRE PRODUIT PAR RUBRIQUE</h1>
        <p className="text-xs text-black/90 w-2/3">Retrouvez des produits du terroir certifiés et labellisés pour attester de leur qualité exceptionnelle.</p>
        <a className="bg-main text-white py-2 px-5 rounded text-xs">Voir plus</a>
      </div>
      <div className="grid grid-cols-2 gap-3">
      {categories.slice(4,8).map(cat=>{
          return (
            <div key={cat.id}  onClick = {() => router.push(`/products?cat=${cat.id}`)} className="cursor-pointer flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
            <img src={`https://images.codata-admin.com/terroir/categories/${cat.image}`} alt="" className="w-14" />
            <span className="text-md group-hover:text-main duration-500">{cat.name}</span>
            </div>
          )
        })}
      </div>
      <img src="/treeCat.png" className="absolute -left-48  opacity-30 rotate-45 flex items-center -z-50 w-[500px]" />
    </div>
  )
}
