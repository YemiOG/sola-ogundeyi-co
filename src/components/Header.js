import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black ">
      <h1 className="w-full text-xl font-bold text-[green] ">
        Sola Ogundeyi & Co (Chartered Accountants)
      </h1>
      <ul className="md:flex whitespace-nowrap flex-nowrap hidden ">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">Company</li>
        <li className=" p-4 ">Our Services</li>

        <li className="p-4">Contact Us</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-white-900 bg-[#f5f5f5] ease-in-out duration-500 "
            : " fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-xl font-bold text-[green] m-4">
          Sola Ogundeyi & Co (Chartered Accountants)
        </h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">
            <a href="/">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About Us</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
