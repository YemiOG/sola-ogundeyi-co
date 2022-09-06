import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <p className="text-2xl text-gray-500 text-center mb-10">CONTACT US</p>
        <p className="text-xl text-[#004d00] text-center uppercase mb-10">
          Get a free Qoute
        </p>
        <div className="flex flex-col mx-5">
          <input
            placeholder="Full Name"
            type="text"
            className="w-full h-[50px] mb-4 text border placeholder:px-5 py-2 "
            required
          />
          <input
            placeholder="Email Address"
            type="email"
            className="w-full h-[50px] mb-4 text border placeholder:px-5 py-2"
            required
          />
          <input
            placeholder="Type of Business"
            type="text"
            className="w-full h-[50px] mb-4 text border placeholder:px-5 py-2 "
            required
          />
          <input
            placeholder="Average Number of Monthly Transactions"
            type="text"
            className="w-full h-[50px] mb-4 text-left border placeholder:px-5 py-2"
            required
          />
          <textarea
            placeholder="Tell us more about your accounting needs."
            type="text"
            className="w-full h-[100px] mb-4 text border placeholder:px-5 placeholder:pt-3"
            required
          />
          <textarea
            placeholder="Tell us any other questions, concerns, or special needs that you have"
            type="text"
            className="w-full h-[100px] mb-4 text border placeholder:px-5 placeholder:pt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
