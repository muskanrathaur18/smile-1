import React from "react";
import { Facebook, Twitter, Mail, Linkedin, Share2, MessageSquare } from "lucide-react";

import BlogSection from "../Home/Blog";

export default function BlogDetail() {
  return (
    <>
      <div className="bg-[#8a8a8a] h-[250px] flex flex-col justify-center items-center text-center px-4 sm:px-0">
        <h3 className="text-white text-3xl font-bold">Therefores</h3>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 font-sans shadow-2xl shadow-gray-200 bg-white mt-4 border border-gray-300 rounded-md">
        <div className="w-full h-64 sm:h-96 bg-gray-300 rounded-md"></div>
        <div className="flex flex-wrap justify-center sm:justify-center gap-2 sm:gap-4 mt-4">
          <button className="relative bg-blue-600 text-white px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Facebook size={16} className="absolute left-2" />
            <span className="ml-4">Share</span>
          </button>
          <button className="relative bg-sky-500 text-white px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Twitter size={16} className="absolute left-2" />
            <span className="ml-4">Tweet</span>
          </button>
          <button className="relative bg-red-600 text-white px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Share2 size={16} className="absolute left-2" />
            <span className="ml-4">Pin</span>
          </button>
          <button className="relative bg-blue-700 text-white px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Linkedin size={16} className="absolute left-2" />
            <span className="ml-4">Share</span>
          </button>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#4b2ca0] mt-6">
          Lorem Ipsum Is Simply Dummy Text Of <br />
          The Printing And Type Industry.
        </h1>
        <p className="text-gray-700 mt-4 text-justify leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset.
        </p>
        <h2 className="text-xl font-semibold mt-6 text-gray-900">The Harmful Effects of PBM Audits</h2>
        <p className="text-gray-700 mt-3 text-justify leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset.
        </p>
        <h3 className="text-lg font-semibold mt-6 text-gray-900">Lorem Ipsum Is Simply Dummy Text Of</h3>
        <ul className="list-decimal pl-6 mt-3 space-y-1 text-gray-700">
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 text-gray-900">Prevent Audits from Happening</h2>
        <p className="text-gray-700 mt-3 text-justify leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting.
        </p>
        <p className="text-sm font-bold text-[#573d82] mt-6">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem A.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 mt-10 font-sans border-t border-gray-400 rounded-md">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <button className="relative bg-[#3b5998] text-white rounded px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Facebook size={16} className="absolute left-2" />
            <span className="ml-4">Share</span>
          </button>
          <button className="relative bg-[#55acee] text-white rounded px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Twitter size={16} className="absolute left-2" />
            <span className="ml-4">Tweet</span>
          </button>
          <button className="relative bg-[#cb2027] text-white rounded px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Share2 size={16} className="absolute left-2" />
            <span className="ml-4">Pin</span>
          </button>
          <button className="relative bg-gray-400 text-white rounded px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Mail size={16} className="absolute left-2" />
            <span className="ml-4">Email</span>
          </button>
          <button className="relative bg-[#0077b5] text-white rounded px-4 py-1 text-sm w-24 flex items-center justify-center">
            <Linkedin size={16} className="absolute left-2" />
            <span className="ml-4">Share</span>
          </button>
        </div>
        <div className="flex items-center mt-6 space-x-2 text-gray-700">
          <MessageSquare size={20} />
          <span>Classica</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 text-sm font-medium text-gray-800 space-y-2 sm:space-y-0">
          <span>PACKAGES (0)</span>
          <span>Lorem Ipsum Is Simply Dummy To</span>
        </div>
        <div className="border border-gray-400 rounded mt-3 h-64 flex flex-col justify-end items-end p-3">
          <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="text-purple-600 text-sm">Lorems</button>
            <button className="bg-purple-700 text-white px-5 py-2 rounded-full text-sm">
              LOREM IPSUM IS
            </button>
          </div>
        </div>
      </div>

      <BlogSection />
    </>
  );
}
