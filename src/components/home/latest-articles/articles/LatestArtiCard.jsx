import React from 'react';

const LatestArtiCard = ({article}) => {
    console.log(article)
    return (
        <div className='py-5  lg:w-[350px]'>
            <div className=''>
            <img   className='h-[170px] lg:w-[350px] w-full'   src={article?.thumbnail} alt="" />
            </div>
            <p className='text-xl py-1 hover:text-blue-400'>{article?.title}</p>
            <p className='text-sm '>{article?.date}</p>
        </div>
    );
};

export default LatestArtiCard;