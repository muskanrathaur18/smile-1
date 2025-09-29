import React from "react";

const TextSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[180px] bg-[#573d82] px-4 sm:px-6 lg:px-0">
      {/* Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-white text-center">
        Lorem Ipsum Is Simply Dummy Text Of The A
      </h2>

      {/* Input + Button (Pill Shape) */}
      <div className="flex items-center bg-transparent border border-white rounded-full overflow-hidden w-full max-w-[320px]">
        <input
          type="text"
          placeholder="Lorem Ipsum"
          className="flex-1 px-4 py-2 text-sm sm:text-base text-white placeholder-white bg-transparent focus:outline-none"
        />
        <button className="bg-white text-[#573d82] px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full">
          USESSO
        </button>
      </div>
    </div>
  );
};

export default TextSection;
