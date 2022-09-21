import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../app/users/usersSlice'
import { getCookie } from 'cookies-next';
import axios from 'axios';
import { toast } from 'react-toastify';
import Pagination from '../Pagination';




export default function Users({commandes}) {

    //Setting date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const d = new Date();
var date =d.toLocaleDateString("en-US", options).replace(/,/g,' ');
const router = useRouter();

//var {users} = useContext(DataContext)
 const u = useSelector(selectAllUsers)
 const [users,setUsers] = useState([])



const [name,setName] = useState(null)

useEffect(() =>{
 setName(getCookie('name'))
 setUsers({})
},[])

const [admins,setAdmins] = useState([])
const [deleted,setDeleted] = useState([])
useEffect(() =>{
    setUsers(u.filter(val=>{
        if(!val.admin && val.deletedAt == null)
        {
            return val
        }
    }))
    setAdmins(u.filter(val=>{
        if(val.admin && val.deletedAt == null)
        {
            return val
        }
    }))
    setDeleted(u.filter(val=>{
        if(val.deletedAt != null)
        {
            return val
        }
    }))
},[u])

//Users
const [currentPage,setCurrentPage] = useState(1)
const [elementPerPage,seEelementPerPage] = useState(3)

const indexOfLastElement = currentPage * elementPerPage
const indexOfFirstElement = indexOfLastElement - elementPerPage
const currentElements = users.slice(indexOfFirstElement,indexOfLastElement)

const paginate = pageNumber => setCurrentPage(pageNumber)
   
//Admins

const [currentPage1,setCurrentPage1] = useState(1)
const [elementPerPage1,seEelementPerPage1] = useState(3)

const indexOfLastElement1 = currentPage1 * elementPerPage1
const indexOfFirstElement1 = indexOfLastElement1 - elementPerPage1
const currentElements1 = admins.slice(indexOfFirstElement1,indexOfLastElement1)

const paginate1 = pageNumber1 => setCurrentPage1(pageNumber1)

//Deleted users
const [currentPage2,setCurrentPage2] = useState(1)
const [elementPerPage2,seEelementPerPage2] = useState(3)

const indexOfLastElement2= currentPage2 * elementPerPage2
const indexOfFirstElement2 = indexOfLastElement2 - elementPerPage2
const currentElements2 = deleted.slice(indexOfFirstElement2,indexOfLastElement2)

const paginate2 = pageNumber2 => setCurrentPage2(pageNumber2)

const [search,setSearch] = useState([])

const handler =(e)=>{
    e.persist()
    setSearch(e.target.value)
}

const [search1,setSearch1] = useState([])

const handler1 =(e)=>{
    e.persist()
    setSearch1(e.target.value)
}

const [searchDeleted,setSearchDeleted] = useState([])

const handlerDeleted =(e)=>{
    e.persist()
    setSearchDeleted(e.target.value)
}


const [password,setPassword] = useState([])

const handlerPass =(e) =>{
    e.persist()
    setPassword(e.target.value)
}

const [password1,setPassword1] = useState([])

const handlerPass1 =(e) =>{
    e.persist()
    setPassword1(e.target.value)
}
const ExitConfirModal = () =>{
    const Modal= document.querySelector('.ConfirModal')
    Modal.classList.remove('flex')
    Modal.classList.add('hidden')
 }

const [userId,setUserId] = useState([])
const ConfirModal = (id) =>{
   const Modal= document.querySelector('.ConfirModal')
   Modal.classList.remove('hidden')
   Modal.classList.add('flex')
   setUserId(id)
}

const ExitConfirModal1 = () =>{
    const Modal= document.querySelector('.ConfirModal1')
    Modal.classList.remove('flex')
    Modal.classList.add('hidden')
 }

 const Exitpass = () =>{
    const Modal= document.querySelector('.password')
    Modal.classList.remove('flex')
    Modal.classList.add('hidden')
 }

 const [id_user,setId_user] =useState(0)
 const pass = (id) =>{
    setId_user(id)
    const Modal= document.querySelector('.password')
    Modal.classList.remove('hidden')
    Modal.classList.add('flex')
 }

 const [passwordModal,setPasswordModal] = useState()

 const handlerPassModal = (e) => {
    e.persist()
    setPasswordModal(e.target.value)
 }

 const setAdmin = () => {
    const data = {
        idAdmin :getCookie('id'),
        password : passwordModal
    }
    axios.put(`http://127.0.0.1:5000/promoteuser/${id_user}`,data, {headers:{'x-access-token':getCookie('token')}}).then(res=>{
        if(res.data.status == 200)
        {
            Exitpass()
            toast.success(res.data.message,{ position: "bottom-left" })
            router.push('')
        }
        else
        {
            Exitpass()
            toast.error(res.data.message,{ position: "bottom-left" })
        }
    })
 }


const ConfirModal1 = (id) =>{
   const Modal= document.querySelector('.ConfirModal1')
   Modal.classList.remove('hidden')
   Modal.classList.add('flex')
   setUserId(id)
}

const ExitUsersModal = () =>{
    const Modal= document.querySelector('.UsersModal')
    Modal.classList.remove('flex')
    Modal.classList.add('hidden')
 }

const UsersModal = () =>{
    const Modal= document.querySelector('.UsersModal')
    Modal.classList.remove('hidden')
    Modal.classList.add('flex')
}
const Delete =()=>{
    if(password =="" )
    {
        toast.error("veuilliez remplir le champs mot de passe",{ position: "bottom-left"})
        return false;
    }
    swal.fire({
        title: `Voulez vous vraiment supprimer ${userId}`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const data ={
                idAdmin:getCookie('id'),
                idUser:userId,
                password:password
            }
            console.log("🚀 ~ file: Users.jsx ~ line 67 ~ Delete ~ data", data)
            axios.put('http://127.0.0.1:5000/user',data,{
                headers:{'x-access-token':getCookie('token')}
            }).then(res => {
                if(res.data.status === 200){
                toast.success(res.data.message,{ position: "bottom-left" })
                ExitConfirModal()
                router.push('')
                }
                else{
                    swal.fire('Not Deleted!',res.data.message,'warning')
                }
            })
        }
    })
}

