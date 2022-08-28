import React,{useState,useCallback,useEffect, createContext , useMemo } from 'react'
import axios from 'axios'

//`http://127.0.0.1:5000/getUser/${localStorage.getItem("public_id")}`

const DataContext = createContext();

const Providers = ({children}) => {



    const [user , setUser] = useState([]);
    useMemo(async () => {
            const res = await axios.get(`http://127.0.0.1:5000/getUser/${localStorage.getItem("public_id")}`);
            const data =  await res.data;
            setUser(data);
    },[])
        return (
            <DataContext.Provider value ={user}>
                {children}
            </DataContext.Provider>
        )
}
export {DataContext , Providers}
