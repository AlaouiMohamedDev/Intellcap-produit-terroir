import React, { useEffect, useState } from 'react'
import ProductModal from '../ProductModal'
import {selectAllProducts} from '../../app/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCooperatives } from '../../app/cooperatives/cooperativesSlice';
import { selectAllCategories } from '../../app/categories/categoriesSlice';
import { useRouter } from 'next/router';
import { getCookie, setCookie,deleteCookie } from 'cookies-next';
import PaginationUser from '../PaginationUser'
import { addToCart } from "../../app/cartSlices";
import { addTofav } from '../../app/favSlices';

export default function Section2({products,categories,cooperatives}) {
    const router = useRouter();
    var [displayedProducts,setDisplayed]= useState(products)
    const [filter,setFilter] = useState(0)

    const [currentPage,setCurrentPage] = useState(1)
    const [elementPerPage,seEelementPerPage] = useState(6)

    const indexOfLastElement = currentPage * elementPerPage
    const indexOfFirstElement = indexOfLastElement - elementPerPage
    //const [currentElements,setCurrentElements] = useState([])

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const currentElements =displayedProducts.slice(indexOfFirstElement,indexOfLastElement)
    const [count,setCount] = useState(0)
 
    // if(getCookie('cat'))
    //         {
    //             setDisplayed(products.filter(val=>{ if(val.category==getCookie('cat'))  return val}))
    //         }
    //         else if(getCookie('coop'))
    //         {
    //             setDisplayed(products.filter(val=>{ if(val.cooperative==getCookie('coop'))  return val}))
    //         }
    //         else if(getCookie('search'))
    //         {
    //             setDisplayed(products.filter(val=>{ if(val.nom.toLowerCase().includes(getCookie('search').toLowerCase()))  return val}))
    //         }
    //         else{
    //             setDisplayed(products)
    //         }

    useEffect(() =>{
        if(getCookie('cat'))
        {
            setDisplayed(products.filter(val=>{ if(val.category==getCookie('cat'))  return val}))
        }
        else if(getCookie('search'))
        {
            setDisplayed(products.filter(val=>{ if(val.nom.toLowerCase().includes(getCookie('search').toLocaleLowerCase()))  return val}))
        }
        else{
            setDisplayed(products)
        }
    },[getCookie('cat'),getCookie('search')])
        useEffect(() =>{
            
            setCount(displayedProducts.length)
        },[displayedProducts])
        
// try{
    
//     function parse_query_string(query) {
//             var vars = query.split("&");
//             var query_string = {};
//             for (var i = 0; i < vars.length; i++) {
//               var pair = vars[i].split("=");
//               var key = decodeURIComponent(pair.shift());
//               var value = decodeURIComponent(pair.join("="));
//               // If first entry with this name
//               if (typeof query_string[key] === "undefined") {
//                 query_string[key] = value;
//                 // If second entry with this name
//               } else if (typeof query_string[key] === "string") {
//                 var arr = [query_string[key], value];
//                 query_string[key] = arr;
//                 // If third or later entry with this name
//               } else {
//                 query_string[key].push(value);
//               }
//             }
//             return query_string;
//     }

//     var getter = parse_query_string(query);

//     if(getter.filter !=null){
//         if(getter.filter == 2){
//             displayedProducts = [...products].sort((a,b)=> b.prix - a.prix)
//         }
//         else{
//             displayedProducts = [...products].sort((a,b)=> a.prix - b.prix)
//         }
//     }
//     else{
//         displayedProducts = products
//     }
//     if(getter.cat !=null){
//         displayedProducts = displayedProducts.filter(val=>{if(val.category==getter.cat)return val})
//     }
//     else if(getter.coop !=null){
//         displayedProducts = displayedProducts.filter(val=>{if(val.cooperative==getter.coop)return val})
//     }
//     else if(getter.search !=null){
//         displayedProducts = displayedProducts.filter(val=>{if(val.nom.toLowerCase().includes(getter.search.toLowerCase()))return val})
//     }
// }
// catch{

// }
//Getting The GetParms from URL    





const selectHandler = (e) =>{
 
    console.log("🚀 ~ file: Section2.jsx ~ line 107 ~ selectHandler ~ e.target.value", e.target.value)
  if( e.target.value==2)
  {
      setDisplayed(currentElements.sort((a,b)=> a.prix - b.prix))
  }
  else if( e.target.value==1){
      setDisplayed(currentElements.sort((a,b)=> b.prix - a.prix))
  }
  else{
      setDisplayed(currentElements)
  }
 
}





const dispatch = useDispatch();

const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleAddToFav = (product) => {
    dispatch(addTofav(product));
};
// const productsPriceAccending= [...products].sort((a,b)=> a.prix - b.prix)

// console.log("🚀 ~ file: Section2.jsx ~ line 57 ~ Section2 ~ productsPriceAccending", productsPriceAccending)
    const[modal,setModal] = useState({
        name:"",
        desc:"",
        price:'',
        image:''
    })
    const ModalP = (pro) => {
        setModal({...modal,name:pro.nom,desc:pro.description,price:pro.prix,image:pro.image,qte:pro.qte})
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
  return (
    <>
        <div className="bg-white py-10 px-5 md:px-10 lg:px-0 grid grid-cols-4">
            <div className="col-span-4 lg:col-span-3 w-full h-full lg:pl-5"> 
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 justify-between text-sm text-black/60">
                    <span>({count}) produits</span>
                    <div className="flex items-center space-x-2">
                        <span>Filter par :</span>
                        <select onChange={selectHandler} className="bg-white w-[200px] select border hover:border-main duration-200 rounded outline-none py-1 px-2">
                            <option value={0} disabled>Default</option>
                            <option value={1}>Prix +</option>
                            <option value={2}>Prix -</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
                    {
                        (currentElements.length !=0)
                        ?
                        currentElements.map(product=>{
                            if(product.deletedAt == null)
                            {
                                var coopName =""
                                cooperatives.forEach((coop)=>{
                                    if(coop.id == product.cooperative){
                                        coopName = coop.name
                                    }
                                })
                                const d = new Date();
                                const d1 = new Date(product.date);
    
                                var Difference_In_Time = d.getTime() - d1.getTime();
                                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                return(
                                    <div key={product.id} className="flex flex-col space-y-5 group">
                                        <div className="h-[300px] w-full   relative overflow-hidden border-box">
                                            {
                                                product.qte==0
                                                &&
                                                <div className="bg-white/50 w-full h-full absolute z-40 flex items-center justify-center">
                                                    <div className="flex items-center space-x-2 text-gray-600 font-bold text-sm -rotate-45">
                                                        <i class='text-lg bx bx-block'></i>
                                                        <span>EN RUPTURE DE STOCK</span>
                                                    </div>
                                                </div>
                                            }
                                            <img src={product.image} className="w-full h-full object-cover absolute group-hover:scale-110 duration-500" />
                                            {
                                                product.qte>0
                                                &&
                                                <div className="absolute bottom-5 hidden group-hover:grid grid-cols-2 gap-2 text-center px-5 space-x-3 w-full fade-up">
                                                    <a onClick ={ () => handleAddToCart(product)} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                                        Ajoutez à la Cart
                                                    </a>
                                                    <a onClick={()=>ModalP(product)} className="bg-main text-white font-bold cursor-pointer hover:bg-white hover:text-black duration-300 text-xs py-3 px-2">
                                                    Vue Rapide
                                                    </a>
                                                </div>
                                            }
                                            {
                                                product.qte>0
                                                &&
                                                <div className="absolute hidden group-hover:flex items-center justify-between top-5 w-full px-5 fade-down">
                                                    <div onClick ={ () => handleAddToFav(product)} className="bg-black/75 hover:bg-red-600/75 duration-300 text-white inline-flex rounded-full p-3 cursor-pointer">
                                                        <i className='bx bx-heart text-md '></i>
                                                    </div>
                                                    
                                                    {
                                                        Difference_In_Days<=2
                                                        &&
                                                        <a className="text-white text-xs bg-red-600 py-2 px-2 rounded">Nouveau</a>
                                                    }
                                                </div>
    
                                            }
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
                            }
                        })
                        :
                        <div className="bg-orange-300 text-orange-700 sm:col-span-2 md:col-span-3 w-full text-center py-3 text-sm">
                            Aucun produits pour le momment
                        </div>
                    }
                </div>
                {   
                        (currentElements.length !=0)
                        &&
                        <PaginationUser  className="my-10" paginate={paginate} elementPerPage={elementPerPage} totalElement={displayedProducts.length}/>
                    }
            </div>
            <div className="flex flex-col px-5 w-full space-y-5 col-span-4 lg:col-span-1">
                <div className="flex flex-col space-y-5 border hover:border-main duratio-200 rounded py-5 px-5 w-full">
                    <h1>Categories</h1>
                    <div className="flex flex-col space-y-2">
                        {
                            categories.map(cat=>{
                                if(cat.deletedAt == null){
                                    var count=0
                                    products.forEach(product=>{
                                        if(product.category == cat.id) count=count+1
                                    })
                                    return (
                                        <div key={cat.id}  
                                        onClick = {() => {
                                            setDisplayed(products.filter(val=>{ if(val.category==cat.id)  return val}))
                                        }} className="flex items-center justify-between text-xs cursor-pointer">
                                            <div className="flex items-center space-x-2">
                                                <img src={cat.image} alt="" className="w-5" />
                                                <a className="text-main cursor-pointer">{cat.name}</a>
                                            </div>
                                            <span className="text-black/60">({count})</span>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col space-y-5 border hover:border-main duratio-200 rounded py-5 px-5 w-full">
                    <h1>Cooperatives</h1>
                    <div className="flex flex-col space-y-2">
                        {
                            cooperatives.map(coop=>{
                                if (coop.deletedAt == null){
                                    return (
                                        <div key={coop.id} 
                                        onClick = {() => {
                                            setDisplayed(products.filter(val=>{ if(val.cooperative==coop.id)  return val}))
                                        }} className="flex items-center space-x-2 text-xs text-main cursor-pointer">
                                            <i className='bx bxs-circle-half'></i>
                                            <span>{coop.name}</span>
                                        </div>
                                    )
                                }
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
