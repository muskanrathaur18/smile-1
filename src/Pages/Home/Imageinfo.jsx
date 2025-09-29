import React from "react";

const ContentImageSection = () => {
  return (
    <div className="bg-[#f4f4f4] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Lorem Ipsum Title
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-[#573d82] text-white px-6 sm:px-8 py-2 rounded-full text-base sm:text-lg font-semibold">
            Learn More
          </button>
        </div>

        {/* Right Div*/}
        <div className="md:w-1/2 flex justify-center w-full">
          <div className="w-full h-64 md:h-80 bg-[#c4c4c4] shadow-lg flex items-center justify-center">
            <p className="text-gray-400 text-xl md:text-2xl">
              Image/Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentImageSection;
