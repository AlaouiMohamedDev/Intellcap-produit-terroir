import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import swal from 'sweetalert2'
import Select from 'react-select'
import {selectAllCooperatives} from '../../app/cooperatives/cooperativesSlice'
import {selectCooperativeById} from '../../app/cooperatives/cooperativesSlice'
import {selectAllCategories} from '../../app/categories/categoriesSlice'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import {selectAllProducts} from '../../app/products/productsSlice'

export default function Products({products,categories,cooperatives}) {
    //Setting date
const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", option).replace(/,/g,' ');
const router = useRouter();

  const optionsCoop = []

//   const cooperatives = useSelector(selectAllCooperatives)
//   const categories = useSelector(selectAllCategories)
  

  const [prods,setProds]  = useState(products)


  const c= useSelector(selectAllProducts)
  useEffect(()=>{
    setProds(c)
  },[c])
 
 

  cooperatives.forEach(element => {
    let dropDownEle = { label: element.name, value: element.id };
    optionsCoop.push(dropDownEle);
  });

 
  const optionsCat = []

  const [search,setSearch] = useState([])
  const handleSearch = (e) => {
    e.persist()
    setSearch(e.target.value)
  }
  
  categories.forEach(element => {
    let dropDownEle = { label: element.name, value: element.id };
    optionsCat.push(dropDownEle);
  });

  const [catId,setCatId] = useState()

  const handlerCat = async(e) =>{
    setCatId(await e.value)
  }

  const [coopId,setCoopId] = useState()
  
  const handlerCoop = async (e) =>{
    setCoopId(await e.value)
  }

  const [addInput,setAdd] = useState({
    name:'',
    price:'',
    description:'',
    qte:''
});
const KeyUp = (e) =>{
    e.persist();
    if(e.target.value<1){
        setAdd({...addInput,[e.target.name]:1});
    }
    
}
const KeyUpEdit = (e) =>{
    e.persist();
    if(e.target.value<1){
        setAdd({...addInput,[e.target.name]:1});
    }
    
}
const handlerAddInput =(e) =>{
    e.persist();
    setAdd({...addInput,[e.target.name]:e.target.value});
}

const [imageName, setImageName] = useState(null);
const [image, setImage] = useState(null); // For the input image

const addHandlerImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setImageName(i.name);
    }
};

  
  const customStyles = {

    menuList :()=>({
        backgroundColor:'#212529',
        display:'absolute',
      }),
    dropdownIndicator :()=>({
      color:'gray',
      padding:'0px 5px'
    }),
    option: (provided, state) => ({
      ...provided,
      width:'inherit',
      borderBottom: '1px ',
      color: state.isSelected ? '#0ab39c' : 'white',
      backgroundColor:'#212529',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: 'flex',
      outline:'none',
      border:'1px solid #d3d3d3',
      borderRadius:'5px',
      backgroundColor:'#212529',
      color:'#111111',
      boxShadow:'none'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
        
      return { ...provided, opacity, transition,color:"white" };
    }
  }
  
  
  // Function EDITMODAL
const ExitModalEdit  = () => {
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('flex')
    editModal.classList.add('hidden')
}

//Modifier

const [catIdEdit,setCatIdEdit] = useState()
const handlerCatEdit = async(e) =>{
  setCatIdEdit(await e.value)
}

const [coopIdEdit,setCoopIdEdit] = useState()
const handlerCoopEdit = async (e) =>{
  setCoopIdEdit(await e.value)
}

const[imageDb,setImageDb] =useState(null); //For image stored in database 
const [editInput,setEdit]=useState({
    name:'',
    price:'',
    description:'',
    qte:''
});
const handlerEditInput =(e) =>{
    e.persist();
    setEdit({...editInput,[e.target.name]:e.target.value});
}

const [id,setId]=useState([]);
const ModalEdit  = (product) => {
    setImageName(product.image)
    setImageDb(product.image)
    setCatIdEdit(product.category)
    setCoopIdEdit(product.cooperative)
    setEdit({...editInput,name:product.nom,price:product.prix,description:product.description,qte:product.qte})
    setId(product.id)
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('hidden')
    editModal.classList.add('flex')
}
const Edit = () =>{

    swal.fire({
        title: `Voulez vous vraiment Modifier`,
        text: `le produit ${id}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui , Modifier le!'
    }).then( async (result) => {
        if (result.isConfirmed) {
            document.querySelector('.btn-edit').classList.remove('hidden')
            document.querySelector('.btn-edit').classList.add('inline')

                    var img = imageDb;
                    if(image != null){
                        const body = new FormData();
                        body.append('Upload',image)
                        const con = {
                            folder:'products',
                            image:imageDb
                        }
                        const response = await fetch(`https://images.codata-admin.com/api-update-file-terroir.php?folder=${con.folder}&image=${con.image}`,{
                            method: "POST",
                            body
                        }).then(r=>r.json());
                        console.log("🚀 ~ file: Products.jsx ~ line 200 ~ Edit ~ response", response)
                        img=response.image
                    }
                    const data = {
                        name:editInput.name,
                        price:editInput.price,
                        qte:editInput.qte,
                        description:editInput.description,
                        catId:catIdEdit,
                        coopId:coopIdEdit,
                        image:img
                    }
                    axios.put(`http://127.0.0.1:5000/product/${id}`,data,{
                    headers:{'x-access-token':getCookie('token')}
                        }).then(res => {
                            if(res.data.status === 200){
                                ExitModalEdit()
                                document.querySelector('.btn-edit').classList.add('hidden')
                                document.querySelector('.btn-edit').classList.remove('inline')
                                swal.fire('Modified!',res.data.message,'success')
                                router.push('')
                            }
                        })
            
        }
})
}  


