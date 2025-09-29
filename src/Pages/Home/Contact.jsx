import React from "react";
import { FaPaperPlane, FaPhoneAlt, FaRegHandPointer} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px] bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#573d82] mb-6 text-center">
        Lorem Ipsum Sim.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[700px] gap-4 md:gap-0">
        <div className="relative flex flex-col items-center justify-center bg-[#6d588f] text-white py-12 md:py-24 cursor-pointer rounded-lg md:rounded-none">
          <FaPaperPlane className="text-2xl md:text-3xl mb-3" />
          <p className="text-xs md:text-sm text-center px-2">
            info@loremipsum.com
          </p>
          <FaRegHandPointer className="hidden md:block absolute bottom-0 -mb-4  text-gray-800 text-xl" />
        </div>
        <div className="flex flex-col items-center justify-center bg-[#afa8a8] text-white py-12 md:py-24 rounded-lg md:rounded-none">
          <FaPhoneAlt className="text-2xl md:text-3xl mb-3" />
          <p className="text-xs md:text-sm">(123) 456-7890</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#4e4e4e] py-12 md:py-24 rounded-lg md:rounded-none">
          <button className="bg-[#573d82] text-white text-xs px-6 py-2 rounded-full">
            WITH·ENDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
