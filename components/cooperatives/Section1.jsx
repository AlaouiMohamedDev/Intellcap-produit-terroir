import React from 'react'
import { useRouter } from 'next/router';

export default function Section1() {
    const router = useRouter();
  return (
    <div class="bg-cooperative space-y-4 bg-cover bg-center w-full flex flex-col items-center justify-center text-white relative h-1/3">
        <div class="bg-black/50 absolute w-full h-full z-10">

        </div>
        <div class="flex items-center text-xl z-100 space-x-2">
            <a onClick = {() => router.push("/")} class="cursor-pointer hover:text-main duration-200">Home</a>
            <i class='text-lg bx bxs-label'></i>
            <span class="">Coopérative</span>
        </div>
        <h1 class="z-100 text-3xl font-bold">COOPÉRATIVES</h1>
    </div>
  )
}