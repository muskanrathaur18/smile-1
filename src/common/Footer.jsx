import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#573d82] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Left Description */}
        <div>
          <img
            src="/assets/images/Logo.png"
            alt="Logo"
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">LOREM IPSUM</h3>
          <ul className="space-y-2 text-sm">
            <li>Many</li>
            <li>Many Variations A</li>
            <li>Passage</li>
            <li>Chunk</li>
            <li>Combine</li>
            <li>Therefore</li>
            <li>Text</li>
            <li>Commou Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">COMMOU US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1" /> (123)-456-7890
            </li>
            <li className="flex items-start gap-2 break-words">
              <FaEnvelope className="mt-1" /> info@lorem.ipsum
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" /> Lorem Ipsum is simply dummy
              text of the printing and typesetting
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">WITH SO</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-white text-purple-800 p-2 rounded-full flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-purple-800 p-2 rounded-full flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-purple-800 p-2 rounded-full flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-white text-purple-800 p-2 rounded-full flex items-center justify-center"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs border-t border-gray-500 py-3 px-4">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been
      </div>
    </footer>
  );
};

export default Footer;
