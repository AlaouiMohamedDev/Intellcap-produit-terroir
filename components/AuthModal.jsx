import React, { useState } from "react";
import axios from 'axios'
import swal from 'sweetalert2'


export default function AuthModal() {

    const [loginInput,setLogin] = useState({
        userName:'',
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
        const data ={
            username:loginInput.userName,
            password:loginInput.password,
        }

        axios.post('login',data).then(res => {
            console.log(res)
            
            // if(res.data.status === 200){
            //     localStorage.setItem('auth_token',res.data.token);
            //     localStorage.setItem('auth_name',res.data.name);
            //     swal("Success",res.data.message,"success");
            //     document.location.reload();
            // }
            // else if(res.data.status === 401){
            //    swal("Warning",res.data.message,"warning");
            // }
            // else{
            //     setLogin({...loginInput,error_list:res.data.validation_errors});
            // }
        })
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
                <div className="w-full hidden flex-col space-y-4 register">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Crée votre compte
                    </h2>
                    <form className = "flex w-full flex-col space-y-3">
                        <input placeholder = "Nom d'utilisateur" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input placeholder = "Email" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input placeholder = "Mot de passe" type="password" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input placeholder = "Confirmer votre Mot de passe" type="password" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
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
                </div>
                {/* Login Modal */}
                <div className="w-full flex flex-col space-y-4 login">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Se connectez à votre compte
                    </h2>
                    <form method="post" onSubmit={loginSubmit} className = "flex w-full flex-col space-y-3">
                        <input name="userName" onChange={handleInput} value={loginInput.userName} placeholder = "Nom d'utilisateur" type="text" className = "placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
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
                </div>
            </div>
            <img src="/ban-1.jpg" className="hidden md:flex w-1/2 bg-ban-1 object-cover h-full"/>
        </div>
    </div>
  )
}
