import React from "react";

const GrayDivWithButton = () => {
  return (
    <div className="bg-[#573d82] p-6 sm:p-8 max-w-full mx-auto min-h-[320px] flex flex-col justify-center items-center text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
        Lorem Ipsum Title
      </h2>
      <p className="text-sm sm:text-base text-white mb-4 max-w-3xl px-2 sm:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="text-sm sm:text-base text-white mb-6 max-w-3xl px-2 sm:px-0">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex justify-center">
        <button className="border border-white text-white px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default GrayDivWithButton;
