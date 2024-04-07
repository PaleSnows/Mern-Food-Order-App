import React from "react";
import burger from "../../assets/b3.jpg";
import pizza from "../../assets/p1.jpg";
import sandwitch from "../../assets/s1.jpg";
import drinks from "../../assets/d1.jpg";

const Category = () => {
  return (
    <div className="bg-black h-screen pt-28">
      <p className="text-slate-200 font-semibold text-3xl text-center">
        Check out various <span className="text-slate-400">categories</span> of food we have avaliable
      </p>
      <div className="grid grid-cols-4 object-cover  px-16 mt-5 gap-5 bg-black">
        <div className="flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition "
            src={burger}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Burger
          </h1>
        </div>
        <div className=" flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={pizza}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
           Pizza
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={sandwitch}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Sandwitch
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={drinks}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Soft Drinks
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
