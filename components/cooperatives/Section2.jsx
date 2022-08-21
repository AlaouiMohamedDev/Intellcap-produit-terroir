import React from 'react'
import { useRouter } from 'next/router';

export default function Section2() {
  const router = useRouter();
  return (
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 px-10">
        <div onClick = {() => router.push("/coopProduct")} class="cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center border hover:border-main duration-200 rounded py-7 space-x-5 px-5">
            <img src="/cooperative/coop-2.png" class="object-cover w-[150px] h-[150px] border border-main p-2 rounded-full" />
            <div class="flex flex-col w-full space-y-5">
              <div class="flex items-center justify-between">
                <h1 class="text-md font-bold text-gray-900">Cooperative Taliouine</h1>
                <span class="text-xs text-main">10 produits</span>
              </div>
              <p class="text-sm  text-black/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eius officiis hic quia! Nobis, cupiditate.</p>
              <div class="flex items-center text-xs space-x-2 text-main">
                <i class='bx bx-calendar-check'></i>
                <span class="">16 Decmber 2022</span>
              </div>
            </div>
        </div>
        <div onClick = {() => router.push("/coopProduct")} class="cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center border hover:border-main duration-200 rounded py-7 space-x-5 px-5">
            <img src="/cooperative/coop-1.jpg" class="object-cover w-[150px] h-[150px] border border-main p-2 rounded-full" />
            <div class="flex flex-col w-full space-y-5">
              <div class="flex items-center justify-between">
                <h1 class="text-md font-bold text-gray-900">Cooperative Taliouine</h1>
                <span class="text-xs text-main">10 produits</span>
              </div>
              <p class="text-sm  text-black/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eius officiis hic quia! Nobis, cupiditate.</p>
              <div class="flex items-center text-xs space-x-2 text-main">
                <i class='bx bx-calendar-check'></i>
                <span class="">16 Decmber 2022</span>
              </div>
            </div>
        </div>
        <div onClick = {() => router.push("/coopProduct")} class="cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center border hover:border-main duration-200 rounded py-7 space-x-5 px-5">
            <img src="/cooperative/coop-3.png" class="object-cover w-[150px] h-[150px] border border-main p-2 rounded-full" />
            <div class="flex flex-col w-full space-y-5">
              <div class="flex items-center justify-between">
                <h1 class="text-md font-bold text-gray-900">Cooperative Taliouine</h1>
                <span class="text-xs text-main">10 produits</span>
              </div>
              <p class="text-sm  text-black/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eius officiis hic quia! Nobis, cupiditate.</p>
              <div class="flex items-center text-xs space-x-2 text-main">
                <i class='bx bx-calendar-check'></i>
                <span class="">16 Decmber 2022</span>
              </div>
            </div>
        </div>
        <div onClick = {() => router.push("/coopProduct")} class="cursor-pointer flex flex-col md:flex-row space-y-3 md:space-y-0 items-center border hover:border-main duration-200 rounded py-7 space-x-5 px-5">
            <img src="/cooperative/coop-4.png" class="object-cover w-[150px] h-[150px] border border-main p-2 rounded-full" />
            <div class="flex flex-col w-full space-y-5">
              <div class="flex items-center justify-between">
                <h1 class="text-md font-bold text-gray-900">Cooperative Taliouine</h1>
                <span class="text-xs text-main">10 produits</span>
              </div>
              <p class="text-sm  text-black/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eius officiis hic quia! Nobis, cupiditate.</p>
              <div class="flex items-center text-xs space-x-2 text-main">
                <i class='bx bx-calendar-check'></i>
                <span class="">16 Decmber 2022</span>
              </div>
            </div>
        </div>
    </div>
  )
}
