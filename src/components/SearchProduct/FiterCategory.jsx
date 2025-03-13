import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const FiterCategory = ({ setCategory, category, categories }) => {
  //   console.log(setCategory, categories, category, "kkkkkkkkkkkkkkkkkk");

  return (
    <div className="col-span-1 p-4">
      <nav className="bg-white rounded-sm">
        <h3 className="text-lg text-gray-800 px-4 pt-4 uppercase font-normal">
          <i className="fa fa-list text-base mr-1 relative top-[1px]"></i>
          CATEGORY
        </h3>
        <ul className="px-2 pb-2 list-none ml-2">
          <li
            className={`relative border-t border-gray-200 first:border-0 ${
              category ? "text-black font-medium " : "text-red-600 font-bold"
            }`}
            onClick={() => setCategory("")}
          >
            <a
              href="#"
              className="block text-primary text-sm py-2 px-5 relative transition-all duration-100 ease-linear hover:text-primary hover:-right-1"
            >
              All
            </a>
          </li>
          {categories.map((item, index) => (
            <li
              key={index}
              className={`relative border-t border-gray-200 first:border-0 ${
                item.slug !== category
                  ? "text-black font-medium"
                  : "text-red-600 font-bold"
              }`}
              onClick={() => setCategory(item.slug)}
            >
              <a
                href="#"
                className="block text-primary text-sm py-2 px-5 relative transition-all duration-100 ease-linear hover:text-primary hover:-right-1"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <h3 className="text-lg text-gray-800 px-4 pt-4 uppercase font-normal">
          {/* <i className="fa fa-list text-base mr-1 relative top-[1px]"></i> */}
          <ProductionQuantityLimitsIcon />
          Availability
        </h3>
        <ul className="px-2 pb-2 list-none ml-2">
          <li className={`relative border-t border-gray-200 first:border-0 `}>
            <a
              href="#"
              className="block text-black font-medium  text-sm py-2 px-5 relative transition-all duration-100 ease-linear hover:-right-1"
            >
              In stock (16)
            </a>
          </li>
          <li className={`relative border-t border-gray-200 first:border-0 `}>
            <a
              href="#"
              className="block text-black font-medium text-sm py-2 px-5 relative transition-all duration-100 ease-linear  hover:-right-1"
            >
              Out of stock (1)
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FiterCategory;
