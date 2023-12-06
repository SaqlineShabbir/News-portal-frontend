import React from 'react';
import { useSearchParams } from 'react-router-dom';

const LatestArtiDetails = () => {
      //get the article id
  const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log(id)
    return (
        <div>
            <p>hello</p>
        </div>
    );
};

export default LatestArtiDetails;