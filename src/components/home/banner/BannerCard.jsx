import React from 'react';

const BannerCard = ({trending}) => {
    return (
        <div>
            <img src={trending.thumbnail} alt="" />
        </div>
    );
};

export default BannerCard;