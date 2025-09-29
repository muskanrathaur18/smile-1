import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ correct import
import "swiper/css";

const Card = ({ showText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-white shadow-xl p-6 flex flex-col justify-between relative group min-w-[250px] sm:min-w-auto">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-yellow-400 rounded-full" />
      </div>

      <h3 className="text-center text-gray-800 font-semibold mb-3 text-sm sm:text-base md:text-lg">
        Embarrassing
      </h3>

      {showText && (
        <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#573d82]"></div>

      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleClick}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300 hover:bg-[#573d82] hover:text-white transition-all duration-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="py-4 bg-white px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#573d82] mb-12">
        Lorem Ipsum Is
      </h2>

      <div className="max-w-5xl mx-auto">
        {/* Mobile Swiper */}
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <Card showText={true} />
            </SwiperSlide>
            <SwiperSlide>
              <Card showText={true} />
            </SwiperSlide>
            <SwiperSlide>
              <Card showText={true} />
            </SwiperSlide>
            <SwiperSlide>
              <Card showText={true} />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <Card showText={true} />
          <Card showText={true} />
          <Card showText={true} />
          <Card showText={true} />
          <Card showText={true} />
          <Card showText={true} />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-6 sm:px-8 py-2 bg-[#573d82] text-white rounded-full shadow text-sm sm:text-base">
          IN A FREE HOUR WHEN
        </button>
      </div>
    </div>
  );
};

export default CardGrid;
