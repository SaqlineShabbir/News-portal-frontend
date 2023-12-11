import React, { createContext, useState } from 'react';
import axiosInstance from '../utils/axios';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [loading,setLoading]=useState(false)
   
    // check loggedin or not
    let loggedIn = !!token

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
        storeTokenToLS,
        logOutUser,
        loggedIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;