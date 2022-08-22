import React from 'react'
import { useRouter } from 'next/router';

export default function Section1() {
    const router = useRouter();
  return (
    <div className="bg-products space-y-4 bg-cover bg-center w-full flex flex-col items-center justify-center text-white relative h-1/3">
        <div className="bg-black/50 absolute w-full h-full z-10">

        </div>
        <div className="flex items-center text-xl z-20 space-x-2">
            <a onClick = {() => router.push("/")} className="cursor-pointer hover:text-main duration-200">Home</a>
            <i className='text-lg bx bxs-label'></i>
            <span className="">Produit</span>
        </div>
        <h1 className="z-20 text-3xl font-bold">Produits</h1>
    </div>
  )
}
