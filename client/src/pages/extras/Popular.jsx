import React from "react";

import icecream from "../../assets/i1.jpg";
import drinks from "../../assets/d2.jpg";
import wings from "../../assets/c1.jpg";


const Popular = () => {
  return (
    <div className="bg-black pb-32 ">
      <p className="text-slate-200 font-semibold text-3xl text-center">
        Some of Our <span className="text-slate-400">Popular</span> Items
      </p>
      <div className="grid grid-cols-3 object-cover  px-16 mt-5 gap-5 bg-black">
        <div className="flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition "
            src={icecream}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Ice-cream
          </h1>
        </div>
        <div className=" flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={drinks}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
           Drinks
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={wings}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Chicken Wings
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Popular;
