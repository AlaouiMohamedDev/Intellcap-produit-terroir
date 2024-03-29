import React, { useState } from "react";
import axios from 'axios'
import swal from 'sweetalert2'
import  { useRouter} from 'next/router';
import { setCookie,getCookie } from 'cookies-next';

export default function AuthModal() {
    const router = useRouter();
    const [loginInput,setLogin] = useState({
        email:'',
        password:'',
        error_list:[],
    });
    const handleInput =(e) =>{
        e.persist();
        setLogin({...loginInput,[e.target.name]:e.target.value});
    }
    const loginSubmit=(e)=>
    {
        e.preventDefault();
        if (loginInput.email=="" || loginInput.password=="")
        {
            setLogin({...loginInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else
        {
            const data ={
                email:loginInput.email,
                password:loginInput.password,
            }
            axios.post('http://127.0.0.1:5000/login',data).then(res => {
                      
                if(res.data.status === 200){
                    setCookie('name',res.data.name);
                    setCookie('email',res.data.email);
                    setCookie('public_id',res.data.public_id);
                    setCookie('id',res.data.id);
                    setCookie('token',res.data.token);
                    setCookie('name',res.data.name);
                    setCookie('adress',res.data.adresse);
                    setCookie('tel',res.data.tel);
                    setCookie('image',res.data.image);
                    if(res.data.admin){
                        setCookie('admin',res.data.admin);
                    }
                    swal.fire("Bienvenue","","success");
                    ModalAuth()
                    document.location.reload()
                }
                else
                {
                    swal.fire("Echec !!",res.data.message,"warning");
                }
            })
        }
    }
    
    const [registerInput,setRegister] = useState({
        userName:'',
        password:'',
        email:'',
        confirm:'',
        error_list:[],
    });
    const handleRegisterInput =(e) =>{
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value});
    }

    const registerSubmit=(e)=>
    {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.preventDefault();
        if(registerInput.userName=="" ||registerInput.email=="" || registerInput.password=="" || registerInput.confirm=="")
        {
            setRegister({...registerInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else if(registerInput.confirm!=registerInput.password)
        {
            setRegister({...registerInput,error_list:{'messageErr':"Confirmation invalide du mot de passe ",'error':true}})
        }
        else if(!registerInput.email.match(mailformat))
        {
               setRegister({...registerInput,error_list:{'messageErr':"Email Incorrecte",'error':true}})
        }
        else
        {
            const data ={
                userName:registerInput.userName,
                password:registerInput.password,
                email:registerInput.email,
            }
    
            axios.post('http://127.0.0.1:5000/register',data).then(res => {
                if(res.data.status === 200){
                    swal.fire("Bienvenue","","success");
                    loginForm();
                }
                else
                {
                    swal.fire("Echec !!",res.data.message,"warning");
                }
            })
        }
        
    }

    const loginForm = () =>{
        const login= document.querySelector('.login')
        const register = document.querySelector('.register')
        login.classList.remove('hidden')
        login.classList.add('flex')
        register.classList.remove('flex')
        register.classList.add('hidden')
    }
    const registerForm = () =>{
        const login= document.querySelector('.login')
        const register = document.querySelector('.register')
        login.classList.remove('flex')
        login.classList.add('hidden')
        register.classList.remove('hidden')
        register.classList.add('flex')
        console.log("Hi")
    }
    
    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }
  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden items-center justify-center bg-gray-900/70 authmodal fade">
        <div className="relative flex items-center justify-center w-full h-full md:w-[850px] md:h-[510px] bg-white  zoom-in">
            <div className="flex px-7 md:w-1/2 flex-col items-center space-y-5">
                <div className = "absolute left-0 p-4 top-0" >
                      <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main" onClick={ModalAuth}/>
                </div>
                {/* Register Modal */}
                <div className="w-full hidden flex-col space-y-4 register relative z-100">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Crée votre compte
                    </h2>
                    <form onSubmit={registerSubmit} className = "flex w-full flex-col space-y-3">
                        <input name="userName" value={registerInput.userName} onChange={handleRegisterInput} placeholder = "Nom d'utilisateur" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="email" value={registerInput.email} onChange={handleRegisterInput} placeholder = "Email" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="password" value={registerInput.password} onChange={handleRegisterInput} placeholder = "Password" type="password" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="confirm" value={registerInput.confirm} onChange={handleRegisterInput} placeholder = "Confirmer votre Mot de passe" type="password" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <button className = "bg-main text-white flex items-center justify-center py-2 rounded text-sm" >
                                <span>S'inscrire</span>
                        </button>
                    </form>
                    <div className = "flex items-center w-full justify-between" >
                        <p onClick={loginForm} className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                           Se connectez!
                        </p>
                        <p className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                            Mot de passe oublier ?
                        </p>
                    </div>
                    {
                        (registerInput.error_list.error)
                        &&
                        <div className="flex text-xs text-red-500 absolute -bottom-10">
                            {
                                registerInput.error_list.messageErr
                            }
                        </div>
                    }
                </div>
                {/* Login Modal */}
                <div className="w-full flex flex-col space-y-4 login relative">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Se connectez à votre compte
                    </h2>
                    <form method="post" onSubmit={loginSubmit} className = "flex w-full flex-col space-y-3">
                        <input name="email" onChange={handleInput} value={loginInput.email} placeholder = "Adresse Email" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="password" onChange={handleInput} value={loginInput.password} placeholder = "Mot de passe" type="password" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <button className = "bg-main text-white flex items-center justify-center py-2 rounded text-sm" >
                                <span>Se connectez</span>
                        </button>
                    </form>
                    <div className = "flex items-center w-full justify-between" >
                        <p onClick={registerForm} className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                           Inscription içi!
                        </p>
                        <p className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                            Mot de passe oublier ?
                        </p>
                    </div>
                    {
                        (loginInput.error_list.error)
                        &&
                        <div className="flex text-xs text-red-500 absolute -bottom-10">
                            {
                                loginInput.error_list.messageErr
                            }
                        </div>
                    }
                </div>
            </div>
            <img src="/ban-1.jpg" className="hidden md:flex w-1/2 bg-ban-1 object-cover h-full"/>
        </div>
    </div>
  )
}
