import React from 'react'

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:place-items-center lg:place-items-stretch lg:grid-cols-5 gap-20 py-20 px-10 md:px-20 h-full lg:h-[350px] bg-gray-50">
        <div className="flex flex-col col-span-2 text-left justify-between  space-y-5 lg:space-y-0 h-full">
           <div className="flex flex-col space-y-3">
                <img src="/logo-1.png" className="lg:w-1/3 w-full" />
                <p className="text-xs lg:w-2/3 w-full text-black/70">Lorem ipsum dolor sit amet consectetur adipisicineserune fugit quo modi enim molestiae corporis? Id, beatae deleniti accusantium ad enim rem itaque magni dolore ratione labore quaerat aliquam iure perferendis.</p>
           </div>
           <div className="flex items-center space-x-3 text-sm">
                <i className='bx bx-copyright'></i>
                <span>2022</span>
                <span className="text-main font-bold animate-pulse">IntellCap produit terroir</span>
           </div>
        </div>
        <div className="flex flex-col space-y-8 lg:space-y-0 text-left justify-between h-full">
            <h1 className="text-sm font-bold">SITEMAP</h1>
            <h1 className="text-sm text-black/60 hover:text-main duration-200">Acceuil</h1>
            <h1 className="text-sm text-black/60 hover:text-main duration-200">A propos</h1>
            <h1 className="text-sm text-black/60 hover:text-main duration-200">Contactez-nous</h1>
        </div>
        <div className="flex flex-col space-y-8 lg:space-y-0 text-left justify-between h-full">
            <h1 className="text-sm font-bold ">PRODUIT</h1>
            <h1 className="text-sm text-black/60 hover:text-main duration-200">Categories</h1>
            <h1 className="text-sm text-black/60 hover:text-main duration-200">Cooperatives</h1>
            <h1 className="text-sm text-black/60 hover:text-main duration-200">Nouveaux produits</h1>
        </div>
        <div className="flex flex-col items-center w-full h-full justify-between space-y-20 lg:space-y-0 col-span-2  md:col-span-5 lg:col-span-1">
            <div className="flex items-center justify-center space-x-10 text-xl w-full">
                <i className='bx bxl-facebook border border-gray-400 rounded-full p-2 hover:bg-white hover:text-main hover:border-main hover:scale-110 hover:animate-pulse duration-200' ></i>
                <i className='bx bxl-twitter border  border-gray-400 rounded-full p-2 hover:bg-white hover:text-main hover:border-main hover:scale-110 hover:animate-pulse duration-200' ></i>
                <i className='bx bxl-instagram-alt border  border-gray-400 rounded-full p-2 hover:bg-white hover:text-main hover:border-main hover:scale-110 hover:animate-pulse duration-200' ></i>
            </div>
            <div className="relative flex items-center border border-gray-400 rounded w-full md:w-1/2 lg:w-full">
                <span className="flex absolute justify-center text-center w-full -top-7 text-[10px] text-black/70">S'abonnez a notre newsletter</span>
                <input type="text" placeholder="Email" className="w-full placeholder:text-xs bg-transparent hover:bg-white border-0 py-2 px-3 focus:outline-main " />
                <i className='bx bxs-send absolute right-2' ></i>
            </div>
        </div>

    </div>
  )
}
