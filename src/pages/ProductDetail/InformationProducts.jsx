// import Rating from "../../components/Rating/Rating";

import { Rating } from "@mui/material";

const InformationProducts = ({
  dataDetail,
  dataCategory,
  handleDetail,
  setQuantity,
  quantity,
  handleAddToCart,
  handleToggleHeart,
  isFavorite,
}) => {
  console.log(dataDetail.rating, "lllllllllllllll");

  return (
    <div>
      <div className="lg:grid grid-cols-5 gap-7 mt-4">
        <div className="col-span-3 flex gap-3">
          <ul className="flex flex-col gap-4">
            <li className="w-[82px] cursor-pointer p-[10px] rounded-md border border-black hover:border-black transition-all">
              <img className="image" src={dataDetail.thumbnail} alt="" />
            </li>
            {dataCategory
              .filter((category) => category.id !== dataDetail.id)
              .slice(0, 2)
              .map((item) => (
                <li
                  key={item.id}
                  className="w-[82px] cursor-pointer p-[10px] rounded-md border border-black hover:border-black transition-all"
                  onClick={() => handleDetail(item.id)}
                >
                  <img className="image" src={item.thumbnail} alt="" />
                </li>
              ))}
          </ul>
          <div className="w-full overflow-hidden">
            <div className="rounded-xl w-full overflow-hidden">
              <img
                src={dataDetail.thumbnail}
                className=" w-full image group-hover:scale-110 duration-300 transition-all"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-6">
          <h2 className="text-xl lg:text-3xl font-semibold">
            {dataDetail.title}
          </h2>

          <ul className="flex items-center gap-1 mt-4">
            {dataDetail.rating && (
              <Rating
                name="half-rating-read"
                value={dataDetail.rating}
                precision={0.5}
                readOnly
              />
            )}

            {/* <Rating data={dataDetail} /> */}
          </ul>

          <p className="mt-3 text-xl font-semibold">${dataDetail.price}</p>

          <div className="mt-2 pt-2 border-t border-gray">
            <p className="flex items-center gap-2 mt-2">
              <img
                className="w-5 block animate-flicker"
                src="/images/ico_eye.png"
                alt=""
              />
              <span className="font-medium text-sm">
                35 people are viewing this right now
              </span>
            </p>
            <p className="flex items-center gap-2 mt-4">
              <img
                className="w-5 block animate-zoomInOut"
                src="/images/ico_fire.png"
                alt=""
              />
              <span className="text-red-600 font-medium text-sm">
                35 sold in last 18 hours
              </span>
            </p>
            <p className="flex items-center gap-2 mt-6">
              <img className="w-5 block" src="/images/ico_checked.png" alt="" />{" "}
              <span className="text-green font-medium text-sm">
                In stock:{" "}
                <span className="text-red-500">{dataDetail.stock}</span>
              </span>
            </p>

            <p className="mt-5 text-midGray">{dataDetail.description}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center w-max relative">
                <button
                  type="button"
                  className="text-lg block text-[0px] absolute left-4"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <span className="text-2xl leading-[24px]">-</span>
                </button>
                <input
                  type="text"
                  className="w-[120px] h-[50px] border px-10 border-gray rounded-full text-center"
                  value={quantity}
                />
                <button
                  type="button"
                  className="text-lg block text-[0px] absolute right-4"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span className="text-2xl leading-[24px]">+</span>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="h-[50px] bg-black text-white font-semibold text-sm
                px-4 flex-1 text-center flex justify-center items-center
                rounded-full hover:bg hover:bg-white border hover:border-black
                hover:text-black transition-all"
              >
                Add To Cart
              </button>

              <button
                onClick={handleToggleHeart}
                type="button"
                className={`shadow-lg p-3 rounded-full block ${
                  isFavorite ? "bg-red-500" : "bg-white hover:bg-slate-200"
                }`}
              >
                <img className="w-4" src="/images/ico_heart.png" alt="" />
              </button>
            </div>

            <ul className="flex items-center gap-4 mt-6">
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src="/images/ico_reload.png" alt="" />
                  Compare
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src="/images/ico_question.png" alt="" />
                  Question
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src="/images/ico_shipping.png" alt="" />
                  Shipping info
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src="/images/ico_share.png" alt="" />
                  Share
                </button>
              </li>
            </ul>

            <div className="flex items-center mt-6 mb-6 pt-6 pb-6 border-t border-b border-b-gray border-t-gray">
              <div>
                <img
                  className="block w-9"
                  src="/images/ico_shipping2.png"
                  alt=""
                />
              </div>
              <p className="flex-1 ml-4 pl-4 border-l border-l-[#d9d9d9] text-sm">
                Order in the next 22 hours 45 minutes to get it between <br />
                <span className="font-semibold underline">
                  Tuesday, Oct 22{" "}
                </span>{" "}
                <span className="mx-2">and</span>
                <span className="font-semibold underline">
                  {" "}
                  Saturday, Oct 26
                </span>
              </p>
            </div>

            <div className="p-[15px] rounded-xl border border-[#dedede] flex items-start gap-3">
              <div>
                <img src="/images/ico_check.png" className="w-6 block" alt="" />
              </div>
              <div className="text-sm">
                <p className="text-lightGray">
                  Pickup available at{" "}
                  <span className="font-semibold text-black"> Akaze store</span>
                </p>
                <p className="text-xs text-lightGray mt-1">
                  Usually ready in 24 hours
                </p>
                <button type="button" className="underline text-xs mt-4">
                  View store information
                </button>
              </div>
            </div>

            <div className="text-center mt-6 p-6 bg-[#f6f6f6] rounded-lg">
              <p className="text-sm tracking-widest">Guaranteed Checkout</p>
              <img
                className="block mt-3"
                src="/images/img_payment.avif"
                alt=""
              />
            </div>
          </div>

          {/* ================= */}
        </div>
      </div>
    </div>
  );
};

export default InformationProducts;
