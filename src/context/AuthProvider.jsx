import React, { createContext, useState } from 'react';
import axiosInstance from '../utils/axios';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)


    const singnUp = (formData)=>{

       axiosInstance.post('/signup',formData).then((res)=>{
            setUser(res.data)
        })
      
    }

    const signIn =(email,password)=>{
        axiosInstance.post('/login',{
          email,
          password
        }).then((res)=>{
            setUser(res.data)
        })
        
    }


    const authInfo ={
        user,
        loading,
        singnUp,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;