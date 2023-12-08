import React from 'react'

const Login = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="max-w-md w-full p-6 bg-white border rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center decoration-wavy decoration-pink-300 underline">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>

                    <p className='text-blue-500 hover:underline cursor-pointer flex justify-end text-sm'>
                        <a href="/register">
                            Create an account.
                        </a>
                    </p>
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login