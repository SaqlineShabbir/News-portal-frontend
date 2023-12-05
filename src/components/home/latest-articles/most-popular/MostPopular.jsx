import React from 'react';
import MostPopuCard from './MostPopuCard';

const MostPopular = () => {
    const products = [
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
        },
       
      ];
    return (
        <div className=''>
                   <div className='text-gray-300'>
                    <p className='bg-black  text-gray-300 w-[200px]  py-1 px-2'>MOST POPULAR</p>
                    <hr />
                   </div>

                   <div className='space-y-7 pt-5'>
                   {products?.map((article) => (
        <MostPopuCard key={article.id} article={article}></MostPopuCard>
      ))}

     

                   </div>
                </div>
    );
};

export default MostPopular;