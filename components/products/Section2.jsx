import React, { useEffect, useState } from 'react'
import ProductModal from '../ProductModal'
import {selectAllProducts} from '../../app/products/productsSlice'
import { useSelector } from 'react-redux';
import { selectAllCooperatives } from '../../app/cooperatives/cooperativesSlice';
import { selectAllCategories } from '../../app/categories/categoriesSlice';
import { useRouter } from 'next/router';

export default function Section2() {
    const router = useRouter();
    var displayedProducts= []
    
    const products = useSelector(selectAllProducts)
    const cooperatives = useSelector(selectAllCooperatives)
    const categories = useSelector(selectAllCategories)

try{
    
    function parse_query_string(query) {
            var vars = query.split("&");
            var query_string = {};
            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split("=");
              var key = decodeURIComponent(pair.shift());
              var value = decodeURIComponent(pair.join("="));
              // If first entry with this name
              if (typeof query_string[key] === "undefined") {
                query_string[key] = value;
                // If second entry with this name
              } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], value];
                query_string[key] = arr;
                // If third or later entry with this name
              } else {
                query_string[key].push(value);
              }
            }
            return query_string;
    }
    
    
    var query = window.location.search.substring(1);
    var getter = parse_query_string(query);

    if(getter.filter !=null){
        if(getter.filter == 2){
            displayedProducts = [...products].sort((a,b)=> b.prix - a.prix)
        }
        else{
            displayedProducts = [...products].sort((a,b)=> a.prix - b.prix)
        }
    }
    else{
        displayedProducts = products
    }
    if(getter.cat !=null){
        displayedProducts = displayedProducts.filter(val=>{if(val.category==getter.cat)return val})
    }
    else if(getter.coop !=null){
        displayedProducts = displayedProducts.filter(val=>{if(val.cooperative==getter.coop)return val})
    }
    else if(getter.search !=null){
        displayedProducts = displayedProducts.filter(val=>{if(val.nom.toLowerCase().includes(getter.search.toLowerCase()))return val})
    }
}
catch{

}
//Getting The GetParms from URL    



const selectHandler = (e) =>{
    var get= window.location.search.split('&')[0]+"&"
    if(get == "&" || get.includes('?filter')){
        get="?"
    }
    if(e.target.value ==2){
        router.push(`/products${get}filter=2`)
    }
    else if(e.target.value == 1)
    {
        router.push(`/products${get}filter=1`)
    }
    
}




// const productsPriceAccending= [...products].sort((a,b)=> a.prix - b.prix)

// console.log("🚀 ~ file: Section2.jsx ~ line 57 ~ Section2 ~ productsPriceAccending", productsPriceAccending)
    const[modal,setModal] = useState({
        name:"",
        desc:"",
        price:'',
        image:''
    })
    const ModalP = (pro) => {
        setModal({...modal,name:pro.nom,desc:pro.desc,price:pro.price,image:pro.image})
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
  return (
    <>
        <div className="bg-white py-10 px-5 md:px-10 lg:px-0 grid grid-cols-4">
            <div className="col-span-4 lg:col-span-3 w-full h-full lg:pl-5"> 
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 justify-between text-sm text-black/60">
                    <span>(25) produits</span>
                    <div className="flex items-center space-x-2">
                        <span>Filter par :</span>
                        <select onChange={selectHandler} className="bg-white w-[200px] border hover:border-main duration-200 rounded outline-none py-1 px-2">
                            <option disabled>Default</option>
                            <option value={1}>Prix +</option>
                            <option value={2}>Prix -</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
                    {
                        (displayedProducts.length !=0)
                        ?
                        displayedProducts.map(product=>{
                            var coopName =""
                            cooperatives.forEach((coop)=>{
                                if(coop.id == product.cooperative){
                                    coopName = coop.name
                                }
                            })
                            return(
                                <div key={product.id} className="flex flex-col space-y-5 group">
                                    <div className="h-[300px] w-full   relative overflow-hidden border-box">
                                        <img src={`https://images.codata-admin.com/terroir/products/${product.image}`} className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                                        <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                                            <a className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                                Ajoutez à la Cart
                                            </a>
                                            <a onClick={()=>ModalP(product)} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                            Vue Rapide
                                            </a>
                                        </div>
                                        <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                                            <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                                            <div className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                                                <i className='bx bx-heart text-md '></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 items-start">
                                        <h6 className="font-bold">{product.nom}</h6>
                                        <h6 className="text-sm text-black/50">Produit par : <span className="text-main">{coopName}</span></h6>
                                        <div className="flex items-center justify-between w-full">
                                            <h6 className="text-main font-black">{product.prix} DHs</h6>
                                            <span className="text-xs text-black/40">100% naturelle</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="bg-orange-300 text-orange-700 sm:col-span-2 md:col-span-3 w-full text-center py-3 text-sm">
                            Aucun produits pour le momment
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-col px-5 w-full space-y-5 col-span-4 lg:col-span-1">
                <div className="flex flex-col space-y-5 border hover:border-main duratio-200 rounded py-5 px-5 w-full">
                    <h1>Categories</h1>
                    <div className="flex flex-col space-y-2">
                        {
                            categories.map(cat=>{
                                var count=0
                                products.forEach(product=>{
                                    if(product.category == cat.id) count=count+1
                                })
                                return (
                                    <div key={cat.id}  onClick = {() => router.push(`/products?cat=${cat.id}`)} className="flex items-center justify-between text-xs cursor-pointer">
                                        <div className="flex items-center space-x-2">
                                            <img src={`https://images.codata-admin.com/terroir/categories/${cat.image}`} alt="" className="w-5" />
                                            <a className="text-main cursor-pointer">{cat.name}</a>
                                        </div>
                                        <span className="text-black/60">({count})</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col space-y-5 border hover:border-main duratio-200 rounded py-5 px-5 w-full">
                    <h1>Cooperatives</h1>
                    <div className="flex flex-col space-y-2">
                        {
                            cooperatives.map(coop=>{
                                return (
                                    <div key={coop.id}  onClick = {() => router.push(`/products?coop=${coop.id}`)} className="flex items-center space-x-2 text-xs text-main cursor-pointer">
                                        <i className='bx bxs-circle-half'></i>
                                        <span>{coop.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
        <ProductModal product={modal} />
    </>
  )
}
