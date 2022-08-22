import React from 'react'

export default function EditProfil() {
  return (
    <div class="lg:px-20 md:px-16 px-10 pb-20">
        <div class="pb-10 w-full flex justify-between">
            <h1 class="text-2xl font-bold text-gray-900 text-center w-full md:w-max">Modifier votre profile</h1>
            <input type="submit" value="Enregistrer" class="outline-none py-3 px-10 text-sm bg-main text-white rounded hidden md:block" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="flex flex-col space-y-2">
                <span class="text-sm text-black/70">Nom Complet</span>
                <input type="text" class="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" value="ahmed sylla"/>
            </div>
            <div class="flex flex-col space-y-2">
                <span class="text-sm text-black/70">Email</span>
                <input type="email" class="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" value="ahmed@sylla.com"/>
            </div>
            <div class="flex flex-col space-y-2">
                <span class="text-sm text-black/70">Téléphone</span>
                <input type="text" class="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" value="0615234584"/>
            </div>
            <div class="flex flex-col space-y-2">
                <span class="text-sm text-black/70">Adresse</span>
                <input type="text" class="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" value="Guéliz,Rue Zarktouni N 15 ,Marrakech"/>
            </div>
            <div class="flex flex-col space-y-2">
                <span class="text-sm text-black/70">Mot de passe</span>
                <input type="password" class="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" value="0615234584"/>
            </div>
            <div class="flex flex-col space-y-2">
                <span class="text-sm text-black/70">Confirmer mot de passe</span>
                <input type="password" class="outline-none py-3 px-4 text-sm text-black/80 bg-gray-200/50 rounded" value=""/>
            </div>
            <input type="submit" value="Enregistrer" class="outline-none py-3 px-10 text-sm bg-main text-white rounded md:hidden " />
        </div>
    </div>
  )
}
