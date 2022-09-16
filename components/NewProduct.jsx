import React, { useEffect, useState } from 'react'
import ProductModal from './ProductModal'
import {selectAllProducts} from '../app/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../app/cartSlices";
import { addTofav } from "../app/favSlices";

export default function NewProduct({cooperatives}) {


    //const count = products.length
    const p = useSelector(selectAllProducts)

    const [products,setProducts] = useState([])

    useEffect(() => {
        setProducts({})
    },[])

    useEffect(() => {
        setProducts([...p].reverse().slice(0,8).filter(val=>{if(val.deletedAt == null)return val}))
    },[p])
    const[modal,setModal] = useState({
        id:'',
        name:"",
        desc:"",
        price:'',
        image:''
    })

    
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    
    const handleAddToFav = (product) => {
        dispatch(addTofav(product));
    };
    const ModalP = (pro) => {
        setModal({...modal,id:pro.id,nom:pro.nom,desc:pro.description,prix:pro.prix,image:pro.image,qte:pro.qte})
        const ProductM = document.querySelector('.ProductM')
        ProductM.classList.remove('hidden')
        ProductM.classList.add('flex')
    }
  return (
    <div className="py-24 flex flex-col items-center justify-center  md:px-16 xl:px-24 bg-white">
        <h1 className="text-2xl font-bold mb-4">Nouveau Produits</h1>
        <h6 className="text-md text-gray-400">100% Marocaine</h6>
        {
            products.length !=0
            ?
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 md:gap-24 xl:gap-28 py-10">
                {
                    products.map(product =>{
                            var coopName =""
                            cooperatives.forEach(coop=>{
                                if(coop.id == product.cooperative)coopName=coop.name
                            })
                            const d = new Date();
                            const d1 = new Date(product.date);
        
                            var Difference_In_Time = d.getTime() - d1.getTime();
                            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                            return(
                                <div key={product.id} className="flex flex-col space-y-5 group ">
                                    <div className="w-[300px] h-[400px] bg-gray-300 relative overflow-hidden border-box">
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

                    })
                }
            </div>
            :
            <div className="bg-custGreen rounded py-5 my-10 w-full flex items-center justify-center space-x-2 text-white">
                <i class='bx bxs-sad'></i>
                <span>Aucun produit pour le momment</span>
            </div>
        }
        <ProductModal product={modal}/>
    </div>
  )
}
