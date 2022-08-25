import React from 'react'

export default function SideBar() {
  return (
    <div className="h-screen bg-dashBlack w-1/5 flex flex-col px-4 py-5 space-y-7 items-center text-gray-400 text-md">
      <div className="flex justify-between items-center">
        <img src="/logo-dash.png" alt="" className="w-[70%]" />
        <i class='bx bx-menu-alt-left text-3xl text-main cursor-pointer'></i>
      </div>
      <div className="flex flex-col h-full justify-between w-full pl-3">
        <div className="w-full flex flex-col space-y-7 ">
          <div className="flex items-center space-x-5">
            <i class='bx bxs-dashboard' ></i>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bxs-group'></i>
            <span>Utilisateurs</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bxs-leaf'></i>
            <span>Coopératives</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bxs-purchase-tag'></i>
            <span>Produits</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bxs-cart' ></i>
            <span>Commandes</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bxs-comment-detail'></i>
            <span>Messages</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bx-world'></i>
            <span>Itellcap-Terroir</span>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-7">
          <div className="flex items-center space-x-5">
            <i class='bx bxs-comment-detail'></i>
            <span>Se déconnecter</span>
          </div>
          <div className="flex items-center space-x-5">
            <i class='bx bx-world'></i>
            <span>Itellcap-Terroir</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
