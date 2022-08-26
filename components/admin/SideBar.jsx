import React from 'react'
import { useRouter } from 'next/router';

export default function SideBar() {

  const router = useRouter();


    const OpenSideBar = () =>{
      const img = document.querySelector('.img');
      const imgSm = document.querySelector('.img-sm');
      const side = document.querySelector('.side');
      const span = document.querySelectorAll('.span');
      const imgUser = document.querySelector('.img-user');
      const door = document.querySelector('.door');
      const conUser = document.querySelector('.conUser');
      const container = document.querySelector('.side-container');
      const listItems = document.querySelectorAll('.list-items')
      const menuLeft =document.querySelector('.bx-menu-alt-left')
      const menuRight =document.querySelector('.bx-menu-alt-right')
      const info =document.querySelectorAll('.info')
      const page =document.querySelector('.page')

      menuRight.classList.toggle('hidden')
      menuLeft.classList.toggle('hidden')

      for(let i = 0; i < span.length;i++){
        span[i].classList.remove('hidden')
      }
      for(let i = 0; i < info.length;i++){
        info[i].classList.remove('group-hover:flex')
      }
      door.classList.add('md:text-2xl')
      imgUser.classList.remove('hidden')
      conUser.classList.add('md:space-x-2')
      imgSm.classList.add('hidden')
      img.classList.remove('hidden')
      side.classList.add('w-[250px]')
      container.classList.remove('flex-col')
      container.classList.remove('space-y-2')
      for(let i = 0; i < listItems.length;i++){
        listItems[i].classList.remove('items-center')
      }
      conUser.classList.add('space-x-2')

      page.classList.add('md:ml-[250px]') 
      
    }
    const CloseSideBar = () =>{
      const img = document.querySelector('.img');
      const imgSm = document.querySelector('.img-sm');
      const side = document.querySelector('.side');
      const span = document.querySelectorAll('.span');
      const imgUser = document.querySelector('.img-user');
      const door = document.querySelector('.door');
      const conUser = document.querySelector('.conUser');
      const container = document.querySelector('.side-container');
      const listItems = document.querySelectorAll('.list-items')
      const menuLeft =document.querySelector('.bx-menu-alt-left')
      const menuRight =document.querySelector('.bx-menu-alt-right')
      const info =document.querySelectorAll('.info')
      const page =document.querySelector('.page')

      menuLeft.classList.toggle('hidden')
      menuRight.classList.toggle('hidden')

      for(let i = 0; i < span.length;i++){
         span[i].classList.add('hidden')
       }
       for(let i = 0; i < info.length;i++){
        info[i].classList.add('group-hover:flex')
      }
      door.classList.remove('md:text-2xl')
      imgUser.classList.add('hidden')
      conUser.classList.remove('md:space-x-2')
      imgSm.classList.remove('hidden')
      img.classList.add('hidden')
      side.classList.remove('w-[250px]')
      container.classList.add('flex-col')
      container.classList.add('space-y-2')
      for(let i = 0; i < listItems.length;i++){
        listItems[i].classList.add('items-center')
      }
       conUser.classList.remove('space-x-2')
       page.classList.remove('md:ml-[250px]')

  }
  return (
    <div className="side h-screen fixed z-50 top-0  bg-dashBlack w-[250px] flex flex-col px-4 py-5 space-y-7 items-center text-gray-400 text-md">
      <div className="side-container flex  justify-between items-center">
        <img src="/logo-sm.png" alt="" className="img-sm hidden w-10" />
        <img src="/logo-dash.png" alt="" className="img  w-[70%] md:w-[50%] lg:w-[70%]" />
        <i onClick={CloseSideBar} className='bx bx-menu-alt-right text-3xl text-main cursor-pointer'></i>
        <i onClick={OpenSideBar} className='bx bx-menu-alt-left hidden text-3xl text-main cursor-pointer'></i>
      </div>
      <div className="flex flex-col  h-full justify-between w-full">
        <div className="w-full flex flex-col space-y-7 list-items">
          <div onClick = {() => router.push("/admin/dashboard")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bxs-dashboard' ></i>
            <span className="fade span">Dashboard</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Dashboard</span>
          </div>
          <div  onClick = {() => router.push("/admin/users")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bxs-group'></i>
            <span className="fade span">Utilisateurs</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Utilisateurs</span>
          </div>
          <div onClick = {() => router.push("/admin/cooperative")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bxs-leaf'></i>
            <span className="fade span">Coopératives</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Coopératives</span>
          </div>
          <div onClick = {() => router.push("/admin/product")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bxs-purchase-tag'></i>
            <span className="fade span">Produits</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Produits</span>
          </div>
          <div onClick = {() => router.push("/admin/category")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i class='bx bxs-pie-chart-alt-2'></i>
            <span className="fade span">Categories</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Produits</span>
          </div>
          <div onClick = {() => router.push("/admin/commande")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bxs-cart' ></i>
            <span className="fade span">Commandes</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Commandes</span>
          </div>
          <div  onClick = {() => router.push("/admin/message")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bxs-comment-detail'></i>
            <span className="fade span">Messages</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Messages</span>
          </div>
          <div  onClick = {() => router.push("/")} className="flex items-center space-x-5 hover:text-white duration-100 relative group cursor-pointer">
            <i className='bx bx-world'></i>
            <span className="fade span">Itellcap-Terroir</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Itellcap-Terroir</span>
          </div>
        </div>
        <div className="w-full flex flex-col  list-items space-y-3">
          <div className="flex w-max items-center space-x-2 text-gray-400 text-sm hover:text-white duration-100 group relative conUser">
            <img src="/user.jpg" className="w-7 h-7 rounded-lg img-user" />
            <span className="fade span">Admin name</span>
            <i className='door bx bxs-door-open text-xl cursor-pointer flex items-center' ></i>
            <span className="info absolute text-[10px] left-12 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Logout</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px]">
            <i className='bx bxs-copyright text-xl' ></i>
            <span className="span">Copyright-2022 Itellcap-Terroir</span>
          </div>
        </div>
      </div>
    </div>
  )
}
