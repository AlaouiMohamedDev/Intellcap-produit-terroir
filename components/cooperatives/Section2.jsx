import React from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectAllCooperatives } from '../../app/cooperatives/cooperativesSlice';
import { selectAllProducts } from '../../app/products/productsSlice';
import { setCookie } from 'cookies-next';
export default function Section2({cooperatives,products}) {
  
  const router = useRouter();
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 px-10">
      {
        cooperatives.map(coop=>{
          var prod=0
          products.forEach(product=>{
            if(product.cooperative == coop.id) prod=prod+1
          })
          return (
              <div key={coop.id} onClick = {() => {
                setCookie('coop',coop.id)
                router.push('/coopProduct')
              }} className="cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center border hover:border-main duration-200 rounded py-7 space-x-5 px-5">
                  <img src={coop.image} className="object-cover w-[150px] h-[150px] border border-main p-2 rounded-full" />
                  <div className="flex flex-col w-full space-y-5">
                    <div className="flex items-center justify-between">
                      <h1 className="text-md font-bold text-gray-900">{coop.name}</h1>
                      <span className="text-xs text-main">{prod}</span>
                    </div>
                    <p className="text-sm  text-black/60">{coop.description}</p>
                    <div className="flex items-center text-xs space-x-2 text-main">
                      <i className='bx bx-calendar-check'></i>
                      <span className="">16 Decmber 2022</span>
                    </div>
                  </div>
              </div>
          )
        })
      }
    </div>
  )
}
