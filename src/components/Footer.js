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
    <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-[#004d00] border-t  border-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold py-4 text-[#004d00] ">
          Sola Ogundeyi &amp; Co.
        </h1>
        <address className="pb-2">
          Centage Plaza, 4th Floor, Suite 11 12, Allen Avenue, Lagos Nigeria
        </address>
        <div className="flex flex-col pb-4">
          <a href="tel:+234 (0) 806 693 9279">+234 (0) 806 693 9279</a>
          <a href="tel:+234 (0) 903 862 0562">+234 (0) 903 862 0562</a>
          <a href="tel:+234 (0) 703 741 6965">+234 (0) 703 741 6965</a>
          <a href="mailto:info@solaogundeyi.com"> info@solaogundeyi.com</a>
        </div>
        <span>International Office:</span>
        <address>
          13 Monksmead, Borehamwood Hertfordshire WD6 2LF United Kingdom
        </address>
        <a href="tel:+447415101999">+447415101999</a>

        <div className="flex justify-between md:w-[75%] my-3">
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
