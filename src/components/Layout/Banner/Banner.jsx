// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { dataBanner } from "../../../utils/constents/mockData";
const Banner = () => {
  return (
    <div>
      <div className="relative overflow-hidden h-[680px] object-cover ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <img
              src={dataBanner.banner1}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dataBanner.banner2}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dataBanner.banner3}
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="slide-in-left text-xl lg:text-4xl font-bold text-white lg:leading-10 animate-slideInLeft">
            Harmony in Design: <br /> Blending Form and Function
          </h2>
          <a
            href="#none"
            className="slide-in-left mt-4 lg:mt-8 h-9 border border-white px-7 inline-flex items-center font-semibold text-white rounded-full text-[15px] hover:bg-white hover:text-black transition-all duration-300"
          >
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
