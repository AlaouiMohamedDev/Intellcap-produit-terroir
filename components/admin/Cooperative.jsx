import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import swal from 'sweetalert2'
import axios from 'axios';
import Pagination from '../Pagination'
import { toast } from "react-toastify";
import { setCookie,getCookie } from 'cookies-next';
import { selectAllCooperatives } from '../../app/cooperatives/cooperativesSlice';
import { useSelector } from 'react-redux';

export default function Cooperative({cooperatives,products}) {
//Setting date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", options).replace(/,/g,' ');
  const router = useRouter();
// tout les Cooperatives
//const {cooperatives}=useContext(DataContext)
//  const cooperatives= useSelector(selectAllCooperatives)


//const [coops,setCoops]  = useState(cooperatives)



// Function EDITMODAL
const ModalP = () => {
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
const ModalA = () => {
    const addModal = document.querySelector('.addModal')
    addModal.classList.remove('hidden')
    addModal.classList.add('flex')
}
const [addInputs , setAddInputs]= useState({
    name:'',
    email:'',
    adress:'',
    tel:'',
    description:''
})
const addHandlInputs=(e)=> {
    e.persist()
    setAddInputs({...addInputs,[e.target.name]:e.target.value})
}

const [search,setSearch] = useState([])
const [search1,setSearch1] = useState([])
//image
const [imageName, setImageName] = useState(null);
const [image, setImage] = useState(null); // For the input image



const addHandlerImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setImageName(i.name);
    }
};


const addCooperative=async ()=>{
    var test=false
    coops.forEach(coop => {
         if(coop.email == addInputs.email){
            	test=true
        }
    })
    
    if(test)
    {
        toast.error("Email cooperative exist deja", { position: "bottom-left" });
        ExitModalAdd()
    }
    else{
        const body = new FormData();
        // console.log("file", image)
        body.append("file", image);  
        body.append("upload_preset","cooperatives")
        const response = await fetch('https://api.cloudinary.com/v1_1/realmoro/image/upload', {
          method: "POST",
          body:body
        }).then(r=>r.json());
        const data ={
            name:addInputs.name,
            email:addInputs.email,
            adress:addInputs.adress,
            tel:addInputs.tel,
            description:addInputs.description,
            image:response.secure_url
        }
        axios.post('http://127.0.0.1:5000/cooperative',data).then(async res => {
                          
            if(res.data.status === 200){
                ExitModalAdd()
                toast.success(res.data.message,{ position: "bottom-left" })
                router.push('')
            }
            else
            {
                toast.error(res.data.message,{ position: "bottom-left" })
            }
        })
    }    
}


const Delete = (coop) =>{
    swal.fire({
        title: `Voulez vous vraiment supprimer ? ${coop.name}`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        axios.delete(`http://127.0.0.1:5000/cooperative/${coop.id}`,{
            headers:{'x-access-token':getCookie('token')}
        }).then(res => {
            const data = {
                path:'terroir/cooperatives',
                image:coop.image
            }
            if(res.data.status === 200){
                swal.fire('Deleted!',res.data.message,'success')
                router.push('')
            }
        })
        
        }
})
}
//Modifier
const[imageDb,setImageDb] =useState(null); //For image stored in database 
const [editInput,setEdit]=useState({
    name:'',
    email:'',
    adress:'',
    tel:'',
    description:''
});
const editHandler =(e) =>{
    e.persist()
    setEdit({...editInput,[e.target.name]:e.target.value})
}
const [id,setId]=useState([]);
const ModalEdit  = (coop) => {
    setImageName(coop.image)
    setImageDb(coop.image)
    setEdit({...editInput,name:coop.name,email:coop.email,adress:coop.adress,tel:coop.tel,description:coop.description}) 
    setId(coop.id)
    const editModal = document.querySelector('.editModal')
    editModal.classList.remove('hidden')
    editModal.classList.add('flex')
}  
const HasCoop =(id,email)=>{
    for(let i=0; i<cooperatives.length;i++){
        if(cooperatives[i].id!=id)
       {
           if(cooperatives[i].email.trim().toUpperCase()==email.trim().toUpperCase()){
               return true;
           }
       }
    }
    return false;
}

