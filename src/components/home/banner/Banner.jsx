import React from 'react';
import BannerCard from './BannerCard';

const Banner = () => {
    const trendings = [
        {
          id: '1',
          title: 'Another Big Apartment Project Slated for Broad Ripple Company',
          description:
            'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
          date: 'may 10, 2023',
          link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
          thumbnail:
            'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
        },
        {
          id: '2',
          title: 'Another Big Apartment Project Slated for Broad Ripple Company',
          description:
            'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
          date: 'may 10, 2023',
          link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
          thumbnail:
            'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
        },
        {
          id: '3',
          title: 'Another Big Apartment Project Slated for Broad Ripple Company',
          description:
            'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
          date: 'may 10, 2023',
          link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
          thumbnail:
            'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
        },
        {
          id: '4',
          title: 'Another Big Apartment Project Slated for Broad Ripple Company',
          description:
            'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
          date: 'may 10, 2023',
          link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
          thumbnail:
            'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
        },]
    return (
        <div className='lg:px-[200px] px-5'>
           
      <div className="lg:flex lg:p-8 w-[100%] lg:space-x-5 space-y-5 lg:space-y-0">
      {/* Left side image */}
     <div className='lg:w-[50%] lg:h-[450px] relative'>
     <img
        src={trendings[0].thumbnail}
        alt="Left Image"
        className=" lg:h-[450px] w-full"
      />
      <div className="absolute inset-0 flex flex-col justify-end px-10  py-10">
        <h2 className="text-white text-2xl font-bold">{trendings[0].title}</h2>
        <p  className='text-white'>{trendings[0].date}</p>
      </div>
     </div>

      <div className="lg:w-[50%] lg:h-[450px]  ">
        {/* Top right image */}
        <div className='relative lg:w-[600px]'>
        <img
          src={trendings[1].thumbnail}
          alt="Top Right Image"
          className="  lg:h-[278px]  w-full mb-2"
        />
         <div className="absolute inset-0 flex flex-col justify-end px-10  py-10">
        <h2 className="text-white text-2xl font-bold">{trendings[1].title}</h2>
        <p  className='text-white'>{trendings[1].date}</p>
      </div>
        </div>

       <div   className='lg:flex lg:space-x-4 lg:w-[600px] '>
        <div className='relative'>
             {/* Bottom right images */}
         <img
          src={trendings[2].thumbnail}
          alt="Bottom Right Image 1"
          className=" lg:w-[293px]  mb-2"
        />
        <div className="absolute inset-0 flex flex-col justify-end px-10  py-10">
        <h2 className="text-white text-sm font-bold">{trendings[2].title}</h2>
        <p  className='text-white'>{trendings[2].date}</p>
      </div>
        </div>
        <div className='relative'>
        <img
          src={trendings[3].thumbnail}
          alt="Bottom Right Image 2"
          className=" lg:w-[293px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end px-10  py-10">
        <h2 className="text-white text-sm font-bold">{trendings[3].title}</h2>
        <p  className='text-white'>{trendings[3].date}</p>
      </div>
        </div>
       </div>
      </div>
    </div>
            
            
        </div>
    );
};

export default Banner;