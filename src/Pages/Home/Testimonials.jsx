import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      name: "Lorem Ipsum | Simply",
      role: "Lorem",
      bg: "bg-white",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has to been the industry's standard dummy text ever since the 1500s.",
      name: "Lorem Ipsum | Simply",
      role: "Lorem",
      bg: "bg-blue-50",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Lorem Ipsum | Simply",
      role: "Lorem",
      bg: "bg-white",
    },
  ];

  return (
    <div className="py-4 bg-gray-100">
      <h2 className="text-center text-2xl font-bold text-[#573d82] mb-10">
        Lorem Ipsum Dolor Sit An
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-5xl pb-10 mx-auto"
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile: 1 slide
          },
          640: {
            slidesPerView: 2, // Tablet and above: 2 slides
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-6 shadow-sm ${item.bg} h-[250px] flex flex-col justify-between`}
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.text}
              </p>
              <div>
                <p className="text-[#573d82] font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
