import React from "react";
import banner1 from "../../assets/banner_1.jpeg";

const BannerGrid = () => {
  return (
    <div>
      <div>
        <div>
          <img src={banner1} className="w-full max-h-[500px] bg-cover" alt="" />
        </div>
        <div>
          <button className="px-6 py-2 bg-black hover:bg-sky-400 text-white uppercase font-semibold">
            Fashion
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
