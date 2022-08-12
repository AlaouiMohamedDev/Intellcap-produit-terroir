import React from 'react'

export default function ProductModal() {
const ModalP = () => {
    const ProductM = document.querySelector('.ProductM')
    ProductM.classList.remove('flex')
    ProductM.classList.add('hidden')
}
  return  (
    <div class="fade  h-screen w-full fixed z-90 top-0 hidden ProductM justify-center items-center ">
        <div onClick={ModalP} class=" bg-gray-900/70 w-full h-screen absolute">
        </div>
        <div class="w-full h-screen md:w-[850px] md:h-[510px] bg-white flex flex-col md:flex-row relative">
        <i onClick={ModalP} class='bx bx-x absolute right-5 top-5 text-lg text-gray-700 cursor-pointer hover:text-main duration-300'></i>
            <img src="/product/miel.jpg" alt="" class="w-full md:w-[50%] object-cover" />
            <div class="flex flex-col px-10 h-full py-5 md:py-10 justify-between w-full">
                <div class="flex flex-col space-y-5 md:space-y-10">
                    <div  class="flex flex-col space-y-4">
                        <h1 class="text-xl">Miel de ravenelle - 220g</h1>
                        <span class="text-md text-gray-600">200 DHs</span>
                        <p class="text-sm font-sans text-gray-600 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure molestias esse reprehenderit modi nemo!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure molestias esse reprehenderit modi nemo!
                        </p>
                    </div>
                    <div class="flex justify-between items-center ">
                        <div class=" text-sm md:text-base space-x-4 border py-3 px-6" >
                            <span class="text-gray-300 cursor-pointer">-</span>
                            <span>1</span>
                            <span class="text-gray-300 cursor-pointer">+</span>
                        </div>
                        <a href="#" class="text-sm md:text-base text-white bg-main px-4 md:px-6 py-3">Ajouter au panier</a>
                    </div>
                </div>           
                <div class=" flex justify-center text-sm w-full text-gray-500">
                    <span>Produit terroir Marocaine <span class="text-main animate-pulse">100%</span> naturelle</span>
                </div> 
            </div>
        </div>
    </div>
  )
}
