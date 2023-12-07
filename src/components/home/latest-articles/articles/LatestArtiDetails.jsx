import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../../../utils/axios';

const LatestArtiDetails = () => {
    const [data,setData]=useState([])
    console.log(data)
      //get the article id
  const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log(id)

    useEffect(()=>{

        axiosInstance.get(`/article/${id}`)
        .then((res)=>{
           
            setData(res?.data.data)
        })
        },[])
    return (
        <div>
            <p>{data.title}</p>
        </div>
    );
};

export default LatestArtiDetails;