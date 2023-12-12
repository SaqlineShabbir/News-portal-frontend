import React, { useContext, useEffect, useState } from 'react';
import LatestArtiCard from './LatestArtiCard';
import MostPopular from '../most-popular/MostPopular';
import axiosInstance from '../../../../utils/axios';
import Pagination from '../../shared/Pagination';
import { AuthContext } from '../../../../context/AuthProvider';
import DescriptionLoader from '../../../../utils/DescriptionLoader';

const LatestArticles = () => {
  const {setLoading,loading}=useContext(AuthContext)
  //get data from server
  const [articleData,setArticleData]=useState([])
  const [pageCount,setPageCount]=useState(0)
  
  const [page,setPage]=useState(1)

  const getNextPage=()=>{
    setPage(page+1)
   }
  const getPreviousPage=()=>{
    setPage(page-1)
 }
 
//  console.log(loading)
  useEffect(()=>{
    
    axiosInstance.get(`/article?page=${page}`)
    .then((res)=>{
       
      setArticleData(res?.data.data)
      setPageCount(res.data.pageCount)
     
        setLoading(false)
        // console.log(loading)
      
    })
    },[getNextPage,getPreviousPage])

    let content = null
    if(loading){
      content = <div className='grid grid-cols-4 gap-4 place-content-center px-[200px]'>
        <DescriptionLoader/>
        <DescriptionLoader/>
        <DescriptionLoader/>
        <DescriptionLoader/>
      </div>
    }
    if(!loading && articleData.length<0){
     content= <div className='flex justify-center'><p>No data found </p></div>
    }

    if(!loading && articleData.length>0){
      content =<> <div>
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
             <Pagination  totalPages={pageCount} setPage={setPage} page={page} getNextPage={getNextPage} getPreviousPage={getPreviousPage} ></Pagination>
          </div>
          <div className='right lg:w-[40%]  lg:px-20'>
           <MostPopular></MostPopular>
          </div>

      </div>
  </div>
  </>
    }
    return (
       <div>
        {content}
       </div>
    );
};

export default LatestArticles;