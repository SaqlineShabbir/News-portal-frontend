import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import DescriptionLoader from '../../../utils/DescriptionLoader';
import NewsCard from './NewsCard';
import Pagination from '../shared/Pagination';
import MostPopular from '../latest-articles/most-popular/MostPopular';

const News = () => {
    const[allNews,setAllNews]=useState([])
    const {setLoading,loading}=useContext(AuthContext)
    const [totalPages,setTotalPages]=useState(0)
    const [page,setPage]=useState(1)



    const getPreviousPage = ()=>{
        setPage(page-1)
    }
    const getNextPage = ()=>{
        setPage(page+1)
    }


    useEffect(()=>{
    axiosInstance.get(`/news?page=${page}`)
    .then((res)=>{
        setAllNews(res?.data.data)
        setTotalPages(res.data.pageCount)
        setLoading(false)
    })
    },[getNextPage,getPreviousPage])

   
    //decide what to render
    let content = null

    if(loading){
        content = <div className='grid grid-cols-1 lg:grid-cols-4  py-10 gap-4 place-content-center lg:px-[200px]'>
            <DescriptionLoader/>
            <DescriptionLoader/>
            <DescriptionLoader/>
            <DescriptionLoader/>
            </div>
    }
    if(!loading && allNews.length <=0 ){
        content = <div className='  py-10  place-content-center lg:px-[200px]'>
        <p>No data Found..</p>
        </div>
    }

    if(!loading && allNews.length > 0 ){
        content=   <div className='lg:flex w-[100%] px-10 lg:px-[200px]'>
        <div className='left  mx-4 my-20 h-full lg:w-[60%]'>
        <div className='  text-gray-300 pb-7'>
              <p className='bg-green-500  text-gray-50 w-[200px]  py-1 px-2'>LATEST NEWS</p>
              <hr />
             </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {
                    allNews.map((news) => <NewsCard  key={news._id} news={news}></NewsCard>)
                }
            </div>
            <Pagination totalPages={totalPages} page={page} getNextPage={getNextPage} getPreviousPage={getPreviousPage} ></Pagination>
        </div>
        <div className='w-[40%] lg:my-20 ml-10'>
            <MostPopular></MostPopular>
        </div>
    </div>
    }

    return (
       <>
       {content}
       </>
    )
}

export default News;