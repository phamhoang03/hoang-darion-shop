import { useNavigate } from "react-router-dom";

const CategoryProdycts = ({ category }) => {
  console.log(category, "ddddddddddđ");

  const navigate = useNavigate();
  const handleClickPageCategory = () => {
    navigate(`/product?category=${category?.title}`);
  };
  return (
    <li onClick={handleClickPageCategory} key={category.id}>
      <div className="rounded-[20px] overflow-hidden relative group">
        <img className="image" src={category.imgCategory} alt="" />
        <a
          href="#none"
          className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
        >
          {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
        </a>
      </div>
    </li>
  );
};

export default CategoryProdycts;