// Function ADDMODAL
const ExitModalAdd = () => {
    const addModal = document.querySelector('.addModal')
    addModal.classList.remove('flex')
    addModal.classList.add('hidden')
}
const ModalAdd = () => {
    const addModal = document.querySelector('.addModal')
    addModal.classList.remove('hidden')
    addModal.classList.add('flex')
}

const Delete = (product) =>{
    swal.fire({
        title: `Voulez vous vraiment supprimer ${product.nom}`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        axios.delete(`http://127.0.0.1:5000/product/${product.id}`,{
            headers:{'x-access-token':getCookie('token')}
        }).then(res => {
            const data = {
                path:'terroir/products',
                image:product.image
            }
            if(res.data.status === 200){
            axios.post("https://images.codata-admin.com/api-delete-file-terroir.php",data)
                swal.fire('Deleted!',res.data.message,'success')
                router.push('')
            }
        })
        
        }
})
}
const [name,setName] = useState(null)

useEffect(() =>{
 setName(localStorage.getItem('name'))
},[])

const AddProduct=async ()=>{

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+"-"+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var fullname=date+"-"+image.name
    const data ={
        name:addInput.name,
        price:Number(addInput.price),
        description:addInput.description,
        qte:Number(addInput.qte),
        catId:catId,
        coopId:coopId,
        image:fullname
    }
    axios.post('http://127.0.0.1:5000/product',data,{
        headers:{'x-access-token':getCookie('token')}
    }).then(async res => {
                      
        if(res.data.status === 200){
            const body = new FormData();
            body.append("ProductUpload",image)
            const response = await fetch(`https://images.codata-admin.com/api-file-upload-terroir.php?name=${fullname}`, {
            method: "POST",
            body
            }).then(r=>r.json());
            ExitModalAdd()
            swal.fire("Success",res.data.message,"success");
            router.push('')
        }
        else
        {
            swal.fire("Echec !!",res.data.message,"warning");
        }
    })



    
    
    
}

  return (
    <>
        <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
                <h1 className="uppercase font-bold">Produits</h1>
                <div className="flex items-center space-x-1 text-xs">
                    <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>Produits</span>
                </div>
            </div>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
                <div className="flex flex-col text-center lg:text-left">
                    <h3 className="text-md">Bonne journée, {name}</h3>
                    <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
                    <div className="flex items-center text-xs bg-gray-700/40 rounded">
                        <span className='px-3'>{date}</span>
                        <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                    </div>
                    <div onClick={ModalAdd} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                        <i className='bx bx-plus-circle'></i>
                        <span>Ajouter un produit</span>
                    </div>
                </div>
            </div>
            
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                <h1 className="text-xl">Liste des produits</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input name="search" value={search} onChange={handleSearch} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher produit" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nom
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Categorie
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Quantite
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Prix
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            (prods.lenght != 0)
                            ?
                            
                            prods.filter((val)=>{
                                if(search == ""){
                                    return val;
                                }
                                else if(val.nom.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                            }).map((product)=>{
                                var catName =""
                                categories.forEach((cat)=>{
                                    if(cat.id == product.category){
                                        catName = cat.name
                                    }
                                })
                                var coopName =""
                                cooperatives.forEach((coop)=>{
                                    if(coop.id == product.cooperative){
                                        coopName = coop.name
                                    }
                                })
                                return(
                                    <tr key={product.id} className=" border-b  border-gray-800  hover:bg-dashBlack">
                                        <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                            <img className="w-12 h-12 rounded-lg"  src={`https://images.codata-admin.com/terroir/products/${product.image}`} />
                                            <div className="pl-3">
                                                <div className="text-md">{product.nom}</div>
                                                <div className="font-normal text-gray-500">{coopName}</div>
                                            </div>  
                                        </th>
                                        <td className="py-4 px-6">
                                            {catName}
                                        </td>
                                        <td className="py-4 px-6">
                                            {product.qte}
                                        </td>
                                        <td className="py-4 px-6">
                                            {product.prix} MAD
                                        </td>
                                        <td className="py-4 px-6 text-red-500 space-x-10">
                                                <a onClick={()=>ModalEdit(product)} href="#" className="font-medium  text-custGreen hover:underline">Modifier</a>
                                                <a onClick={()=>Delete(product)}  className="font-medium  text-red-500  hover:underline">Supprimer</a>
                                        </td>
                                    </tr>
                                )
                                
                            })
                            :
                            <tr className="bg-custGreen/20 text-custGreen">
                                <td colspan="4" className="py-4 px-6 w-full text-center">Aucun Produits trouver</td>
                            </tr>
                        }
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
         {/* EditModal */}
         <div className="fixed top-0 hidden fade editModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitModalEdit} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 px-5 py-5 rounded z-100 space-y-5 w-screen md:w-[60%]">
                <i onClick={ExitModalEdit} className='bx bx-x absolute text-2xl top-5 right-5'></i>
                <h1 className="text-gray-300">Ajouter un produit</h1>
                <form className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col space-y-2">
                        <span>Nom</span>
                        <input name="name" value={editInput.name} onChange={handlerEditInput} type="text"  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>prix</span>
                        <input name="price" value={editInput.price} onChange={handlerEditInput} type="text" placeholder="Prix" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Cooperative</span>
                        <Select
                        name="coopIdEdit"
                        value={optionsCoop.filter(function(option) {
                            return option.value === coopIdEdit;
                          })}
                            options={optionsCoop}
                            styles={customStyles}
                            onChange={handlerCoopEdit}
                             />
                    </div>
                    <div className="flex flex-col space-y-2 col-span-2">
                        <span>Categorie</span>
                        <Select
                        name="catIdEdit"
                             value={optionsCat.filter(function(option) {
                                return option.value === catIdEdit;
                              })}
                            options={optionsCat}
                            styles={customStyles}
                            onChange={handlerCatEdit}
                             />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Qunatité</span>
                        <input name="qte" value={editInput.qte} defaultValue={1} onBlur={KeyUpEdit} min="1" onChange={handlerEditInput} type="number"  placeholder="Quantite" className="bg-dashBlack qte outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2 h-full">
                        <span>Description</span>
                        <textarea name="description" value={editInput.description} onChange={handlerEditInput} placeholder="Desciprtion" className="h-full bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col col-span-2 space-y-2 h-full">
                        <span>Image</span>
                        <div class="flex justify-center items-center w-full relative">
                            
                            <label for="dropzone-fil" class="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">

                                <div class="flex flex-col justify-center items-center pt-5 pb-6">

                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>

                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>

                                    <span className="pt-5 ">{imageName}</span>

                                </div>

                                <input name="image" onChange={addHandlerImage}  id="dropzone-fil" type="file" class="opacity-0 absolute h-full w-full fileInput" />

                            </label>

                        </div>
                    </div>
                    <button type="button" onClick={Edit}  className="flex items-center justify-center col-span-3  outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200">
                        <div role="status">
                            <svg class="hidden btn-edit mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-custGreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>
        {/* AddModal */}
        <div className="fixed top-0 hidden fade addModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitModalAdd} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 px-5 py-5 rounded z-100 space-y-5 w-screen md:w-[60%]">
                <i onClick={ExitModalAdd} className='bx bx-x absolute text-2xl top-5 right-5'></i>
                <h1 className="text-gray-300">Ajouter un produit</h1>
                <form className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col space-y-2">
                        <span>Nom</span>
                        <input name="name" value={addInput.name} onChange={handlerAddInput} type="text"  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>prix</span>
                        <input name="price" value={addInput.price} onChange={handlerAddInput} type="text" placeholder="Prix" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Cooperative</span>
                        <Select
                            name="coopId"
                            options={optionsCoop}
                            styles={customStyles}
                            onChange={handlerCoop}
                             />
                    </div>
                    <div className="flex flex-col space-y-2 col-span-2">
                        <span>Categorie</span>
                        <Select
                            name="catId"
                            options={optionsCat}
                            styles={customStyles}
                            onChange={handlerCat}
                             />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Qunatité</span>
                        <input name="qte" value={addInput.qte} defaultValue={1} onBlur={KeyUp} min="1" onChange={handlerAddInput} type="number"  placeholder="Quantite" className="bg-dashBlack qte outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2 h-full">
                        <span>Description</span>
                        <textarea name="description" value={addInput.description} onChange={handlerAddInput} placeholder="Desciprtion" className="h-full bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col col-span-2 space-y-2 h-full">
                        <span>Image</span>
                        <div class="flex justify-center items-center w-full relative">
                            
                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">

                                <div class="flex flex-col justify-center items-center pt-5 pb-6">

                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>

                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>

                                    <span className="pt-5 ">{imageName}</span>

                                </div>

                                <input name="image" onChange={addHandlerImage}  id="dropzone-file" type="file" class="opacity-0 absolute h-full w-full fileInput" />

                            </label>

                        </div>
                    </div>
                    <input onClick={AddProduct} type="button" value="Enregistrer" className="col-span-3 outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200"/>
                </form>
            </div>
        </div>
    </>
  )
}
