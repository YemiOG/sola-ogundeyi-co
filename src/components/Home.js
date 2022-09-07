import React from "react";
import Typed from "react-typed";
import Hero from "../assets/img/accounting.svg";
import Audit from "../assets/img/audit.svg";
import Advisory from "../assets/img/advisory.svg";
import Planning from "../assets/img/planning.svg";
import Lagos from "../assets/img/lagos_logo.png";
import Ogun from "../assets/img/ogun_logo.png";

const Home = () => {
  return (
    <div>
      <div className="text-[black] grid gap-y-0 grid-flow-column md:h-80% mt-16 md:mt-32 grid-cols-1 md:grid-cols-2 md:mb-32">
        <div className="max-w-[800px] w-full  mx-auto text-center flex flex-col justify-center md:mt-[30px] ">
          <p className="uppercase font-bold text-[#004D00]">
            Accounting you can count on
          </p>
          <div className="flex justify-center items-center ">
            <p className="md:text-2xl lg:text-4xl text-xl py-4">We Offer</p>
            <Typed
              className="md:text-2xl lg:text-4xl text-xl md:pl-4 pl-2 text-gray-500"
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
          <h1 className="md:text-2xl md:py-2 sm:text-3xl text-2xl font-bold">
            Get started with a free consultation!
          </h1>
          <a
            href="/contact-us"
            className="bg-[green] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
          >
            Get Started
          </a>
        </div>
        <div className="mt-16">
          {" "}
          <img
            src={Hero}
            alt="Illustration of finance"
            className="w-[300px] place-content-center mx-auto md:w-[500px]"
          />
        </div>
      </div>
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
        <div className="md:flex gap-10 justify-center text-xl hidden md:text-[16.5px] ">
          <p>GATEWAY HOLDINGS</p>
          <p>ELTODA FARMS LTD.</p>
          {/* <p>ALL TECHNOLOGY LTD.</p>
        <p>LUDAY TRAVEL LIMITED</p>
        <p>SOFTSKILLS NIGERIA LTD.</p> */}
        </div>
        <div className="md:flex gap-10 justify-center text-xl hidden md:text-[16px] ">
          <p>ALL TECHNOLOGY LTD.</p>
          <p>LUDAY TRAVEL LIMITED</p>
          <p>SOFTSKILLS NIGERIA LTD.</p>
        </div>
        <div className="md:flex gap-10 justify-center text-xl hidden md:text-[16px]">
          <p>ORRISON SCHILLER HEALTH LTD.</p>
          <p>EUROSPECS INTERNATIONAL LTD.</p>
          {/* <p>REMIGRAPHICS COMMUNICATION LTD.</p>
        <p>SGS INTERNATIONAL INSPECTION SERVICES LTD.</p> */}
        </div>
        <div className="md:flex gap-10 justify-center text-xl hidden md:text-[16px]">
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
      <div className="bg-[#004D00] w-full text-[#FBFEFB] py-16 px-4">
        <div>
          <h1 className="text-2xl text-center mb-10">OUR SERVICES</h1>
          <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-3">
            <div className="flex flex-col">
              <h1 className="text-xl text-center mb-10">AUDIT & ASSURANCE</h1>
              <img
                src={Audit}
                alt="audit"
                className="w-[300px] h-[300px] mx-auto mb-10"
              />
              <span className="mb-10 text-center">
                Our audit approach is designed to comply with both the Nigerian
                and International accounting and auditing standards. Our tried
                and tested approach, together with our multidisciplinary teams
                and effective...
              </span>
              <a
                href="/audit"
                className="bg-[#fbfefb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 uppercase text-center text-[#004d00]"
              >
                Find Out More
              </a>
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl text-center mb-10">
                {" "}
                TAX PLANNING & MANAGEMENT
              </h1>
              <img
                src={Planning}
                alt="audit"
                className="w-[300px] h-[300px] mx-auto mb-10"
              />
              <span className="mb-10 text-center">
                Managing company’s tax strategy and statutory obligations in the
                face of today’s complex puzzle of rules and regulations can
                drain company’s time, money and resources. With dwindling
                sources of revenue...{" "}
              </span>
              <a
                href="/audit"
                className="bg-[#fbfefb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 uppercase text-center text-[#004d00]"
              >
                Find Out More
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl text-center mb-10">
                FINANCIAL ADVISORY SERVICES
              </h1>
              <img
                src={Advisory}
                alt="audit"
                className="w-[300px] h-[300px] mx-auto mb-10"
              />
              <span className="mb-10 text-center">
                Meeting statutory and regulatory obligations and satisfying
                increasing stakeholders’ interest demands for strong corporate
                governance but this continues to provide challenges for many
                organisations...
              </span>
              <a
                href="/audit"
                className="bg-[#fbfefb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 uppercase text-center text-[#004d00]"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
