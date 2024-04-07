import React from "react";
import Search from "./extras/Search";
import List from "./extras/Lists";

const Menu = () => {
  return (
    <div className="flex flex-row bg-black gap-5">
      <div className="  flex-1">
        <Search />
      </div>
      <div className="flex-1">
        <List />
      </div>
    </div>
  );
};

export default Menu;
