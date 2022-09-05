import React from 'react'
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

export default function UserBanner(props) {
    
    const router = useRouter();
    
  return (
    <>
        <div className="lg:p-20 md:p-16 p-10">
            <div className="w-full flex xl:flex-row flex-col p-10 xl:space-x-10 space-y-3 xl:space-y-0 bg-user bg-cover rounded relative items-center xl:items-stretch">
                <div className="w-full h-full bg-black/40 absolute rounded top-0 left-0">
                </div>
                <div className="rounded-full w-40 h-40 overflow-hidden border border-white p-2 z-20">
                    <img src="/user.jpg" alt="" className="object-cover rounded-full" />
                </div>
                <div className="flex flex-col justify-evenly z-20 space-y-3 xl:space-y-0 items-center xl:items-start">
                    <span className="text-xl font-semibold text-white">{getCookie('name')}</span>
                    <div className="flex flex-col xl:flex-row items-start xl:items-center space-y-5 xl:space-x-5 xl:space-y-0 text-sm w-max xl:w-auto">
                        {
                            (props.name=="edit") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Modifier profile</a> : <a onClick = {() => router.push("/profil")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Modifier profile</a>

                        }
                        {
                            (props.name=="wish") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Mes favoris</a> : <a onClick = {() => router.push("/wishList")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Mes favoris</a>

                        }
                        {
                            (props.name=="card") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Mon panier</a> : <a onClick = {() => router.push("/card")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Mon panier</a>

                        }
                        {
                            (props.name=="command") ? <a className="text-center active py-2 px-4 rounded w-full xl:w-auto">Historique des achats</a> : <a onClick = {() => router.push("/commande")} className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 w-full xl:w-auto">Historique des achats</a>

                        }
                        <a className="text-center bg-white py-2 px-4 cursor-pointer rounded hover:bg-main hover:text-white duration-300 space-x-2 items-center w-full xl:w-auto">
                            <span>Se déconnecter</span>
                            <i className='bx bxs-lock'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}