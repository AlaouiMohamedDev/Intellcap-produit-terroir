import React from 'react'

export default function Test() {
  return (
    <div class="text-center py-10 px-10 w-full">
        <h1 class="text-2xl font-bold">Notre blog</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-10 py-16 w-full h-[500px]">
            <div class="overflow-hidden relative w-full">
                <img src="/blog-1.jpg" class="w-full object-cover h-1/2 2xl:h-2/3 hover:scale-110 duration-300"/>
                <div class="absolute z-50 flex flex-col space-y-4 right-0 w-[90%] lg:-bottom-5  text-left bg-white py-5 px-6">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden relative">
                <img src="/blog-2.jpg" class="w-full object-cover h-1/2 2xl:h-2/3 hover:scale-110 duration-300"/>
                <div class="absolute z-50 flex flex-col space-y-4 right-0 w-[90%] -bottom-5  text-left bg-white py-5 px-6">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden relative">
                <img src="/blog-3.png" class="w-full object-cover h-1/2 2xl:h-2/3 hover:scale-110 duration-300"/>
                <div class="absolute z-50 flex flex-col space-y-4 right-0 w-[90%] -bottom-5  text-left bg-white py-5 px-6">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden relative">
                <img src="/blog-4.jpg" class="w-full object-cover h-1/2 2xl:h-2/3 hover:scale-110 duration-300"/>
                <div class="absolute z-50 flex flex-col space-y-4 right-0 w-[90%] -bottom-5  text-left bg-white py-5 px-6">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
