import React from "react";
import burger from "../../assets/b3.jpg";
import pizza from "../../assets/p1.jpg";
import ice from "../../assets/i1.jpg";


const Offers = () => {
  return (
    <div className="bg-black h-screen pt-36 ">
      <p className="text-slate-200 font-semibold text-3xl text-center">
        Be sure to make full use of these special{" "}
        <span className="text-slate-400">offers!!!</span>
      </p>
      <div className="grid grid-cols-3 object-cover   px-16 mt-5 gap-5 bg-black">
        <div className="flex flex-col gap-3 relative ">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition "
            src={burger}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Burger
          </h1>
          <h1 className="text-orange-600 absolute text-lg font-bold right-0 top-0 ">
            -5%
          </h1>
        </div>
        <div className=" flex flex-col gap-3 relative">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={pizza}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Pizza
          </h1>
          <h1 className="text-orange-600 absolute font-bold  right-0 top-0 ">-3%</h1>
        </div>
        <div className="flex flex-col gap-3 relative">
          <img
            className="h-96 w-full object-cover hover:scale-105 transition"
            src={ice}
            alt=""
          />
          <h1 className="text-slate-200 text-center text-2xl italic font-bold">
            Ice-cream
          </h1>
          <h1 className="text-orange-600 absolute font-bold  right-0 top-0 ">-10%</h1>
        </div>
      </div>
    </div>
  );
};

export default Offers;
