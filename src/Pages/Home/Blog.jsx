import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BlogSection = () => {
  const blogs = [
    {
      date: "October 08, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Type",
      desc: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      date: "October 08, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Type",
      desc: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
    {
      date: "October 08, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Type",
      desc: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...",
    },
  ];

  const BlogCard = ({ blog }) => (
    <div className="border border-gray-200 rounded overflow-hidden">
      <div className="w-full h-40 bg-gray-300"></div>
      <div className="p-4">
        <p className="text-xs sm:text-sm font-semibold mb-2">{blog.date}</p>
        <h3 className="text-sm sm:text-base font-bold text-[#573d82] mb-2 hover:underline cursor-pointer">
          {blog.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">{blog.desc}</p>
        <a
          href="#"
          className="text-xs sm:text-sm text-[#573d82] font-semibold flex items-center gap-1"
        >
          Your More <span>›</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-white">
      {/* Heading and Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#573d82]">
          Lorem Ipsum Is
        </h2>
        <Link
          to="/"
          className="bg-[#573d82] text-white text-sm sm:text-base px-5 py-2 rounded-full inline-block"
        >
          LOREM IPSUM IS
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },     // Mobile
          640: { slidesPerView: 2 },   // Tablet
          1024: { slidesPerView: 3 },  // Desktop
        }}
        className="py-4"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSection;
