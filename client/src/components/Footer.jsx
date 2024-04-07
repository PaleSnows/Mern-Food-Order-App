import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-slate-300">
        <div className="flex flex-row justify-around pb-9  ">
          {/* navigation links */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Navigation Links</h1>
            <div className="flex flex-col gap-1 text-lg">
              <Link>Home</Link>
              <Link>Menu</Link>
              <Link>Cart</Link>
              <Link>About</Link>
            </div>
          </div>
          {/* social media links */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Social Media Links</h1>
            <div className="flex flex-row gap-3">
              <FaGithub size={24}/>
              <FaLinkedin size={24}/>
              <FaFacebook size={24}/>
              <FaInstagram size={24}/>
            </div>
          </div>
          {/* app store/play store icons */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Download Our App</h1>
            <div className="flex flex-row cursor-pointer ">
              <div className="px-16 py-6 border">
                <IoLogoGooglePlaystore className="mt-2" size={24} />
              </div>
              <div className="px-16 py-6 border">
                <IoLogoAppleAppstore className="mt-2" size={24} />
              </div>
            </div>
          </div>
          {/* support information */}
          <div className="flex flex-col ">
            <h1 className="text-xl font-semibold">Support</h1>
            <div className="flex flex-col gap-1 text-lg">
              <h1>foodorder@gmail.com</h1>
              <h1>9898989898</h1>
            </div>
          </div>
        </div>
        {/* copyright information */}
        <hr />
        <div className="py-5">
          <h1 className="text-center text-xl font-semibold">
            © 2024, Renzaki Burger House
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
