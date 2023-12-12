import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    return (
        <Link to={{
            pathname: `/news/x`,
            search: `?id=${news?._id}`,
          }}> <div className=''>
         <img className='w-full h-[180px]  rounded' src={news?.avatar} alt="image" />
         <div className='space-y-4'>
             <h2 className='text-xl my-2 font-bold hover:text-blue-400 cursor-pointer duration-300'>{news.title}</h2>
             <div className='flex '>
                 <span className='text-gray-900 font-semibold'>{news.user}</span>
                 <span className='text-gray-400'>{news.date}</span>
             </div>
             <p className='text-gray-500'>{news?.description.slice(0,145)}</p>
         </div>
     </div></Link>
    );
};

export default NewsCard;