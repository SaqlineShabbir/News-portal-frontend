import React from 'react';

const MostPopuCard = ({article}) => {
    return (
        <div className='flex space-x-3'>
            <img className='lg:h-20 h-[100px]  w-full lg:w-[150px]' src={article?.thumbnail} alt="" />
            <div>
            <p className='hover:text-blue-500 text-sm font-bold'>{article?.title.slice(0, 30)}</p>
            <p className='text-sm'>{article.date}</p>
            </div>
        </div>
    );
};

export default MostPopuCard;