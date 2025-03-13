import ApiProduct from "../../services/ApiProduct";
import CategoryProdycts from "./CategoryProdycts";
import useFetch from "../Hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { dataCategoryImg } from "../../utils/constents/mockData";

const OurCategories = () => {
  const { data: dataCategoryList, loading } = useFetch(
    ApiProduct.getAllCategoryList,
    [],
    (data) =>
      data.map((category, index) => ({
        title: category,
        imgCategory:
          dataCategoryImg[index]?.imgCategory ||
          "https://via.placeholder.com/150", // Gán ảnh theo vị trí
      }))
  );

  if (loading) return <p>Loading...</p>;

  console.log(dataCategoryList, "dataCategoryList");

  return (
    <div>
      <section className="mt-9 lg:mt-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Our Categories</h2>

          <div className="max-w-screen-lg w-full mx-auto mt-11">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation={true}
              className="swiper-container mt-10 max-w-screen-lg w-full"
              breakpoints={{
                320: { slidesPerView: 1 }, // Điện thoại nhỏ
                480: { slidesPerView: 2 }, // Điện thoại lớn
                768: { slidesPerView: 3 }, // Tablet
                1024: { slidesPerView: 4 }, // Màn hình lớn
              }}
            >
              {dataCategoryList.map((category) => (
                <SwiperSlide key={category} className="swiper-slide">
                  <CategoryProdycts category={category} checkClass={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCategories;
