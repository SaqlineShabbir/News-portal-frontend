import React from 'react';
import addbanner from '../../../../src/assets/adbanner.jpg'
const NavaddCard = () => {
    return (
       <div className='flex justify-center  py-[120px]'>
         <div  style={{backgroundImage: `url(${addbanner})` }}  className="lg:flex justify-between  px-10 text-gray-900  h-[90px] w-full mx-[200px]  hidden lg:block  bg-blend-darken  bg-no-repeat bg-cover ">
        {/* <img className='h-20 w-[600px] ' src={addbanner} alt="" /> */}
        <div className='py-3'>
         <p>Best selling BLOGS and MAGAZINE <br />Theme of all  time  </p>
         <p className='italic text-sm'>Experience The change</p>
        </div>
        <div   className='flex items-center'>
        <button className='border py-1  px-2'>Buy Now</button>
        </div>
     </div>
       </div>
    );
};

export default NavaddCard;