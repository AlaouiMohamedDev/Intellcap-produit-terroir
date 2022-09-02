import React,{useState,useCallback,useEffect, createContext , useMemo } from 'react'
import axios from 'axios'
import { setCookie,getCookie } from 'cookies-next';
//`http://127.0.0.1:5000/getUser/${localStorage.getItem("public_id")}`

const DataContext = createContext();

const Providers = ({children}) => {
     //Get All Cooperative
     const [cooperatives , setCooperative] = useState([]);
     useMemo(async () => {
             const res = await axios.get('http://127.0.0.1:5000/cooperatives',{headers:{'x-access-token':getCookie('token')}});
             const data =  await res.data;
             setCooperative(data);
     },[])
    //Get All Categories
    const [categories , setCategories] = useState([]);
    useMemo(async () => {
            const res = await axios.get('http://127.0.0.1:5000/categories',{headers:{'x-access-token':getCookie('token')}});
            const data =  await res.data;
            setCategories(data);
    },[])
    
    //Get Authenticated user
    const [user , setUser] = useState([]);
    useMemo(async () => {
            const res = await axios.get(`http://127.0.0.1:5000/getUser/${localStorage.getItem("public_id")}`);
            const data =  await res.data;
            setUser(data);
    },[])

        return (
            <DataContext.Provider value ={{user,categories,cooperatives}}>
                {children}
            </DataContext.Provider>
        )
}
export {DataContext , Providers}
