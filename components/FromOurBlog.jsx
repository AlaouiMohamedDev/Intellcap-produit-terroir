import React from 'react'

export default function FromOurBlog() {
  return (
    <div class="text-center py-10 px-5 md:px-10">
        <h1 class="text-2xl font-bold">Notre blog</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-4 gap-2 md:gap-5 py-20">
            <div class="w-[350px] h-[400px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[500px] overflow-hidden relative">
                <img src="/blog-1.jpg" class="object-cover w-[400px] lg:h-[300px]  h-[300px] md:w-[400px] md:h-[400px] hover:scale-110 duration-300"/>
                <div class="absolute flex flex-col space-y-4 right-0 lg:-right-20 2xl:right-0 text-left bg-white py-5 px-6 bottom-5 w-[350px] ">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
            <div class="w-[350px] h-[400px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[500px] overflow-hidden relative">
                <img src="/blog-2.jpg" class="object-cover w-[400px] lg:h-[300px]  h-[300px] md:w-[400px] md:h-[400px] hover:scale-110 duration-300"/>
                <div class="absolute flex flex-col space-y-4 right-0 lg:-right-20 2xl:right-0 text-left bg-white py-5 px-6 bottom-5 w-[350px] ">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
            <div class="w-[350px] h-[400px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[500px] overflow-hidden relative">
                <img src="/blog-3.png" class="object-cover w-[400px] lg:h-[300px]  h-[300px] md:w-[400px] md:h-[400px] hover:scale-110 duration-300"/>
                <div class="absolute flex flex-col space-y-4 right-0 lg:-right-20 2xl:right-0 text-left bg-white py-5 px-6 bottom-5 w-[350px] ">
                    <h1 class="text-md font-bold">Lorem ipsum dolor sit amet.</h1>
                    <p class="text-ellipsis text-xs leading-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione libero nostrum reiciendis impedit aliquam.</p>
                    <span class="bg-main h-0.5 w-1/4"></span>
                    <div class="text-xs text-black/50 flex items-center">
                        <i class='bx bx-calendar'></i>
                        <span class="">Dec 19 2020</span>
                    </div>
                </div>
            </div>
            <div class="w-[350px] h-[400px] lg:w-[300px] 2xl:w-[400px] 2xl:h-[500px] overflow-hidden relative">
                <img src="/blog-4.jpg" class="object-cover w-[400px] lg:h-[300px]  h-[300px] md:w-[400px] md:h-[400px] hover:scale-110 duration-300"/>
                <div class="absolute flex flex-col space-y-4 right-0 lg:-right-20 2xl:right-0 text-left bg-white py-5 px-6 bottom-5 w-[350px] ">
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
