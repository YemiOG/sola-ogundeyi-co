import React from "react";
import Lagos from "../assets/img/lagos_logo.png";
import Ogun from "../assets/img/ogun_logo.png";

const Clients = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <p className="text-3xl text-gray-500 text-center mb-10">OUR CLIENTS</p>
      <div className="flex justify-center ">
        <img
          src={Lagos}
          className="w-[200px]"
          alt="lagos state government logo"
        ></img>
        <img
          src={Ogun}
          className="w-[150px]"
          alt="Ogun state government logo"
        ></img>
      </div>
      <div className="flex justify-between">
        <p>GATEWAY HOLDINGS</p>
        <p>SGS INTERNATIONAL INSPECTION SERVICES LIMITED</p>
        <p>ELTODA FARMS LIMITED</p>
      </div>
      <div className="flex justify-between">
        <p>REMIGRAPHICS COMMUNICATION LIMITED</p>
        <p>EUROSPECS INTERNATIONAL LIMITED</p>
        <p>ALL TECHNOLOGY LIMITED</p>
      </div>
      <div className="flex justify-between">
        <p>ORRISON SCHILLER HEALTH LIMITED</p>
        <p>SOFTSKILLS NIGERIA LIMITED</p>
        <p>REMIGRAPHICS COMMUNICATION LIMITED</p>
      </div>
    </div>
  );
};

export default Clients;
