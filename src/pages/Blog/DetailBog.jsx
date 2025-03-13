import { useEffect, useState } from "react";
import ApiBlogNews from "../../services/ApiBlogNews";
import { useParams } from "react-router-dom";

const DetailBog = () => {
  const pagam = useParams();

  console.log(pagam.id, "hhhhhhhhhhhh");

  const [dataDetailBlog, setDataDetailBlog] = useState({});
  const [editableContent, setEditableContent] = useState("");
  const [resertPagarm, setResertPagarm] = useState(pagam.id);
  const [dataBlogRelated, setDataBlogRelated] = useState([]);

  const fetchApiDataDetailBlog = async (id) => {
    const res = await ApiBlogNews.getApiDetailBlog(id);
    if (res.status === 200) {
      setDataDetailBlog(res.data.data);
      const rawContent = res.data.data.content || "";
      const cleanContent = rawContent.replace(/<\/?[^>]+(>|$)/g, "");
      setDataDetailBlog(res.data.data);
      setEditableContent(cleanContent);
    }
  };

  // const { data: dataBlogRelated } = useFetch(
  //   () => ApiBlogNews.getAllBlog(),
  //   [],
  //   (data) => data.data.slice(0, 4)
  // );

  const fectchCategoryBlog = async (category) => {
    const res = await ApiBlogNews.getCategoryBlog(category);
    console.log(res, "hhhhhhhhhhhhhhhhhhhhhhhhhh");

    if (res.status === 200) {
      setDataBlogRelated(res.data.data);
    }
  };

  console.log(dataBlogRelated, "dataBlogRelated");

  useEffect(() => {
    fetchApiDataDetailBlog(resertPagarm);
    fectchCategoryBlog(dataDetailBlog.category_id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [resertPagarm, dataDetailBlog.category_id]);

  console.log(dataDetailBlog, "dataDetailBlog");

  function timeAgo(dateString) {
    const publishDate = new Date(dateString);
    const now = new Date();
    const diffTime = now - publishDate;
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths < 0) {
      return `${Math.abs(diffMonths)} tháng sau`;
    } else if (diffMonths === 0) {
      return "Trong tháng này";
    } else {
      return `${diffMonths} tháng trước`;
    }
  }
  const handleClickBoxBlog = (id) => {
    setResertPagarm(id);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="pt-[90px]"></section>
      <section className="container mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-xl shadow-lg hover:scale-101 transition-transform duration-300">
          <h2 className="text-3xl text-center font-bold mb-4 text-gray-900">
            {dataDetailBlog.title}
          </h2>
          <div className="text-gray-500 mb-4 flex items-center justify-center space-x-2">
            <span>{timeAgo(dataDetailBlog.publish_date)}</span> <span>|</span>{" "}
            <span>{dataDetailBlog.author}</span>
          </div>
          <img
            alt="Fashion model on runway"
            className="w-full mb-4 rounded-lg shadow-md hover:opacity-90 transition"
            src={dataDetailBlog.thumb}
          />
          <div className="grid grid-cols-1  gap-8">
            <div className="md:col-span-2">
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                {editableContent.split("\n").map((paragraph, index) => (
                  <p key={index} className="indent-8">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-4 mt-6">
                  <span className="font-bold">Tags:</span>
                  <span className="bg-gray-300 text-gray-600 px-3 py-1 rounded-lg font-semibold">
                    #Fashion #Beauty
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-6">
                  <span className="font-bold">Share this post:</span>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 p-2 transition"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-400 p-2 transition"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 p-2 transition"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-500 p-2 transition"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Bình luận */}
        <div className="mt-10">
          <main className="flex flex-wrap py-8">
            <section className="w-full lg:w-2/3 pr-4">
              <h3 className="text-lg font-bold mb-4">Bình luận tại đây</h3>
              <form className="w-2/3 bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Tên của bạn..."
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nội dung bình luận..."
                  ></textarea>
                </div>
                <button
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all"
                  type="submit"
                >
                  GỬI BÌNH LUẬN
                </button>
              </form>
            </section>

            {/* Bài viết liên quan */}
            <aside className="w-full lg:w-1/3 pl-4">
              <h3 className="text-lg font-bold flex flex-wrap mb-4">
                BÀI VIẾT LIÊN QUAN
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {dataBlogRelated
                  ? dataBlogRelated.slice(5, 9).map((item) => (
                      <div
                        key={item.id}
                        className="text-center bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
                        onClick={() => handleClickBoxBlog(item.id)}
                      >
                        <img
                          alt="ABBA member"
                          className="w-full mb-2 rounded-lg shadow"
                          src={item.thumb}
                        />
                        <a
                          className="font-bold text-blue-600 hover:underline"
                          href="/blog/5924"
                        >
                          {item.title}
                        </a>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))
                  : "Loding..."}
              </div>
            </aside>
          </main>
        </div>
      </section>
    </div>
  );
};

export default DetailBog;
