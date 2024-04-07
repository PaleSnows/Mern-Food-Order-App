import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import { GiHamburger } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const showHandler = () => {
    setNavBar(!navBar);
  };
  return (
    <>
      <div className="flex justify-between p-10 bg-black">
        {/* logo */}
        <div className="relative flex flex-row">
          <GiHamburger className="absolute  text-orange-500 mt-2" size={30} />
          <h1 className="text-xl sm:text-4xl font-bold text-slate-200 pl-9 mt-2 sm:mt-0 ">
            Renzaki <span className="text-slate-400">Burger House</span>
          </h1>
        </div>

        {/* pages */}
        <div className="space-x-5 text-xl font-semibold mt-3  text-sky-200 hidden sm:flex  ">
          <Link className="focus:underline">Home</Link>
          <Link>Menu</Link>
          <Link>Cart</Link>
          <Link>About</Link>
        </div>

        {/* searchbar */}
        <div className="relative flex gap-5">
          <div className="">
            <BsCartFill
              className="hidden sm:inline text-slate-300 mt-2"
              size={28}
            />
            <button className="absolute hidden sm:inline top-1 left-3 bg-red-500 p-1 rounded-full" type=""></button>
          </div>
          <Profile />
        </div>

        {/* Hamburger */}
        <RxHamburgerMenu
          className="text-sky-200 mt-3 inline sm:hidden"
          onClick={showHandler}
        />
      </div>
      {navBar && (
        <div className="bg-black text-slate-300 font-semibold flex sm:hidden flex-col px-10 py-5 text-lg gap-3 ">
          <Link to={"/"} className="cursor-default">
            Home
          </Link>
          <Link to={"/menu"} className="cursor-default">
            Menu
          </Link>
          <Link to={"/cart"} className="cursor-default">
            Cart
          </Link>
          <Link to={"/about"} className="cursor-default">
            About
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
