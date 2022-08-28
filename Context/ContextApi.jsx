import React,{useState,useCallback,useEffect, createContext , useMemo } from 'react'
import axios from 'axios'

//`http://127.0.0.1:5000/getUser/${localStorage.getItem("public_id")}`

const DataContext = createContext();

const Providers = ({children}) => {



    //Archived Meetings API
    const [user , setUser] = useState([]);
    const getUser = useMemo(async () => {
        const res = await axios.get(`https://dummyjson.com/products`);
        const data =  await res.data;
        setUser(data);
    },[user])
        return (
            <DataContext.Provider value = {user}>
                {children}
            </DataContext.Provider>
        )
}
export {DataContext , Providers}
