import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCard } from "../redux-toolkit/featrures/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Rating from "../Rating/Rating";
import { addToHeart, removeHeart } from "../redux-toolkit/featrures/heartSlice";
import { Rating, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BoxProduct = ({ products }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authenSlice.isLogin);
  const dataHeart = useSelector((state) => state.heartSlice.hearts);
  const isFavorite = dataHeart.some((item) => item.id === products.id);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(dataHeart, "dataHeartdataHeart");

  useEffect(() => {
    if (products) {
      setTimeout(() => {
        setIsLoading(true);
      }, 3000);
    }
  }, [products]);

  const handleAddToCart = () => {
    if (isLogin) {
      dispatch(
        addToCard({
          ...products,
          quantity: 1,
        })
      );
      toast.success(`Thêm sản phẩm "${products.title}" thành công`);
    } else {
      navigate("/login");
    }
  };

  const handleToggleHeart = () => {
    if (isFavorite) {
      dispatch(removeHeart(products.id));
      toast.success(`Bỏ sản phẩm yêu thích "${products.title}" thành công`);
    } else {
      dispatch(
        addToHeart({
          ...products,
          quantityHeart: 1,
        })
      );
      toast.success(`Thêm sản phẩm yêu thích "${products.title}" thành công`);
      // toast.success(`Thêm sản phẩm yêu thích "${products.title}" thành công`, {
      //   position: "top-center",
      //   autoClose: 1000,
      // });
    }
  };

  const getDiscountLabel = (discountPercentage) => {
    switch (true) {
      case discountPercentage >= 18:
        return "-30%";
      case discountPercentage >= 15:
        return "-20%";
      case discountPercentage >= 10:
        return "-10%";
      default:
        return "-5%";
    }
  };

  return isLoading ? (
    <li className="mt-6 md:mt-0 text-center group relative ">
      <ToastContainer />
      <div className="bg-red">
        {products.stock !== 0 ? (
          <span className="absolute py-1 text-xs px-2 top-3 left-3 z-10 bg-red-600 text-white rounded-xl">
            {getDiscountLabel(products.discountPercentage)}
          </span>
        ) : (
          <span className="absolute py-1 text-xs px-2 top-3 left-3 z-10 bg-black text-white rounded-xl">
            Out of stock
          </span>
        )}

        <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            <button
              type="button"
              className={`shadow-lg p-3 rounded-full block ${
                isFavorite ? "bg-red-500" : "bg-white hover:bg-slate-200"
              }`}
              onClick={handleToggleHeart}
            >
              <img
                src="/images/ico_heart.png"
                className="image size-4 rounded-full"
                alt=""
              />
            </button>
          </li>

          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img
                src="/images/ico_reload.png"
                className="image size-4 rounded-full"
                alt=""
              />
            </button>
          </li>
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img
                src="/images/ico_search.png"
                className="image size-4 rounded-full"
                alt=""
              />
            </button>
          </li>
        </ul>

        <Link to={`/detail/${products.id}`} className="block">
          <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
            <img
              className="block size-full object-contain image group-hover:scale-110 duration-300 transition-all w-full"
              src={products.thumbnail}
              alt=""
            />
          </div>
          <h3 className="text-15 mt-2">{products.title}</h3>
        </Link>

        <div className="flex justify-center items-center gap-1">
          <div className="flex justify-center items-center gap-1 mt-3">
            <Rating
              name="half-rating-read"
              defaultValue={products.rating}
              precision={0.5}
              readOnly
            />
            {/* <Rating data={products} /> */}
          </div>
        </div>

        <div className="mt-2 relative h-5 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
            <span className="text-red-500 font-bold text-[15px]">
              ${products.price}
            </span>
            <button
              onClick={handleAddToCart}
              className="block uppercase text-xs font-medium tracking-widest mt-1 hover:underline"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </li>
  ) : (
    <li className="mt-6 md:mt-0 text-center group relative">
      <Skeleton variant="rectangular" width={268} height={491} />
    </li>
  );
};

export default BoxProduct;
