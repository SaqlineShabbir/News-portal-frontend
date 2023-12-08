import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios';

const News = () => {
    const features = [
        {
            img: "https://i.ibb.co/zrsyxZJ/colombia.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/zrsyxZJ/colombia.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/zrsyxZJ/colombia.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/zrsyxZJ/colombia.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
    ];

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
                        allNews.map((feature) => (
                            <div>
                                <img className='w-full md:w-80 h-52 rounded' src={feature.avatar} alt="image" />
                                <div className='space-y-4'>
                                    <h2 className='text-2xl my-2  hover:text-blue-400 cursor-pointer duration-300'>{feature.title}</h2>
                                    <div className='flex space-x-4'>
                                        <span className='text-gray-900 font-semibold'>{feature.user}</span>
                                        <span className='text-gray-400'>{feature.date}</span>
                                    </div>
                                    <p className='text-gray-500'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News;