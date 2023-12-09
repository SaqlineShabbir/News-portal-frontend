import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import MostPopular from '../../components/home/latest-articles/most-popular/MostPopular';

const NewsDetalils = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
  const [news,setNews]=useState([])
  useEffect(()=>{
    axiosInstance.get(`/news/${id}`)
    .then((res)=>{
        setNews(res.data.data)
    })
  },[])
    
    return (
        <div className='main pb-20'>
        <div  className=''>
            <img  className='w-screen h-[80vh]' src={news?.avatar} alt="" />
            <div className='flex justify-center items-center'>
               <div>
               <p className='text-4xl relative bottom-[360px] px-10 font-bold'>{news?.title}</p>
               <p>{news?.date}</p>
               </div>
            </div>
        </div>

        <div className='w-[100%]  lg:flex  lg:px-[200px]  px-10'>
            <div className="left  lg:w-[60%] ">

                <div>
                    <p>{news?.description} We woke reasonably late following the feast and free
                     flowing wine the night before. After gathering ourselves and our packs, we headed down to 
                     our homestay family’s small dining room for breakfast.

Refreshingly, what was expected of her was the same thing that 
was expected of Lara Stone: to take a beautiful picture.

We were making our way to the Rila Mountains,<br/> 
<br/> where we were visiting the Rila Monastery where we enjoyed
 scrambled eggs, toast, mekitsi, local jam and peppermint tea.</p>
                </div>
                <img className='lg:w-full h-[400px] my-10' src={news?.avatar} alt="" />
<p>We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I’m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn’t venture far from the main church, but I didn’t feel overwhelmed by tourists in the monastery.


City Guide for Vienna
Headed over Lions Bridge and made our way to the Sofia Synagogue, then sheltered in the Central Market Hall until the recurrent (but short-lived) mid-afternoon rain passed.

Feeling refreshed after an espresso, we walked a <br/><br/>short distance to the small but welcoming Banya Bashi Mosque, then descended into the ancient Serdica complex.

We were exhausted after a long day of travel, so we headed back to the hotel and crashed.

I had low expectations about Sofia as a city, <br/> <br/>but after the walking tour I absolutely loved the place. This was an easy city to navigate, and it was a beautiful city – despite its ugly, staunch and stolid communist-built surrounds. Sofia has a very average
 facade as you enter the city, but once you lose yourself in the old town area, everything changes.</p>

 <p   className='text-3xl italic py-3'>IF YOU HAVE IT, YOU CAN MAKE ANYTHING LOOK GOOD</p>
 <p>City Guide for Vienna
Headed over Lions Bridge and made our way to the Sofia Synagogue, then sheltered in the Central Market Hall until the recurrent (but short-lived) mid-afternoon rain passed.

Feeling refreshed after an espresso, we walked a <br/><br/>short distance to the small but welcoming Banya Bashi Mosque, then descended into the ancient Serdica complex.

We were exhausted after a long day of travel,</p>
            </div>
            <div className="right lg:w-[40%]  lg:ml-20">
              <MostPopular></MostPopular>
            </div>

        </div>
        </div>
    );
};

export default NewsDetalils;