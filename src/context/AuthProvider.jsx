import React, { createContext, useState } from 'react';
import axiosInstance from '../utils/axios';
import { useEffect } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [token,setToken]=useState(null)
    const [loading,setLoading]=useState(true)
   
    // check loggedin or not
    
    
   

   useEffect(()=>{
    setToken(localStorage.getItem("token"))
  
    
   },[setToken,token])

    const storeTokenToLS = (token)=>{
    return  localStorage.setItem('token',token)
       
      
    }
    //logout
    const logOutUser = ()=>{
    
        setToken("")
        return localStorage.removeItem("token")
    }

   


    const authInfo ={
        
        loading,
        setLoading,
        storeTokenToLS,
        logOutUser,
        token

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;