import React from 'react'

export default function SearchModal() {
    const searchModal =()=>{
        const search= document.querySelector('.search')
        search.classList.add('hidden')
        search.classList.remove('flex')
    }
  return (
    <div class="fixed z-50 w-full h-screen top-0 hidden justify-end bg-gray-900/70  fade search">
        <div class="h-screen w-full md:w-[430px] bg-white flex flex-col  absolute fade-left">
           <div>
                <div class="relative flex items-center justify-center border-b border-gray-300 space-x-2 py-4 mb-7 ">
                    <span>Rechercher un produit</span>
                    <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main absolute right-5 text-gray-400" onClick={searchModal}/>
                </div>
                <div class="flex flex-col items-center w-full px-10 space-y-7">
                    <div class="relative flex group items-center justify-between border border-gray-500/50 hover:border-main  w-full">
                        <input placeholder = "Nom du produit" type="text" className = "placeholder:text-sm text-sm py-3 px-3 w-full outline-none text-gray-600" />
                        <i class='absolute group-hover:text-main bx bx-search cursor-pointer right-3 text-lg text-gray-500/50'></i>
                    </div>
                    <div class="grid grid-cols-2 gap-3  uppercase">
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="miel.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">Miels, Amlou et confitures</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="huile.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">Huiles alimentaires</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="rice.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">Semoules & farines</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="epice.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">épices & condiments</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="nuts.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">Fruits secs</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="tea-cup.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">Thés & Tisanes</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="serum.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">THydrolats & Tisanes</span>
                        </div>
                        <div class="flex flex-col group items-center space-y-3 text-center border border-gray-500/50 hover:border-main py-4 px-4">
                            <img src="bien-etre.png" alt="" class="w-10" />
                            <span class="text-xs group-hover:text-main duration-500">Bien être</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
