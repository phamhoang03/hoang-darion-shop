import { useEffect, useState } from "react";
// import PageSearch from "../../components/SearchProduct/PageSearch";
import ApiBlogNews from "../../services/ApiBlogNews";
import { useDispatch, useSelector } from "react-redux";
import { toPages } from "../../components/redux-toolkit/featrures/blogSlice";
import MainBlog from "./MainBlog";
import { Link } from "react-router-dom";
import ApiProduct from "../../services/ApiProduct";
import useFetch from "../../components/Hooks/useFetch";
import BoxProduct from "../../components/Products/BoxProduct";
import { categoryBlog } from "../../utils/constents/mockData";
import { Pagination } from "@mui/material";

const Blog = () => {
  //   const handleClickPage = () => {};
  // const [isChechPage, setIsChechPage] = useState(1);
  // const [formDataBlog, setFormDataBlog] = useState({
  //   limit: 5,
  //   page: 1,
  // });

  const blogForm = useSelector((state) => state.blogSlice);

  console.log(blogForm, "blogFormblogForm");

  const [dataBlog, setDataBlog] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [category, setCategory] = useState(2);
  const dispatch = useDispatch();
  const Pages = [...Array(totalPage).keys()].map((i) => i + 1);
  // console.log(Pages, "kllllllllll");

  const fetchApiDataBlog = async (blogForm, category) => {
    const res = await ApiBlogNews.getApiBlog(blogForm, category);
    console.log(res, "fetchApiDataBlogPage");
    if (res.status === 200) {
      setDataBlog(res.data.data);
      setTotalPage(res.data.meta.last_page);
    }
  };

  const { data: dataPtodroductSeller } = useFetch(
    () => ApiProduct.getAllProduct(),
    [],
    (data) => data.products.slice(9, 10)
  );

  useEffect(() => {
    fetchApiDataBlog(blogForm, category);
    // setIsChechPage(blogForm.page);
  }, [blogForm, category]);

  const handleClickPage = (page) => {
    dispatch(
      toPages({
        ...blogForm,
        page: page,
      })
    );
    // setFormDataBlog({
    //   ...formDataBlog,
    //   page: formDataBlog.page + 1,
    // });
  };

  const handleClickCategory = (id) => {
    console.log(id);
    setCategory(id);
  };

  console.log(dataBlog, "fetchApiDataBlog");
  return (
    <div>
      <section className="pt-[90px]"></section>
      <div className="container mt-6 mx-auto p-4 grid grid-cols-12 gap-4">
        {/* Sidebar Left */}
        <aside className="col-span-3 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-red-600 font-bold text-lg border-b pb-2">
            BLOG TIN TỨC
          </h2>
          <ul className="mt-2 space-y-2">
            {categoryBlog.map((item, index) => (
              <li
                key={index}
                className={`border p-2 rounded-lg  cursor-pointer ${
                  item.id === category ? "bg-black text-white" : ""
                }`}
                onClick={() => handleClickCategory(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          <h2 className="text-red-600 font-bold text-lg border-b pb-2 mt-6">
            SẢN PHẨM HOT
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {dataPtodroductSeller &&
              dataPtodroductSeller.map((product) => (
                <BoxProduct key={product.id} products={product} />
              ))}
          </ul>
          <a href="/product" className="flex justify-center mt-3 ">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Xem thêm sản phẩm tại đây!!
              </span>
            </button>
          </a>
        </aside>

        {/* Main Content */}
        <MainBlog dataBlog={dataBlog} />

        {/* Sidebar Right */}
        <aside className="col-span-3 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-black font-bold text-lg border-b pb-2">
            TIN TỨC LIÊN QUAN
          </h2>

          {dataBlog.slice(2, 5).map((item) => (
            <Link key={item.id} to={`${item.id}`}>
              <div className="mt-4">
                <img
                  src={item?.thumb}
                  alt="Related News"
                  className="rounded-lg"
                />
                <h3 className="font-bold mt-2">{item?.description}</h3>
              </div>
            </Link>
          ))}
        </aside>
      </div>
      <div className="mb-8 mt-8 flex justify-center">
        <Pagination
          size="large"
          count={Pages.length}
          onChange={(e, page) => handleClickPage(page)}
          variant="outlined"
        />
        {/* <PageSearch
          isChechPage={isChechPage}
          Pages={Pages}
          handleClickPage={handleClickPage}
        /> */}
      </div>
    </div>
  );
};

export default Blog;
