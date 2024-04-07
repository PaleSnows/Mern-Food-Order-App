import React from "react";
import Search from "./extras/Search";
import List from "./extras/List";

const Menu = () => {
  return (
    <div className="flex flex-row bg-black gap-5">
      <div className="">
        <Search />
      </div>
      <div className="">
        <List />
      </div>
    </div>
  );
};

export default Menu;
