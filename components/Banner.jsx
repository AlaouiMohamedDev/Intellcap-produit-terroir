import React from 'react'


export default function Banner() {
    
      return (
        <div class="relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 py-6 bg-gray-50">
            <img src="pattern-banner.png" class="absolute opacity-10 w-1/2 md:w-1/5 -z-1 -left-32  md:-left-5" />
            <div class="flex flex-col text-center md:text-left items-start w-1/2 space-y-5">
                <h6 class="text-sm text-Dgreen">Un savoir-faire ancestral </h6>
                <h1 class="text-5xl text-Dgreen">Les trésors <br />du terroir marocain</h1>
                <a class="text-md flex items-center space-x-2 cursor-pointer text-orange-400 ">
                    <span class="border-b border-orange-400">découvrir</span>
                    <i class='bx bx-chevron-right'></i>
                </a>
            </div>
            <img src="banner-1.png" class="w-2/3 md:w-1/3 flex items-end z-10 mt-10 md:mt-0" />
        </div>
      )
}
