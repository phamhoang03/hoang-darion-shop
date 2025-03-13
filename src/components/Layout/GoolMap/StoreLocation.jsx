import MapComponent from "./MapComponent";

const StoreLocation = () => {
  return (
    <div className="container w-full pt-16 pb-8 bg-gray-100">
      {/* Thanh chọn địa điểm */}
      <div className="flex justify-end">
        <select className="border px-2 py-1 rounded">
          <option>Thái Nguyên</option>
        </select>
      </div>

      {/* Phần thông tin & bản đồ */}
      <div className="flex flex-col md:flex-row mt-4 bg-[#ebebe9]  shadow-md overflow-hidden">
        {/* Thông tin cửa hàng */}
        <div className="p-6  w-full md:w-1/3">
          <h2 className="font-bold text-lg flex items-center">
            <span className="text-pink-700 mr-2">📍</span> CH VINCOM PLAZA THÁI
            NGUYÊN
          </h2>
          <p className="text-gray-700 mt-2">
            L1-K6, tầng L1, Vincom Plaza Thái Nguyên, đường Lương Ngọc Quyến, P.
            Quang Trung, TP.Thái Nguyên.
          </p>
          <p className="text-pink-700 font-bold mt-2">032 9556 145</p>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-2/3">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
