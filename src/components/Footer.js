import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#004d00]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#004d00] ">
          Sola Ogundeyi &amp; Co.
        </h1>
        <p className="py-4">
          We are structured with the interest of our clients in mind which
          enables our clients to benefit from quick response to issues..{" "}
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaFacebookSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
      <p> &copy; Built by 'Yemi Ogundeyi</p>
    </div>
  );
};

export default Footer;
