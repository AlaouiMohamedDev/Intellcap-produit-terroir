import React from 'react'

export default function EditProfil() {
  return (
    <div className="lg:px-20 md:px-16 px-10 pb-20">
        <div className="pb-10 w-full flex justify-between">
            <h1 className="text-2xl font-bold text-gray-900 text-center w-full md:w-max">Modifier votre profile</h1>
            <input type="submit" defaultValue="Enregistrer" className="outline-none py-3 px-10 text-sm bg-main text-white rounded hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col space-y-2">
                <span className="text-sm text-black/70">Nom Complet</span>
                <input type="text" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" defaultValue="ahmed sylla"/>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-sm text-black/70">Email</span>
                <input type="email" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" defaultValue="ahmed@sylla.com"/>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-sm text-black/70">Téléphone</span>
                <input type="text" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" defaultValue="0615234584"/>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-sm text-black/70">Adresse</span>
                <input type="text" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" defaultValue="Guéliz,Rue Zarktouni N 15 ,Marrakech"/>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-sm text-black/70">Mot de passe</span>
                <input type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" defaultValue="0615234584"/>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-sm text-black/70">Confirmer mot de passe</span>
                <input type="password" className="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" defaultValue=""/>
            </div>
            <input type="submit" defaultValue="Enregistrer" className="outline-none py-3 px-10 text-sm bg-main text-white rounded md:hidden " />
        </div>
    </div>
  )
}
