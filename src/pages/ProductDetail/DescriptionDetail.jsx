import { Rating } from "@mui/material";
import { useState } from "react";
// import Rating from "../../components/Rating/Rating";
import { FiUser, FiThumbsUp } from "react-icons/fi";

const dataDetail = [
  {
    name: "description",
    title: "Description",
  },
  {
    name: "review",
    title: "Review",
  },
  {
    name: "shipping",
    title: "Shipping",
  },
  {
    name: "return",
    title: "Return",
  },
];

const DescriptionDetail = ({ dataDescription }) => {
  const [isCheck, setIsCheck] = useState("description");
  const handleClick = (name) => {
    setIsCheck(name);
  };
  console.log(dataDescription, "dataDescriptiondataDescription");

  const checkDetailDescription = (check) => {
    switch (true) {
      case check === "description":
        return (
          <div className="mt-9 lg:mt-20">
            <p className="text-[#8a8a8a] leading-7">
              {dataDescription.description}
            </p>
          </div>
        );
      case check === "review":
        return dataDescription.reviews.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full">
                <FiUser className="text-gray-600 w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{item.reviewerName}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <div className="flex mt-1">
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>

                <p className="mt-2 text-gray-700">
                  Đúng với mô tả:{" "}
                  <span className="font-semibold">đúng nha</span>
                </p>
                <p className="mt-2 text-gray-700">{item.comment}</p>

                <div className="mt-3 flex items-center text-gray-500 text-sm">
                  <FiThumbsUp className="w-5 h-5 cursor-pointer hover:text-blue-500" />
                  <span className="ml-1">2</span>
                </div>
              </div>
            </div>
          </div>
        ));
      case check === "shipping":
        return (
          <div className="mt-9 lg:mt-20">
            <p className="text-[#8a8a8a] leading-7">
              {dataDescription.shippingInformation}
            </p>
          </div>
        );
      case check === "return":
        return (
          <div className="mt-9 lg:mt-20">
            <p className="text-[#8a8a8a] leading-7">
              Tinh xảo và sắc nét được tạo khối đẹp mắt tạo nên nét sang trọng
              và đẳng cấp cho món phụ kiện luôn dễ dàng hấp dẫn các quý ông và
              là điểm sáng tinh tế cho mọi trang phục.
            </p>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <div className="mt-9 lg:mt-24">
        <ul className="flex items-center lg:justify-center gap-6">
          {dataDetail.map((item) => (
            <li key={item.title}>
              <button
                type="button"
                className={
                  item.name === isCheck
                    ? "text-lg font-semibold py-2 px-4 bg-black text-white rounded-full"
                    : "lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                }
                onClick={() => handleClick(item.name)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {checkDetailDescription(isCheck)}
      </div>
    </div>
  );
};

export default DescriptionDetail;
