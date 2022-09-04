import React from "react";
import Audit from "../assets/img/audit.svg";
import Advisory from "../assets/img/advisory.svg";
import Planning from "../assets/img/planning.svg";

const Services = () => {
  return (
    <div className="bg-[#004D00] w-full text-[#FBFEFB] py-16 px-4">
      <div>
        <h1 className="text-2xl text-center mb-10">OUR SERVICES</h1>
        <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-3">
          <div className="flex flex-col">
            <h1 className="text-xl text-center mb-10">AUDIT AND ASSURANCE</h1>
            <img
              src={Audit}
              alt="audit"
              className="w-[300px] h-[300px] mx-auto mb-10"
            />
            <span className="mb-auto text-center">
              Our audit approach is designed to comply with both the Nigerian
              and International accounting and auditing standards. Our tried and
              tested approach, together with our multidisciplinary teams and
              effective...
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
              TAX PLANNING AND MANAGEMENT
            </h1>
            <img
              src={Planning}
              alt="audit"
              className="w-[300px] h-[300px] mx-auto mb-10"
            />
            <span className="mb-auto text-center">
              Managing company’s tax strategy and statutory obligations in the
              face of today’s complex puzzle of rules and regulations can drain
              company’s time, money and resources. With dwindling sources of
              revenue...{" "}
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
            <span className="mb-auto text-center">
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
  );
};

export default Services;
