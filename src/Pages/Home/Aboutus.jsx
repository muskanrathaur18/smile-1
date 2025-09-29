import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ContentImageSection = () => {
  return (
    <div className="bg-[#f4f4f4] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Lorem Ipsum Title
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className="text-[#573d82] border-b border-[#573d82] text-base sm:text-lg font-semibold inline-flex items-center gap-2 hover:text-purple-900 hover:border-purple-900 transition">
            Learn More <FaArrowRight className="text-sm" />
          </Link>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-52 sm:h-64 md:h-80 bg-[#c4c4c4] shadow-lg flex items-center justify-center">
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentImageSection;