const Edit = () =>{

    swal.fire({
        title: `Voulez vous vraiment Modifier`,
        text: `la Coppérative ${id}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui , Modifier le!'
    }).then( async (result) => {
        if (result.isConfirmed) {
            document.querySelector('.btn-edit').classList.remove('hidden')
            document.querySelector('.btn-edit').classList.add('inline')
            if(HasCoop(id,editInput.email)){
                swal.fire('Attention',"Cooperative existe deja",'warning')
                document.querySelector('.btn-edit').classList.add('hidden')
                document.querySelector('.btn-edit').classList.remove('inline')
            }
            else{

                    var img = imageDb;
                    if(image != null){
                        const body = new FormData();
                        // console.log("file", image)
                        body.append("file", image);  
                        body.append("upload_preset","cooperatives")
                        const response = await fetch('https://api.cloudinary.com/v1_1/realmoro/image/upload', {
                          method: "POST",
                          body:body
                        }).then(r=>r.json());
                        img=response.secure_url
                    }
                    const data = {
                        name:editInput.name,
                        email:editInput.email,
                        tel:editInput.tel,
                        adress:editInput.adress,
                        description:editInput.description,
                        image:img
                    }
                    axios.put(`http://127.0.0.1:5000/cooperative/${id}`,data,{
                    headers:{'x-access-token':getCookie('token')}
                        }).then(res => {
                            if(res.data.status === 200){
                                document.querySelector('.btn-edit').classList.add('hidden')
                                document.querySelector('.btn-edit').classList.remove('inline')
                                swal.fire('Modified!',res.data.message,'success')
                                ModalP()
                                router.push('')
                            }
                        })
            }
        }
})
}     

const [coops,setCoops] = useState([])
const [deletedCoops,setDeletedCoops] = useState([])

useEffect(() => {
    setCoops({})
    setDeletedCoops({})
},[])

const c= useSelector(selectAllCooperatives)

useEffect(() => {
    setCoops(c.filter(val=>{if(val.deletedAt == null)return val}))
    setDeletedCoops(c.filter(val=>{if(val.deletedAt != null)return val}))
},[c])

const [name,setName] = useState(null)

useEffect(() =>{
    setName(getCookie('name'))
},[])

const [currentPage,setCurrentPage] = useState(1)
const [elementPerPage,seEelementPerPage] = useState(3)

const indexOfLastElement = currentPage * elementPerPage
const indexOfFirstElement = indexOfLastElement - elementPerPage
const currentElements = coops.slice(indexOfFirstElement,indexOfLastElement)

const paginate = pageNumber => setCurrentPage(pageNumber)


const [currentPage1,setCurrentPage1] = useState(1)
const [elementPerPage1,seEelementPerPage1] = useState(3)

const indexOfLastElement1 = currentPage1 * elementPerPage1
const indexOfFirstElement1 = indexOfLastElement1 - elementPerPage1
const currentElements1 = deletedCoops.slice(indexOfFirstElement1,indexOfLastElement1)

const paginate1 = pageNumber1 => setCurrentPage1(pageNumber1)


