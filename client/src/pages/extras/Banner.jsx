import React from "react";
import banner from "../../assets/b.jpg";

const Banner = () => {
  return (
    <div className="bg-black">
      <img src={banner} className="object-cover h-[630px] w-full" alt="" />
    </div>
  );
};

export default Banner;
