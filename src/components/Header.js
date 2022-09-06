import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black ">
      <a href="/">
        <h1 className="w-full text-[-20px] font-bold text-[#004D00] ">
          Sola Ogundeyi & Co (Chartered Accountants)
        </h1>
      </a>
      <nav className="md:flex whitespace-nowrap flex-nowrap hidden ">
        <Link to="/" className="p-4">
          Home
        </Link>

        <Link to="/" className="p-4">
          Company
        </Link>
        <Link to="/services" className=" p-4 ">
          Our Services
        </Link>
        <Link to="/contact-us" className="p-4">
          Contact Us
        </Link>
      </nav>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[90%] h-full border-r border-r-white-900 bg-[#f5f5f5] ease-in-out duration-500 "
            : " fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-xl font-bold text-[#004D00] m-4">
          Sola Ogundeyi & Co (Chartered Accountants)
        </h1>
        <nav className="p-4 uppercase flex flex-col ">
          <Link to="/" className="p-4 ">
            Home
          </Link>
          <Link to="/" className="p-4 ">
            Company
          </Link>
          <Link to="/" className="p-4 ">
            Our Services
          </Link>
          <Link to="/" className="p-4 ">
            About Us
          </Link>
          <Link to="/contact-us" className="p-4">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
