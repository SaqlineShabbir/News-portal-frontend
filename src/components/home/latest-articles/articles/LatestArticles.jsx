import React from 'react';
import LatestArtiCard from './LatestArtiCard';
import MostPopular from '../most-popular/MostPopular';

const LatestArticles = () => {
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
        <div>
            <div className='lg:flex w-[100%]  lg:px-[200px] px-10'>

                <div className='left lg:w-[60%]'>
                   <div className='  text-gray-300'>
                    <p className='bg-black  text-gray-300 w-[200px]  py-1 px-2'>LATEST ARTICLES</p>
                    <hr />
                   </div>

                   <div className='grid lg:grid-cols-2 lg:gap-9'>
                   {products?.map((article) => (
        <LatestArtiCard key={article.id} article={article}></LatestArtiCard>
      ))}

     

                   </div>
                </div>
                <div className='right lg:w-[40%]  lg:px-20'>
                 <MostPopular></MostPopular>
                </div>

            </div>
        </div>
    );
};

export default LatestArticles;