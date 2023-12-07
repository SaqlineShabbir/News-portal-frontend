import React, { useEffect, useState } from 'react';
import LatestArtiCard from './LatestArtiCard';
import MostPopular from '../most-popular/MostPopular';
import axiosInstance from '../../../../utils/axios';

const LatestArticles = () => {

  //get data from server
  const [articleData,setArticleData]=useState([])
  useEffect(()=>{

    axiosInstance.get("/article")
    .then((res)=>{
       
      setArticleData(res?.data.data)
    })
    },[])
    return (
        <div>
            <div className='lg:flex w-[100%]  lg:px-[200px] px-10'>

                <div className='left lg:w-[60%]'>
                   <div className='  text-gray-300'>
                    <p className='bg-black  text-gray-300 w-[200px]  py-1 px-2'>LATEST ARTICLES</p>
                    <hr />
                   </div>

                   <div className='grid lg:grid-cols-2 lg:gap-9'>
                   {articleData?.map((article) => (
        <LatestArtiCard key={article.id} article={article}></LatestArtiCard>
      ))}

     

                   </div>
                </div>
                <div className='right lg:w-[40%]  lg:px-20'>
                 <MostPopular></MostPopular>
                </div>

            </div>
        </div>
    );
};

export default LatestArticles;