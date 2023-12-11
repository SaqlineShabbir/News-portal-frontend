import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import axiosInstance from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [image,setImage]=useState(null)
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [date,setDate]=useState('')
    const navigate =useNavigate()
    const {storeTokenToLS}=useContext(AuthContext)
    const handleSubmit= async(e)=>{
        e.preventDefault()
        
        if(password!=confirmPassword){
            alert('passwoed does not match')
        }

        try{
            const formData = new FormData();
        
            formData.append('avatar',image);
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('dateofbirth',date)
            
         const result = await axiosInstance.post('/signup',formData)
             //navigate user to home page
             console.log(result)
       if(result.statusText ==="Created"){
        storeTokenToLS(result.data.token)
        console.log(result)
        navigate("/")
       }
        }catch(err){
            console.log(err)
        }
      
            
        
        

    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-md w-full p-6 border bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Register as a volunteer</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name
                        </label>
                        <input
                           onChange={(e)=>setName(e.target.value)}
                            type="text"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                           onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Image
                        </label>
                        <input
                           onChange={(e)=>setImage(e.target.files[0])}
                            type="file"
                            name='avatar'
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                        onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                            type="password"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
                            Date of Birth
                        </label>
                        <input
                             onChange={(e)=>setDate(e.target.value)}
                            type="date"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter a short description"
                        />
                    </div> */}
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Organization
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your organization"
                        />
                    </div> */}

                    <p className='text-blue-500 hover:underline cursor-pointer flex justify-end text-sm'>
                        <a href="/login">
                            Already an account.
                        </a>
                    </p>

                    <input
                        value="Register"
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    />
                       
                </form>
            </div>
        </div>
    )
}

export default Register