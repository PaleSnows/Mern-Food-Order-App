import React from "react";
import food from "../../assets/food.js";

const List = () => {
  return (
    <div className="bg-black text-slate-200 grid grid-cols-4 gap-5  ">
      {food.map((item) => (
        <div key={item.id} className="">
          <img
            className="h-40 w-full object-cover  hover:scale-105 transition duration-200"
            src={item.image}
            alt=""
          />
          <div className="flex flow-row gap-5 justify-center p-4  bg-slate-800">
            <button className="text-green-500">Add(+)</button>
            <button className="text-orange-500">Remove(-)</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
