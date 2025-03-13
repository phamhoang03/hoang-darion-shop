import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ApiProduct from "../../services/ApiProduct";
import CategoryProdycts from "./CategoryProdycts";
import useFetch from "../Hooks/useFetch";
import { dataCategoryImg } from "../../utils/constents/mockData";

const CategoryList = () => {
  const { data: dataCategoryList } = useFetch(
    () => ApiProduct.getAllCategoryList(),
    [],
    (data) =>
      data.map((category, index) => ({
        title: category, // Danh mục từ API
        imgCategory:
          dataCategoryImg[index]?.imgCategory ||
          "https://via.placeholder.com/150", // Gán ảnh theo vị trí
      }))
  );

  return (
    <div>
      <section className="mt-8 lg:mt-24">
        <div className="container">
          <div className="lg:flex justify-between items-center">
            <h2 className="text-3xl font-bold">Our Categories</h2>
            <a
              href="/product"
              className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
            </a>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3} // Hiển thị 3 item cùng lúc
            spaceBetween={20}
            navigation={true}
            pagination={{ clickable: true }}
            className="mt-10"
          >
            {dataCategoryList
              ? dataCategoryList.map((category, index) => (
                  <SwiperSlide key={index}>
                    <CategoryProdycts category={category} checkClass={false} />
                  </SwiperSlide>
                ))
              : "Loading..."}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CategoryList;
