import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { bannerProduct } from "../../../utils/constents/mockData";

const BannerProduct = () => {
  return (
    <div className="pb-7">
      <section className="pt-[90px]"></section>
      <div className="bg-white py-7">
        <div className="container w-full px-4">
          <div className="flex flex-col md:flex-row gap-2">
            {/* Banner lớn bên trái */}
            <div className="w-full md:w-2/3">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
              >
                {bannerProduct.map((item, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <img
                      src={item.imgBannerProducts}
                      alt="Big Banner"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Cột quảng cáo bên phải */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <img
                src="https://cf.shopee.vn/file/vn-11134258-7ra0g-m70vp8z3qlvc4f_xhdpi"
                alt="Banner 1"
                className="w-full h-[100px] md:h-full object-cover rounded-lg"
              />
              <img
                src="https://cf.shopee.vn/file/vn-11134258-7ra0g-m70vqtxudns15b_xhdpi"
                alt="Banner 2"
                className="w-full h-[100px] md:h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
