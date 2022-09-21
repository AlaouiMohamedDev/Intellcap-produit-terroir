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
        showSlides(0);
        AOS.init();
      },[])

   useEffect(() =>{
        showSlides(slideIndex);
      },[slideIndex])

    
    const  currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    var i=0;


    setInterval(() =>{
        if(i==3){i=0;}
        try{
            currentSlide(i)
        }
        catch{
            
        }
        i=i+1;
       },3000);




    const plusSlides = (n) => {
    showSlides(slideIndex += n);
    }

    

   
      return (
        <div className="relative h-max">
            <div className="fade carousel relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 md:py-36 h-sm py-20 bg-ban-2 bg-cover bg-center ">
                <div className="flex flex-col text-left items-start w-full space-y-5">
                    <h6 className="text-xs text-black bg-white  px-5 py-0 rounded opacity-70">Un savoir-faire ancestral </h6>
                    <h1 className="text-xl md:text-4xl text-white">Les trésors <br />du terroir marocain</h1>
                    <a className="text-md flex items-center cursor-pointer bg-main text-white py-2 px-5 rounded">
                        <span className="text-sm">découvrir</span>
                        <i className='bx bxs-chevron-right'></i>
                    </a>
                </div>
            </div>
            <div className="fade carousel relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 md:py-36 h-sm py-20 bg-ban-3 bg-cover bg-center ">
                <div className="flex flex-col text-left md:text-right items-start pl-30 md:items-end w-full space-y-5">
                    <h6 className="text-xs flex text-black bg-white  px-5 py-0 rounded opacity-70">100% Produits Naturelles </h6>
                    <h1 className="text-lg md:text-4xl text-black md:w-2/3">Découvrez notre sélection de nouveaux<br/> produits de terroir</h1>
                    <a className="text-md flex items-center cursor-pointer bg-main text-white py-2 px-5 rounded">
                        <i className='bx bxs-chevron-left'></i>
                        <span className="text-xs md:text-sm">TOUTES LES NOUVEAUTÉS</span>
                    </a>
                </div>
            </div>
            <div className="fade carousel relative flex flex-col md:flex-row uppercase items-center justify-between px-4 md:px-20 md:py-36 h-sm py-20 bg-ban-4 bg-cover bg-center ">
                <div className="flex flex-col text-left items-start w-full space-y-5">
                    <h6 className="text-xs text-black bg-white  px-5 py-0 rounded opacity-70"> démocratie et solidarité</h6>
                    <h1 className="text-xl md:text-4xl text-black">RETROUVEZ TOUTES<br/> VOS COOPÉRATIVES PRÉFÉRÉES</h1>
                    <a className="text-md flex items-center cursor-pointer bg-main text-white py-2 px-5 rounded">
                        <span className="text-sm">voir plus</span>
                        <i className='bx bxs-chevron-right'></i>
                    </a>
                </div>
            </div>
            <div className="flex items-center absolute justify-center w-full -bottom-9">
                <div className="flex items-center justify-center bg-main rounded-full w-14 h-14 md:w-20 md:h-20">
                    <i className='text-xl md:text-3xl bx bx-chevron-left text-white cursor-pointer' onClick={()=>plusSlides(-1)}></i>
                    <span className="h-full w-0.5 bg-white px-0 opacity-40"></span>
                    <i className='text-xl md:text-3xl bx bx-chevron-right text-white cursor-pointer' onClick={()=>plusSlides(1)}></i>
                </div>
            </div>
        </div>
      )
}
