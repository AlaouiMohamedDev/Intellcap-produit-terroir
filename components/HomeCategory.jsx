import React from 'react'

export default function HomeCategory() {
  return (
    <div className="relative grid lg:grid-cols-3 grid-cols-1 gap-3 py-28 px-12 lg:px-20 lg:space-x-10 items-center">
       <div className="lg:hidden flex flex-col mb-10 items-center text-center space-y-6">
        <h1 className="text-3xl font-bold">TROUVEZ VOTRE PRODUIT PAR RUBRIQUE</h1>
        <p className="text-xs text-black/90 w-2/3">Retrouvez des produits du terroir certifiés et labellisés pour attester de leur qualité exceptionnelle.</p>
        <a className="bg-main text-white py-2 px-5 rounded text-xs">Voir plus</a>
      </div>
      <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
            <img src="miel.png" alt="" className="w-14" />
            <span className="text-md group-hover:text-main duration-500">Miels, Amlou et confitures</span>
          </div>
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="huile.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">Huiles alimentaires</span>
          </div>
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="rice.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">Semoules & farines</span>
          </div>
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="epice.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">épices & condiments</span>
          </div>
       </div>
      <div className="hidden lg:flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl font-bold">TROUVEZ VOTRE PRODUIT PAR RUBRIQUE</h1>
        <p className="text-xs text-black/90 w-2/3">Retrouvez des produits du terroir certifiés et labellisés pour attester de leur qualité exceptionnelle.</p>
        <a className="bg-main text-white py-2 px-5 rounded text-xs">Voir plus</a>
      </div>
      <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="nuts.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">Fruits secs</span>
          </div>
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="tea-cup.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">Thés & Tisanes</span>
          </div>
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="serum.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">THydrolats & Tisanes</span>
          </div>
          <div className="flex flex-col group items-center space-y-5 text-center border border-gray-500/20 hover:border-main py-7 px-7">
              <img src="bien-etre.png" alt="" className="w-14" />
              <span className="text-sm group-hover:text-main duration-500">Bien être</span>
          </div>
      </div>
      <img src="/treeCat.png" className="absolute -left-48  opacity-30 rotate-45 flex items-center -z-50 w-[500px]" />
    </div>
  )
}
