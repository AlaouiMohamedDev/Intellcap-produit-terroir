import React from 'react'

export default function CommandModal() {
    const ModalP = () => {
        const Products = document.querySelector('.Products')
        Products.classList.remove('flex')
        Products.classList.add('hidden')
    }
  return (
    <div className="fixed items-center justify-center fade Products h-screen w-full bg-black/50 hidden z-100 top-0 left-0">
         <div className="bg-white w-screen h-screen md:w-auto md:h-auto md:my-20 md:mx-32 py-10 px-5 space-y-10 rounded overflow-hidden relative">
            <h1 className="text-xl">Liste des produits</h1>
            <i onClick={ModalP} class='bx bx-x-circle absolute -top-5 right-5 text-2xl text-gray-600 cursor-pointer' ></i>
            <div className="w-full text-sm h-screen md:h-[400px] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-main relative">
                <div className="grid grid-cols-5 px-3 py-5 bg-gray-100 text-gray-600 sticky z-100 top-0 w-full">
                    <span>Nom</span>
                    <span>Coopérative</span>
                    <span>Prix</span>
                    <span>Quantité</span>
                    <span>Image</span>
                </div>
                <div className="text-xs md:text-sm grid grid-cols-5 px-3 py-5 text-gray-700 border-b items-center">
                    <span>Miel de ravenelle - 220g</span>
                    <span>Ahmed Coopérative</span>
                    <span>300 MAD</span>
                    <span>2</span>
                    <img src="/product/miel.jpg" alt="" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-xs md:text-sm grid grid-cols-5 gap-0 md:gap-3 px-3 py-5 text-gray-700 border-b items-center">
                    <span>Miel de ravenelle - 220g</span>
                    <span>Ahmed Coopérative</span>
                    <span>300 MAD</span>
                    <span>2</span>
                    <img src="/product/miel.jpg" alt="" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-xs md:text-sm grid grid-cols-5 gap-0 md:gap-3 px-3 py-5 text-gray-700 border-b items-center">
                    <span>Miel de ravenelle - 220g</span>
                    <span>Ahmed Coopérative</span>
                    <span>300 MAD</span>
                    <span>2</span>
                    <img src="/product/miel.jpg" alt="" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-xs md:text-sm grid grid-cols-5 gap-0 md:gap-3 px-3 py-5 text-gray-700 border-b items-center">
                    <span>Miel de ravenelle - 220g</span>
                    <span>Ahmed Coopérative</span>
                    <span>300 MAD</span>
                    <span>2</span>
                    <img src="/product/miel.jpg" alt="" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-xs md:text-sm grid grid-cols-5 gap-0 md:gap-3 px-3 py-5 text-gray-700 border-b items-center">
                    <span>Miel de ravenelle - 220g</span>
                    <span>Ahmed Coopérative</span>
                    <span>300 MAD</span>
                    <span>2</span>
                    <img src="/product/miel.jpg" alt="" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-xs md:text-sm grid grid-cols-5 gap-0 md:gap-3 px-3 py-5 text-gray-700 border-b items-center">
                    <span>Miel de ravenelle - 220g</span>
                    <span>Ahmed Coopérative</span>
                    <span>300 MAD</span>
                    <span>2</span>
                    <img src="/product/miel.jpg" alt="" className="w-16 h-16 object-contain" />
                </div>
            </div>
         </div>
    </div>
  )
}