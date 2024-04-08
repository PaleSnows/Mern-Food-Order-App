import React from "react";
import Search from "./extras/Search";
import List from "./extras/Lists";
import Slider from "../components/Slider";

const Menu = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row bg-black gap-5">
        <div className="  flex-1">
          <Search />
        </div>
        <div className="flex-1">
          <List />
        </div>
      </div>
      <div className="h-screen bg-black">
        <h1 className="text-slate-400 text-4xl text-center p-10 font-semibold">Menu Items</h1>
        <Slider/>
      </div>
    </div>
  );
};

export default Menu;
