import React from 'react';
import addbanner from '../../../../src/assets/add.jpeg'
const AddCard = () => {
    return (
        <div
         style={{backgroundImage: `url(${addbanner})`,backgroundBlendMode:'darken' }} 
         className='bg-no-repeat flex  items-end justify-end bg-cover bg-blend-darken h-[200px]'>
            <button className='py-1 px-3 border font-bold text-sm'>Buy Now </button>
        </div>
    );
};

export default AddCard;