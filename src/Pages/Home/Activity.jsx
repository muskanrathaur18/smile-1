import React from "react";

export default function StatsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#573D82]">
          Lorem Ipsum Dolor Sit A{" "}
          <span className="text-[#fed500] italic">Commod</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 mt-10">
          {[ 
            { number: "000+", label: "LOREMIS" },
            { number: "00+", label: "LOREMIS IPSUM NOT" },
            { number: "0000+", label: "LOREMIS IPSUM NOT" },
            { number: "0,000+", label: "LOREMIS IPSUM NOT" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center border-2 border-[#fed500] rounded-full w-28 h-28 sm:w-32 sm:h-32 mx-auto"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-[#573D82]">{item.number}</h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
