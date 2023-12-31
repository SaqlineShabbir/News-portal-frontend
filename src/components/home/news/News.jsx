import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axios';
import { Link } from 'react-router-dom';

const News = () => {
    const[allNews,setAllNews]=useState([])
    useEffect(()=>{
    axiosInstance.get('/news')
    .then((res)=>{
        setAllNews(res?.data.data)
    })
    },[])

    return (
        <div className='flex justify-start'>
            <div className='md:mx-52 mx-4 my-20 h-full'>
                <span className='uppercase bg-pink-300 px-2 text-black font-bold my-4 py-2 rounded'>Latest News</span>
                <hr className='my-6' />

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {
                        allNews.map((news) => (
                         <Link to={{
                            pathname: `/news/x`,
                            search: `?id=${news?._id}`,
                          }}> <div>
                         <img className='w-full md:w-80 h-52 rounded' src={news?.avatar} alt="image" />
                         <div className='space-y-4'>
                             <h2 className='text-2xl my-2  hover:text-blue-400 cursor-pointer duration-300'>{news.title}</h2>
                             <div className='flex space-x-4'>
                                 <span className='text-gray-900 font-semibold'>{news.user}</span>
                                 <span className='text-gray-400'>{news.date}</span>
                             </div>
                             <p className='text-gray-500'>{news?.description}</p>
                         </div>
                     </div></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News;