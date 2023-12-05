import React from 'react';

const MostPopuCard = ({article}) => {
    return (
        <div className='flex space-x-3'>
            <img className='lg:h-20 h-[100px]  w-full' src={article?.thumbnail} alt="" />
            <p className='hover:text-blue-500'>{article?.title.slice(0, 30)}</p>
        </div>
    );
};

export default MostPopuCard;