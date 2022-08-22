import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className="py-10 px-10 md:px-0 text-center">
      <h1 className="text-2xl font-bold pb-5">Découvrez nos principaux avantages</h1>
      <h6 className="text-main text-sm">Pour quoi vous nous choisissez ?</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-10 mx-auto py-16">
        <div className="hover:border-main justify-center w-full hover:scale-105 duration-300 flex flex-col items-center space-y-3 bg-white border rounded py-5 px-6 shadow-sm">
          <img className="w-[50px]" src="/delivery-main.png" />
          <h6 className="font-bold">Livraison</h6>
          <p className="text-xs text-gray-600">nous nous tenons à un temps de livraison rapide</p>
          <span className="text-main text-sm font-bold">Read more</span>       
        </div>
        <div className="hover:border-main justify-center w-full hover:scale-105 duration-300 flex flex-col items-center space-y-3 bg-white border rounded py-5 px-6 shadow-sm">
          <img className="w-[50px]" src="/quality-main.png" />
          <h6 className="font-bold">Qualité</h6>
          <p className="text-xs text-gray-600">Cultivé avec soin par des agriculteurs marocaines</p>
          <span className="text-main text-sm font-bold">Read more</span>       
        </div>
        <div className="hover:border-main justify-center w-full hover:scale-105 duration-300 flex flex-col items-center space-y-3 bg-white border rounded py-5 px-6 shadow-sm">
          <img className="w-[50px]" src="/relationship-main.png" />
          <h6 className="font-bold">Fiabilité</h6>
          <p className="text-xs text-gray-600">tout 100% naturelle 100% marocaines</p>
          <span className="text-main text-sm font-bold">Read more</span>       
        </div>
        <div className="hover:border-main justify-center w-full hover:scale-105 duration-300 flex flex-col items-center space-y-3 bg-white border rounded py-5 px-6 shadow-sm">
          <img className="w-[50px]" src="/customer-service-main.png" />
          <h6 className="font-bold">Support</h6>
          <p className="text-xs text-gray-600">Nous restons à votre écoute et nous répondons à vos demandes </p>
          <span className="text-main text-sm font-bold">Read more</span>       
        </div>
      </div>
    </div>
  )
}
