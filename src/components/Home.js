import React from "react";
import Typed from "react-typed";
import Hero from "../assets/img/accounting.svg";

const Home = () => {
  return (
    <div>
      <div className="text-[black] grid gap-y-0 grid-flow-row h-screen grid-cols-1 md:grid-cols-2">
        <div className="max-w-[800px] mt-[-96px] w-full  mx-auto text-center flex flex-col justify-center md:mt-[-250px]">
          <p className="uppercase font-bold text-[green]">
            Accounting you can count on
          </p>
          <div className="flex justify-center items-center ">
            <p className="md:text-4xl sm:text-4xl text-xl py-4">We Offer</p>
            <Typed
              className="md:text-4xl sm:text-4xl text-xl md:pl-4 pl-2 text-gray-500"
              strings={[
                "Audit and Assurance",
                "Tax Planning",
                "Financial Advisory",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </div>
          <h1 className="md:text-4xl md:py-6 sm:text-3xl text-2xl font-bold">
            Get started with a free consultation!
          </h1>
          <a
            href="/contact-us"
            className="bg-[green] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
          >
            Get Started
          </a>
        </div>
        <div>
          {" "}
          <img
            src={Hero}
            alt="Illustration of finance"
            className="w-[500px] place-content-center mx-auto md:mt-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
