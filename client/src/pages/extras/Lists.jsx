import React from "react";
import food from '../../assets/food.js'

const List = () => {
  return <div className="bg-black text-slate-300 grid grid-cols-3 ">
    
           {food.map((item)=>(
            <div key={item.id} className="">
              <img className="h-52 w-full object-cover" src={item.image} alt="" />
            </div>
           ))} 
  </div>;
};

export default List;
