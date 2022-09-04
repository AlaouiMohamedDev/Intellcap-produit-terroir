import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import swal from 'sweetalert2'
import Select from 'react-select'
import axios from 'axios';

import { setCookie,getCookie } from 'cookies-next';
import {selectAllCategories} from '../../app/categories/categoriesSlice'
import { useSelector } from 'react-redux';

export default function Categories() {
//Setting date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", options).replace(/,/g,' ');
  const router = useRouter();

  const [search, setSearch] = useState([]);
  

  //const {categories} =useContext(DataContext)
    const categories = useSelector(selectAllCategories)
    console.log("🚀 ~ file: Categories.jsx ~ line 23 ~ Categories ~ categories", categories)
    
  useEffect(()=>{

  },[])

  // Function EDITMODAL
const ExitModalEdit  = () => {
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('flex')
    editModal.classList.add('hidden')
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


const [categoryInput,setCategory] = useState(null);
const addHandlerInput =(e) =>{
    e.persist();
    setCategory(e.target.value);
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

const AddCategory =async ()=>{

    const body = new FormData();
    body.append("CategoryUpload",image)
    const response = await fetch("https://images.codata-admin.com/api-file-upload-terroir.php", {
      method: "POST",
      body
    }).then(r=>r.json());
    console.log("🚀 ~ file: Categories.jsx ~ line 81 ~ AddCategory ~ response", response)
    
    ExitModalAdd() 
    const data ={
        name:categoryInput,
        image:response.image
    }
    axios.post('http://127.0.0.1:5000/category',data).then(res => {
                      
        if(res.data.status === 200){
            swal.fire("Success",res.data.message,"success");
            router.push('')
        }
        else
        {
            swal.fire("Echec !!",res.data.message,"warning");
        }
    })

}

const Delete = (cat) =>{
        swal.fire({
            title: `Voulez vous vraiment supprimer ${cat.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:5000/category/${cat.id}`,{
                headers:{'x-access-token':getCookie('token')}
            }).then(res => {
                const data = {
                    path:'terroir/categories',
                    image:cat.image
                }
                console.log("🚀 ~ file: Categories.jsx ~ line 180 ~ categories.filter ~ res", res)
                if(res.data.status === 200){
                axios.post("https://images.codata-admin.com/api-delete-file-terroir.php",data)
                    swal.fire('Deleted!',res.data.message,'success')
                    router.push('')
                }
            })
            
            }
    })
}

const[imageDb,setImageDb] =useState(null); //For image stored in database
const [editInput,setEdit]=useState([]);
const editHandler =(e) =>{
    e.persist();
    setEdit(e.target.value);
}
const [id,setId]=useState([]);
const ModalEdit  = (cat) => {
    setImageDb(cat.image)
    setEdit(cat.name)
    setId(cat.id)
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('hidden')
    editModal.classList.add('flex')
}

const HasCat =(id,name)=>{
    for(let i=0; i<categories.length;i++){
        if(categories[i].id!=id)
       {
           if(categories[i].name.trim().toUpperCase()==name.trim().toUpperCase()){
               return true;
           }
       }
    }
    return false;
}
const [name,setName] = useState(null)

useEffect(() =>{
 setName(localStorage.getItem('name'))
},[])

const Edit = () =>{

    swal.fire({
        title: `Voulez vous vraiment Modifier`,
        text: `la categorie ${id}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui , Modifier le!'
    }).then( async (result) => {
        if (result.isConfirmed) {
            document.querySelector('.btn-edit').classList.remove('hidden')
            document.querySelector('.btn-edit').classList.add('inline')
            if(HasCat(id,editInput)){
                swal.fire('Attention',"Gategory existe deja",'warning')
                document.querySelector('.btn-edit').classList.add('hidden')
                document.querySelector('.btn-edit').classList.remove('inline')
            }
            else{

                    var img = imageDb;
                    console.log("🚀 ~ file: Categories.jsx ~ line 150 ~ Edit ~ img", img)
                    if(image != null){
                        const body = new FormData();
                        body.append('Upload',image)
                        const con = {
                            folder:'categories',
                            image:imageDb
                        }
                        const response = await fetch(`https://images.codata-admin.com/api-update-file-terroir.php?folder=${con.folder}&image=${con.image}`,{
                            method: "POST",
                            body
                        }).then(r=>r.json());
                        img=response.image
                    }
                    const data = {
                        name:editInput,
                        image:img
                    }
                    axios.put(`http://127.0.0.1:5000/category/${id}`,data,{
                    headers:{'x-access-token':getCookie('token')}
                        }).then(res => {
                            if(res.data.status === 200){
                                document.querySelector('.btn-edit').classList.add('hidden')
                                document.querySelector('.btn-edit').classList.remove('inline')
                                swal.fire('Modified!',res.data.message,'success')
                                router.push('')
                            }
                        })
            }
        }
})
}

  return (
    <>
        <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
                <h1 className="uppercase font-bold">Categories</h1>
                <div className="flex items-center space-x-1 text-xs">
                    <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>Categories</span>
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
                        <span>Ajouter une categorie</span>
                    </div>
                </div>
            </div>
            
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                <h1 className="text-xl">Liste des Categories</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input value={search} onChange={(e)=>{
                            e.persist();
                            setSearch(e.target.value)
                            }} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher categorie" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nom
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.filter((val)=>{
                                if(search == ""){
                                    return val;
                                }
                                else if(val.name.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                            }).map((category)=>{
                                return (
                                    <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                                        <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                            <img className="w-12 h-12 rounded-lg bg-dashBlack flex items-center p-1" src={`https://images.codata-admin.com/terroir/categories/${category.image}`} />
                                            <div className="pl-3">
                                                <div className="text-md">{category.name}</div>
                                            </div>  
                                        </th>
                                        <td className="py-4 px-6 text-red-500 space-x-10">
                                                <a onClick={()=>ModalEdit(category)} href="#" className="font-medium  text-custGreen hover:underline">Modifier</a>
                                                <a onClick={()=>Delete(category)} className="font-medium  text-red-500  hover:underline">Supprimer</a>
                                        </td>
                                    </tr>
                                )
                            })
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
                <h1 className="text-gray-300">Modifier category !</h1>
                <form className="grid grid-cols-2 gap-5">
                    <div className="col-span-2 flex flex-col space-y-2">
                        <span>Nom</span>
                        <input type="text" name="editInput" value={editInput} onChange={editHandler}  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="col-span-2 flex flex-col space-y-2 h-full">
                        <span>Image</span>
                        <div class="flex justify-center items-center w-full relative">
                            
                            <label for="dropzone-fil" class="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">

                                <div class="flex flex-col justify-center items-center pt-5 pb-6">

                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>

                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>

                                    <span className="pt-5 ">{imageName}</span>
                                </div>

                                <input name="image" onChange={addHandlerImage}  id="dropzone-fil" type="file" class="bg-red-500 opacity-0 absolute h-full w-full fileInput" />


                            </label>

                        </div>
                    </div>
                    <button type="button" onClick={Edit}  className="flex items-center justify-center col-span-2  outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200">
                        <div role="status btn-edit">
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
                <h1 className="text-gray-300">Ajouter une categorie</h1>
                <form className="grid grid-cols-2 gap-5">
                    <div className="col-span-2 flex flex-col space-y-2">
                        <span>Nom</span>
                        <input name="name" value={categoryInput} onChange={addHandlerInput} type="text"   placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="col-span-2 flex flex-col space-y-2 h-full">
                        <span>Image</span>
                        <div class="flex justify-center items-center w-full relative">
                            <label  for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">
                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    <span className="pt-5 ">{imageName}</span>
                                </div>
                                <input name="image" onChange={addHandlerImage}  id="dropzone-file" type="file" class="bg-red-500 opacity-0 absolute h-full w-full fileInput" />
                            </label>
                        </div>
                    </div>
                    <input onClick={AddCategory} type="button" value="Enregistrer" className="col-span-2 outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200"/>
                </form>
            </div>
        </div>
    </>
  )
}
