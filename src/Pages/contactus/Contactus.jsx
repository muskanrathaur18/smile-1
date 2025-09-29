import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#8a8a8a] h-[270px] text-white flex flex-col justify-center items-center text-center px-4">
        <h3 className="font-bold text-3xl">COMMOD US</h3>
        <p className="mt-2 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing typesetting.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-4 mb-16 p-8">
        {[
          { icon: MapPin, title: "Lorem Ipsum", desc: "Lorem Ipsum is simply dummy text of the printing typesetting.", info: "WHEN KNOWN" },
          { icon: MapPin, title: "Lorem Ipsum", desc: "Lorem Ipsum is simply dummy text of the printing typesetting.", info: "WHEN KNOWN" },
          { icon: Phone, title: "Lorem Ipsum", desc: "Lorem Ipsum is simply dummy text of the printing typesetting.", info: "WHEN KNOWN" },
          { icon: Mail, title: "Lorem Ipsum", desc: "Lorem Ipsum is simply dummy text of the printing typesetting.", info: "WHEN KNOWN" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center max-w-xs w-full sm:w-auto">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            <p className="font-bold text-sm mt-4">{item.info}</p>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-light text-purple-600 text-center mb-6">
          Lorem Ipsum is simply do
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Lorem*"
              className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-gray-700 placeholder-gray-500 focus:border-purple-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Ipsum*"
              className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-gray-700 placeholder-gray-500 focus:border-purple-600 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Which*"
              className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-gray-700 placeholder-gray-500 focus:border-purple-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Specimen*"
              className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-gray-700 placeholder-gray-500 focus:border-purple-600 focus:outline-none"
            />
          </div>
          <div className="pt-4">
            <textarea
              placeholder="Passage"
              rows="4"
              className="w-full border-0 border-b border-gray-300 bg-transparent pb-2 text-gray-700 placeholder-gray-500 focus:border-purple-600 focus:outline-none resize-none"
            ></textarea>
          </div>
          <div className="text-center pb-8">
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              LOREM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