const restore = (coop) => {
    console.log("🚀 ~ file: Cooperative.jsx ~ line 279 ~ restore ~ coop", coop)
    axios.put(`http://127.0.0.1:5000/restoreCooperative/${coop.id}`).then(res => {
        if(res.data.status === 200){
            toast.success(res.data.message,{ position: "bottom-left" })
            router.push('')
        }
    })
}
  return (
    <>
    
        <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
        <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
                <h1 className="uppercase font-bold">Coopératives</h1>
                <div className="flex items-center space-x-1 text-xs">
                    <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                    <i className='bx bx-chevron-right'></i>
                    <span>Coopératives</span>
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
                    <div onClick={ModalA} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                        <i className='bx bx-plus-circle'></i>
                        <span>Ajouter une cooperative</span>
                    </div>
                </div>
            </div>
            
            <div className="overflow-x-auto relative sm:rounded-lg">
                <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                <h1 className="text-xl">Liste des coopératives</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input value={search} onChange={(e)=>{
                            e.persist();
                            setSearch(e.target.value)
                            }} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher cooperative" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400 rounded">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nom
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Téléphone
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nombre des produits
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            (currentElements.length != 0)
                            ?
                            currentElements.filter((val)=>{
                                if(search=="")
                                {
                                    return val
                                }
                                else if(val.name.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                            }).map((coop)=>{
                                    var count=0
                                    products.forEach(product=>{
                                        if(product.cooperative == coop.id)
                                        {
                                            count = count +1
                                        }
                                    })
                                    return(
                                        <tr key={coop.id} className=" border-b  border-gray-800  hover:bg-dashBlack">
                                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                                <img className="w-10 h-10 rounded-full" src={coop.image}/>
                                                <div className="pl-3">
                                                    <div className="text-md">{coop.name}</div>
                                                    <div className="font-normal text-gray-500">{coop.email}</div>
                                                </div>  
                                            </th>
                                            <td className="py-4 px-6">
                                                {coop.tel}
                                            </td>
                                            <td className="py-4 px-6">
                                                {count}
                                            </td>
                                            <td className="py-4 px-6 text-red-500 space-x-10">
                                                <a onClick={()=>ModalEdit(coop)} className="font-medium  text-custGreen hover:underline">Modifier</a>
                                                <a onClick={()=>Delete(coop)}  className="font-medium  text-red-500  hover:underline">Supprimer</a>
                                            </td>
                                        </tr> 
                                    )
                            })
                            :
                            <tr className="bg-custGreen/20 text-custGreen">
                                <td colSpan="4" className="py-4 px-6 w-full text-center">Aucune cooperatives</td>
                            </tr>
                        }
                        
                    </tbody>
                </table>
                {
                    currentElements.length != 0
                    &&
                    <Pagination className="my-10" paginate={paginate} elementPerPage={elementPerPage} totalElement={cooperatives.length}/>
                }
            </div>

            <div className="overflow-x-auto relative sm:rounded-lg py-5">
                <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                <h1 className="text-xl">Liste des coopératives Supprimer</h1>
                    <div className="relative ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <i className='w-5 y-5 bx bx-search'></i>
                        </div>
                        <input value={search1} onChange={(e)=>{
                            e.persist();
                            setSearch1(e.target.value)
                            }} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher cooperative" />
                    </div>
                </div>
                <table className="w-full text-sm text-left  text-gray-400 rounded">
                    <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Nom
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Téléphone
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nombre des produits
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            (currentElements1.length != 0)
                            ?
                            currentElements1.filter((val)=>{
                                if(search1=="")
                                {
                                    return val
                                }
                                else if(val.name.toLowerCase().includes(search1.toLowerCase())){
                                    return val;
                                }
                            }).map((coop)=>{
                                    var count=0
                                    products.forEach(product=>{
                                        if(product.cooperative == coop.id)
                                        {
                                            count = count +1
                                        }
                                    })
                                    return(
                                        <tr key={coop.id} className=" border-b  border-gray-800  hover:bg-dashBlack">
                                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                                <img className="w-10 h-10 rounded-full" src={coop.image}/>
                                                <div className="pl-3">
                                                    <div className="text-md">{coop.name}</div>
                                                    <div className="font-normal text-gray-500">{coop.email}</div>
                                                </div>  
                                            </th>
                                            <td className="py-4 px-6">
                                                {coop.tel}
                                            </td>
                                            <td className="py-4 px-6">
                                                {count}
                                            </td>
                                            <td className="py-4 px-6">
                                                <a onClick={()=>restore(coop)} className="cursor-pointer py-2 px-3 bg-custGreen text-white rounded text-xs">
                                                    Restaurer
                                                </a>
                                            </td>
                                        </tr> 
                                    )
                            })
                            :
                            <tr className="bg-custGreen/20 text-custGreen">
                                <td colSpan="4" className="py-4 px-6 w-full text-center">Aucune cooperatives</td>
                            </tr>
                        }
                        
                    </tbody>
                </table>
                {
                    currentElements1.length != 0
                    &&
                    <Pagination className="my-10" paginate={paginate1} elementPerPage={elementPerPage1} totalElement={deletedCoops.length}/>
                }
            </div>

        </div>
        {/* EditModal */}
        <div className="fixed top-0 hidden fade editModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ModalP} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 px-5 py-5 rounded z-100 space-y-5 w-screen md:w-[60%]">
                <i onClick={ModalP} className='bx bx-x absolute text-2xl top-5 right-5'></i>
                <h1 className="text-gray-300">Modifier coopérative coopName !</h1>
                <form className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-2">
                        <span>Nom</span>
                        <input type="text" name='name' value={editInput.name} onChange={editHandler}  placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>email</span>
                        <input type="email" name='email' value={editInput.email} onChange={editHandler}   placeholder="coope@email.com" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Téléphone</span>
                        <input type="text" name='tel' value={editInput.tel} onChange={editHandler}   placeholder="0621......" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Adresse</span>
                        <input type="text" name='adress' value={editInput.adress} onChange={editHandler}   placeholder="Ex:Marrakech" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="relative flex flex-col space-y-2" >
                        <span>Déscription</span>
                        <textarea name='description' value={editInput.description} onChange={editHandler} cols="30" rows="12" className='bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md h-full'></textarea>                    </div>
                    <div className="relative flex flex-col space-y-2 w-full">
                        <span>Image</span>
                        <label htmlFor="dropzone-fil" className="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">

                            <div className="flex flex-col justify-center items-center pt-5 pb-6">

                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                <span className="pt-5 text-sm break-all">{imageName}</span>
                            </div>

                            <input onChange={addHandlerImage} id="dropzone-fil" type="file" className="absolute h-full w-full opacity-0" />

                        </label>

                    </div>
                    <button type="button" onClick={Edit}  className="flex items-center justify-center col-span-2  outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200">
                        <div role="status">
                            <svg className="hidden btn-edit mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-custGreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
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
                <h1 className="text-gray-300">Ajouter coopérative </h1>
                <form className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-2">
                        <span>Nom</span>
                        <input name='name' value={addInputs.name} onChange={addHandlInputs} type="text"   placeholder="nom" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>email</span>
                        <input name='email' value={addInputs.email} onChange={addHandlInputs} type="email"   placeholder="nom@email.com" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Téléphone</span>
                        <input name='tel' value={addInputs.tel} onChange={addHandlInputs} type="text"   placeholder="061..." className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Adresse</span>
                        <input name='adress' value={addInputs.adress} onChange={addHandlInputs} type="text"   placeholder="Marrakech" className="bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    </div>
                    <div className="relative flex flex-col space-y-2" >
                        <span>Déscription</span>
                        <textarea name='description' value={addInputs.description} onChange={addHandlInputs} cols="30" rows="12" className='bg-dashBlack outline-none border border-gray-700 text-sm py-2 px-3 rounded-md h-full'></textarea>                    </div>
                    <div className="relative flex flex-col space-y-2 w-full">
                        <span>Image</span>
                        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-dashBlack hover:bg-gray-700 rounded-lg border-2 border-gray-700 hover:border-dashBlack border-dashed cursor-pointer">

                            <div className="flex flex-col justify-center items-center pt-5 pb-6">

                                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>

                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                <span>{imageName}</span>
                            </div>

                            <input onChange={addHandlerImage} id="dropzone-file" type="file" className="absolute h-full w-full opacity-0" />

                        </label>

                    </div>
                    <input onClick={addCooperative} type="button" value="Ajouter" className="col-span-2 outline-none border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen hover:text-gray-200 duration-200"/>
                </form>
            </div>
        </div>
       
    </>
  )
}
