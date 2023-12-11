import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import axiosInstance from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate =useNavigate()

    const {storeTokenToLS}=useContext(AuthContext)

    //handlesubmit
  const  handleSubmit = async(e)=>{
   e.preventDefault()
   try{
    const res =await axiosInstance.post('/login',{
     email,
     password
   })
   //navigate user to home page
   if(res.statusText ==="OK"){
    storeTokenToLS(res.data.token)
    navigate("/")
   }

   console.log(res.data.token)

   }catch(err){
    console.log(err)
   }
  

//   .then((res)=>{
//     // setUser(res.data)
//     console.log(res.data)
// })
  }
    return (
        <div className="min-h-screen flex  justify-center py-10 lg:py-20">
            <div className="max-w-md w-full p-6 bg-white border rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center decoration-wavy decoration-pink-300 underline">Login</h2>
                <form  onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
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

                    <p className='text-blue-500 hover:underline cursor-pointer flex justify-end text-sm'>
                        <a href="/signup">
                            Create an account.
                        </a>
                    </p>
                    <input
                        type="submit"
                        value="login"
                        className="bg-blue-500 text-white
                         py-2 px-4 rounded-md hover:bg-blue-600 
                         focus:outline-none focus:ring 
                         focus:border-blue-300"
                    />
                        
                    
                </form>
            </div>
        </div>
    )
}

export default Login