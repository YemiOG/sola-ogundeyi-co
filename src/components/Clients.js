import React from "react";
import Lagos from "../assets/img/lagos_logo.png";
import Ogun from "../assets/img/ogun_logo.png";
import Typed from "react-typed";

const Clients = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <p className="text-2xl text-gray-500 text-center mb-10">OUR CLIENTS</p>
      <div className="flex justify-center mb-10 ">
        <img
          src={Lagos}
          className="w-[100px] md:w-[200px]"
          alt="lagos state government logo"
        ></img>
        <img
          src={Ogun}
          className="w-[75px] md:w-[150px]"
          alt="Ogun state government logo"
        ></img>
      </div>
      <div className="md:flex gap-10 justify-center text-xl hidden md:text-[20px] ">
        <p>GATEWAY HOLDINGS</p>
        <p>ELTODA FARMS LTD.</p>
        {/* <p>ALL TECHNOLOGY LTD.</p>
        <p>LUDAY TRAVEL LIMITED</p>
        <p>SOFTSKILLS NIGERIA LTD.</p> */}
      </div>
      <div className="md:flex gap-10 justify-center text-xl hidden md:text-[20px] ">
        <p>ALL TECHNOLOGY LTD.</p>
        <p>LUDAY TRAVEL LIMITED</p>
        <p>SOFTSKILLS NIGERIA LTD.</p>
      </div>
      <div className="md:flex gap-10 justify-center text-xl hidden md:text-[20px]">
        <p>ORRISON SCHILLER HEALTH LTD.</p>
        <p>EUROSPECS INTERNATIONAL LTD.</p>
        {/* <p>REMIGRAPHICS COMMUNICATION LTD.</p>
        <p>SGS INTERNATIONAL INSPECTION SERVICES LTD.</p> */}
      </div>
      <div className="md:flex gap-10 justify-center text-xl hidden md:text-[20px]">
        <p>REMIGRAPHICS COMMUNICATION LTD.</p>
        <p>SGS INTERNATIONAL INSPECTION SERVICES LTD.</p>
      </div>
      <div className="flex gap-10 justify-center text-[8px] md:text-[12px] md:hidden">
        <Typed
          className="md:text-2xl lg:text-4xl text-xl md:pl-4 pl-2 text-black"
          strings={[
            "GATEWAY HOLDINGS",
            "ELTODA FARMS LTD",
            "ALL TECHNOLOGY LTD.",
            "LUDAY TRAVEL LIMITED",
            "SOFTSKILLS NIGERIA LTD.",
            "ORRISON SCHILLER HEALTH LTD.",
            "EUROSPECS INTERNATIONAL LTD.",
            "REMIGRAPHICS COMMUNICATION LTD.",
            "SGS INTERNATIONAL INSPECTION SERVICES LTD.",
          ]}
          typeSpeed={80}
          backSpeed={20}
          loop
        />
      </div>
    </div>
  );
};

export default Clients;
