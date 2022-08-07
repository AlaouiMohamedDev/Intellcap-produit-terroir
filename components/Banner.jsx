import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Banner() {


    let slideIndex = 1;
    
    const  showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName('carousel')
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden')
            slides[i].classList.remove('flex')
            slides[i].classList.remove('md:flex-row')
        }
        slides[slideIndex-1].classList.remove('hidden')
        slides[slideIndex-1].classList.add('md:flex-row')
        slides[slideIndex-1].classList.add('flex')
    }
    

   useEffect(() =>{
        showSlides(slideIndex);
        AOS.init();
      },[])

    
    const  currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    var i=0;

   setInterval(() =>{
    if(i==3){i==0;}
    currentSlide(i)
    i=i+1;
   },6000);


    const plusSlides = (n) => {
    showSlides(slideIndex += n);
    }

    

   
      return (
        <div class="relative h-max">
            <div class="fade carousel relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 md:py-36 h-sm py-20 bg-ban-2 bg-cover bg-center ">
                <div class="flex flex-col text-left items-start w-full space-y-5">
                    <h6 class="text-xs text-black bg-white  px-5 py-0 rounded opacity-70">Un savoir-faire ancestral </h6>
                    <h1 class="text-xl md:text-4xl text-white">Les trésors <br />du terroir marocain</h1>
                    <a class="text-md flex items-center cursor-pointer bg-main text-white py-2 px-5 rounded">
                        <span class="text-sm">découvrir</span>
                        <i class='bx bxs-chevron-right'></i>
                    </a>
                </div>
            </div>
            <div class="fade carousel relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 md:py-36 h-sm py-20 bg-ban-3 bg-cover bg-center ">
                <div class="flex flex-col text-left md:text-right items-start pl-30 md:items-end w-full space-y-5">
                    <h6 class="text-xs flex text-black bg-white  px-5 py-0 rounded opacity-70">100% Produits Naturelles </h6>
                    <h1 class="text-lg md:text-4xl text-black md:w-2/3">Découvrez notre sélection de nouveaux<br/> produits de terroir</h1>
                    <a class="text-md flex items-center cursor-pointer bg-main text-white py-2 px-5 rounded">
                        <i class='bx bxs-chevron-left'></i>
                        <span class="text-xs md:text-sm">TOUTES LES NOUVEAUTÉS</span>
                    </a>
                </div>
            </div>
            <div class="fade carousel relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 md:py-36 h-sm py-20 bg-ban-4 bg-cover bg-center ">
                <div class="flex flex-col text-left items-start w-full space-y-5">
                    <h6 class="text-xs text-black bg-white  px-5 py-0 rounded opacity-70"> démocratie et solidarité</h6>
                    <h1 class="text-xl md:text-4xl text-black">RETROUVEZ TOUTES<br/> VOS COOPÉRATIVES PRÉFÉRÉES</h1>
                    <a class="text-md flex items-center cursor-pointer bg-main text-white py-2 px-5 rounded">
                        <span class="text-sm">voir plus</span>
                        <i class='bx bxs-chevron-right'></i>
                    </a>
                </div>
            </div>
            <div class="flex items-center absolute justify-center w-full -bottom-9">
                <div class="flex items-center justify-center bg-main rounded-full w-14 h-14 md:w-20 md:h-20">
                    <i class='text-xl md:text-3xl bx bx-chevron-left text-white cursor-pointer' onClick={()=>plusSlides(-1)}></i>
                    <span class="h-full w-0.5 bg-white px-0 opacity-40"></span>
                    <i class='text-xl md:text-3xl bx bx-chevron-right text-white cursor-pointer' onClick={()=>plusSlides(1)}></i>
                </div>
            </div>
        </div>
      )
}
