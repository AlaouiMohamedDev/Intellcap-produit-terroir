import React from 'react'
import CommandModal from './CommandModal'

export default function Command() {
    const ModalP = () => {
        const Products = document.querySelector('.Products')
        Products.classList.remove('hidden')
        Products.classList.add('flex')
    }
  return (
    <div className="lg:px-20 md:px-16 px-5 pb-20 w-screen">
        <div className="pb-10 w-full flex justify-between flex-col md:flex-row text-left space-y-5 md:space-y-0 space-x-0">
            <h1 className="text-2xl font-bold text-gray-900 text-center w-full md:w-max">Dernières commandes</h1>
            <div class="flex space-x-2 items-center text-gray-500 hover:text-main cursor-pointer">
                <span class="text-sm ">Commandez maintenant</span>
                <i class='bx bx-right-arrow-alt text-lg'></i>
            </div>
        </div>
            <div className="md:w-full w-[95%] flex-col justify-center">
                <div className="w-full grid grid-cols-4 px-3 py-5 bg-black/10 text-sm md:text-base text-gray-600">
                    <span>Numéro</span>
                    <span>Date</span>
                    <span>Prix totale</span>
                    <span>Statut</span>
                </div>
                <div className="text-xs md:text-base w-full grid grid-cols-4 px-3 py-5 text-gray-700 border-b items-center">
                    <div onClick={ModalP} class="flex items-center space-x-1 cursor-pointer ">
                        <i class='bx bx-show-alt text-main text-lg'></i>
                        <span>0001</span>
                    </div>
                    <span>08-08-2022</span>
                    <span>350 MAD</span>
                    <span className="text-green-400">Livré</span>
                </div>
            </div>
        <CommandModal/>
    </div>
  )
}
