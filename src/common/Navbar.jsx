import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Many", path: "/many" },
    { name: "Many Variations A", path: "/variations-a" },
    { name: "Passage", path: "/passage" },
    { name: "Chunk", path: "/chunk" },
    { name: "Combine", path: "/combine" },
    { name: "Therefores", path: "/services" },
    { name: "Text", path: "/blog" },
    { name: "Commo Us", path: "/Contact" },
  ];

  return (
    <nav className="bg-white shadow-md font-[Neue_Haas_Grotesk_Display_Pro] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-16 w-auto"
                src="/assets/images/Logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Right Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="relative inline-flex items-center px-1 pt-1 text-md font-medium text-[#573D82]
                           before:content-[''] before:absolute before:-top-1 before:left-0 before:w-full before:h-[2px] 
                           before:bg-[#573D82] before:scale-x-0 hover:before:scale-x-100 
                           before:origin-center before:transition-transform before:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#573D82] 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#573D82]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu (Slide from Left) */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className="relative w-64 h-full bg-white shadow-lg z-50 flex flex-col">
          {/* Top with Logo & Close */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img
                className="h-12 w-auto"
                src="/assets/images/Logo.png"
                alt="Logo"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-[#573D82] hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-[#573D82] hover:bg-gray-50 px-3 py-2 rounded-md transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
