import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export const LogOut = () => {
    const {logOutUser}=useContext(AuthContext)
   
    const navigate = useNavigate()
    useEffect(()=>{
        logOutUser()

    },[logOutUser])

    return navigate('/login')
};