const Confirm=() =>{
    swal.fire({
        title: `Voulez vous vraiment restorer ${userId}`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Restor it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const data ={
                idAdmin:getCookie('id'),
                idUser:userId,
                password:password1
            }
            axios.put('http://127.0.0.1:5000/restorUser',data,{
                headers:{'x-access-token':getCookie('token')}
            }).then(res => {
                if(res.data.status === 200){
                swal.fire('Restaurée!',res.data.message,'success')
                ExitConfirModal1()
                ExitUsersModal()
                router.push('')
                }
                else{
                    swal.fire('Not Restored!',res.data.message,'warning')
                }
            })
        }
    })
}
const [test1,setTest] = useState(true)
  return (
    <>
    <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
      <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
            <h1 className="uppercase font-bold">Utilisateurs</h1>
            <div className="flex items-center space-x-1 text-xs">
                <span onClick = {() => router.push("/admin/dashboard")} className="text-white cursor-pointer">Dashboard</span>
                <i className='bx bx-chevron-right'></i>
                <span>Utilisateurs</span>
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
                <div onClick={UsersModal} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                    <i className='bx bx-user-x text-md'></i>
                    <span>Utilisateur Archivée</span>
                </div>
            </div>
        </div>
        
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
              <h1 className="text-xl">Liste d'utilisateurs</h1>
                <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input name="search" value={search} onChange={handler} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                </div>
            </div>
            <table className="w-full text-sm text-left  text-gray-400">
                <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nom
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Commande
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        (currentElements.length!=0)
                        ?
                        currentElements.filter((val)=>{
                            if(search == "")
                            {
                                return val;
                            }
                            else if(val.name.toLowerCase().includes(search.toLowerCase()))
                            {
                                if(val.lenght == 0)
                                    setTest(false)
                                return val;
                            }
                        }).map((user)=>{
                                var count =0
                                commandes.forEach(c=>{
                                    if(c.id_user == user.id)
                                    {
                                        count++;
                                    }
                                })  
                                return (
                                        <tr key={user.id} className=" border-b  border-gray-800  hover:bg-dashBlack">
                                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                                <img className="w-10 h-10 rounded-full" src="/user.jpg" />
                                                <div className="pl-3">
                                                    <div className="text-md">{user.name}</div>
                                                    <div className="font-normal text-gray-500">{user.email}</div>
                                                </div>  
                                            </th>
                                            <td className="py-4 px-6">
                                                {count} commandes
                                            </td>
                                            <td className="py-4 px-6">
                                                    {
                                                        (user.isLogedIn)
                                                        ?
                                                        <div className="flex items-center"><div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>Online</div>
                                                         :
                                                        <div className="flex items-center"><div className="h-2.5 w-2.5 rounded-full bg-gray-400 mr-2"></div>Offline</div> 
                                                    }
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center space-x-3 ">
                                                    <a onClick={()=>ConfirModal(user.id)}  className="font-medium hover:underline text-red-500">Supprimer</a>
                                                    <a onClick={()=>pass(user.id)} className="flex items-center space-x-1 text-[13px] rounded bg-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-white duration-200  px-2 py-1 cursor-pointer">
                                                        <i className='bx bx-intersect' ></i>
                                                        <span>Promouvoir</span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                )
                        })
                        :
                        <tr className="bg-custGreen/20 text-custGreen">
                            <td colSpan="4" className="py-4 px-6 w-full text-center">Aucun Utilisateurs trouver</td>
                        </tr>
                    
                        
                    }
                        
                  
                </tbody>
            </table>
            {
                    currentElements.length != 0
                    &&
                    <Pagination className="my-10" paginate={paginate} elementPerPage={elementPerPage} totalElement={users.length}/>
                }
        </div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
              <h1 className="text-xl">Liste d'adminstrateur</h1>
                <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input name="search1" value={search1} onChange={handler1} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                </div>
            </div>
            <table className="w-full text-sm text-left  text-gray-400">
                <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nom
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Commande
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        (currentElements1.length!=0)
                        ?
                        currentElements1.filter((val)=>{
                            if(search1 == "")
                            {
                                return val;
                            }
                            else if(val.name.toLowerCase().includes(search1.toLowerCase()))
                            {
                                return val;
                            }
                        }).map((user)=>{
                                var count =0
                                commandes.forEach(c=>{
                                    if(c.id_user == user.id)
                                    {
                                        count++;
                                    }
                                })
                                return (
                                        <tr key={user.id} className=" border-b  border-gray-800  hover:bg-dashBlack">
                                            <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                                <img className="w-10 h-10 rounded-full" src="/user.jpg" />
                                                <div className="pl-3">
                                                    <div className="text-md">{user.name}</div>
                                                    <div className="font-normal text-gray-500">{user.email}</div>
                                                </div>  
                                            </th>
                                            <td className="py-4 px-6">
                                                {count} commandes
                                            </td>
                                            <td className="py-4 px-6">
                                                    {
                                                        (user.isLogedIn)
                                                        ?
                                                        <div className="flex items-center"><div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>Online</div>
                                                         :
                                                        <div className="flex items-center"><div className="h-2.5 w-2.5 rounded-full bg-gray-400 mr-2"></div>Offline</div> 
                                                    }
                                            </td>
                                        </tr>
                                )
                        })
                        :
                        <tr className="bg-custGreen/20 text-custGreen">
                            <td colSpan="4" className="py-4 px-6 w-full text-center">Aucun Utilisateurs trouver</td>
                        </tr>
                    }
                    
                  
                </tbody>
            </table>
            {
                    currentElements1.length != 0
                    &&
                    <Pagination className="my-10" paginate={paginate1} elementPerPage={elementPerPage1} totalElement={admins.length}/>
                }
        </div>

    </div>
        <div className="fixed top-0 hidden fade ConfirModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitConfirModal}  className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400  flex flex-col  rounded z-100 w-screen md:w-[60%]">
                <div className="justify-between flex items-center py-2 px-5">
                    <h1 className="text-gray-300">Verification Mot de Passe</h1>
                    <i onClick={ExitConfirModal} className='cursor-pointer bx bxs-shield-x text-lg'></i>
                </div>
               <div className="flex flex-col space-y-3 mb-3">
                    <div className="border-b border-gray-400"></div>
                    <input name="password" value={password} onChange={handlerPass} type="password"   placeholder="Saisir mot de passe pour confirmer" className="bg-dashBlack mx-5 outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    <input onClick={Delete} type="button" value="Supprimer" className="col-span-2  outline-none mx-5 border border-red-500 text-red-500 py-3 bg-red-500/30 rounded hover:bg-red-500 cursor-pointer hover:text-gray-200 duration-200"/>
               </div>
            </div>
        </div> 

        <div className="fixed top-0 hidden fade UsersModal items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitUsersModal} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400  flex flex-col  rounded z-100 w-[80%]">
                <i onClick={ExitUsersModal} className='cursor-pointer bx bxs-shield-x text-lg absolute -top-9 py-1 px-2 bg-gray-300 rounded text-gray-700 right-0'></i>
                <div className="px-5 overflow-x-auto relative shadow-md sm:rounded-lg">
                    <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-3 bg-gray-9">
                    <h1 className="text-xl">Liste d'utilisateurs  supprimée</h1>
                        <div className="relative ">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <i className='w-5 y-5 bx bx-search'></i>
                            </div>
                            <input name="search" value={searchDeleted} onChange={handlerDeleted} type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left  text-gray-400 mb-4">
                        <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nom
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Commande
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                (currentElements2.lenght!=0)
                                ?
                                currentElements2.filter((val)=>{
                                    if(searchDeleted == "")
                                    {
                                        return val;
                                    }
                                    else if(val.name.toLowerCase().includes(searchDeleted.toLowerCase()))
                                    {
                                        return val;
                                    }
                                    if(val.lenght == 0){
                                        test = false
                                    }
                                }).map((user)=>{
                                        return (
                                                <tr className=" border-b  border-gray-800  hover:bg-dashBlack">
                                                    <th scope="row" className="flex items-center py-4 px-6 whitespace-nowrap text-gray-300">
                                                        <img className="w-10 h-10 rounded-full" src="/user.jpg" />
                                                        <div className="pl-3">
                                                            <div className="text-md">{user.name}</div>
                                                            <div className="font-normal text-gray-500">{user.email}</div>
                                                        </div>  
                                                    </th>
                                                    <td className="py-4 px-6">
                                                        20 commande
                                                    </td>
                                                    <td onClick={()=>ConfirModal1(user.id)} className="py-4 px-6  space-x-1 hover:underline">
                                                        <a href="#" className="font-medium bg-custGreen py-1 px-4 rounded  text-white">Restaurer</a>
                                                    </td>
                                                </tr>
                                        )         
                                })
                                :
                                <tr className="bg-custGreen/20 text-custGreen">
                                    <td colspan="4" className="py-4 px-6 w-full text-center">Aucun Utilisateurs trouver</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    {
                    currentElements2.length != 0
                    &&
                    <Pagination className="my-10" paginate={paginate2} elementPerPage={elementPerPage2} totalElement={deleted.length}/>
                }
                </div>

            </div>
        </div> 

        <div className="fixed top-0 hidden fade ConfirModal1 items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={ExitConfirModal1}  className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400  flex flex-col  rounded z-100 w-screen md:w-[60%]">
                <div className="justify-between flex items-center py-2 px-5">
                    <h1 className="text-gray-300">Verification Mot de Passe</h1>
                    <i onClick={ExitConfirModal1} className='cursor-pointer bx bxs-shield-x text-lg'></i>
                </div>
               <div className="flex flex-col space-y-3 mb-3">
                    <div className="border-b border-gray-400"></div>
                    <input name="password" value={password1} onChange={handlerPass1} type="password"   placeholder="Saisir mot de passe pour confirmer" className="bg-dashBlack mx-5 outline-none border border-gray-700 text-sm py-2 px-3 rounded-md" />
                    <input onClick={Confirm} type="button" value="Restaurer" className="col-span-2  outline-none mx-5 border border-custGreen text-custGreen py-3 bg-custGreen/30 rounded hover:bg-custGreen cursor-pointer hover:text-gray-200 duration-200"/>
               </div>
            </div>
        </div>
        

        <div className="fixed top-0 hidden fade password items-center justify-center h-screen z-100 w-screen left-0">
            <div onClick={Exitpass} className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400 z-100 rounded space-y-4 py-5 px-10">
                 <i onClick={Exitpass} className='text-lg absolute right-4 top-2 bx bx-x'></i>
                <h1>Entrée Votre Mot de Passe Pour La confimation</h1>
                <div className="flex items-center relative justify-center">
                    <input name="passwordModal" value={passwordModal} onChange={handlerPassModal} type="password" className = "py-2 px-2 rounded outline-none border w-full bg-dashBlack border-gray-400 text-sm " />
                    <i onClick={setAdmin} className='bx bxs-send absolute right-2 cursor-pointer rounded hover:bg-gray-500 hover:text-gray-100 durtion-100 bg-gray-700 py-1 px-2'></i>
                </div>
                <span className="text-xs text-gray-500">Attention cette opération n'est pas réversible ,merci de revérifier</span>
            </div>
        </div>
    </>
  )
}
