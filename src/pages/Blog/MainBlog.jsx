import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const MainBlog = ({ dataBlog }) => {
  return (
    <main className="col-span-6 space-y-4">
      <div className="bg-white p-4 shadow rounded-lg">
        {dataBlog.length !== 0 ? (
          <Link to={`${dataBlog[0].id}`}>
            <div>
              <img
                src={dataBlog[0]?.thumb}
                alt="Main News"
                className="rounded-lg"
              />
              <h3 className="font-bold text-lg mt-2">{dataBlog[0]?.title}</h3>
              <p className="text-gray-500 text-sm">
                {dataBlog[0]?.publish_date}
              </p>
              <p className="text-gray-700 mt-2">{dataBlog[0]?.description}</p>
            </div>
          </Link>
        ) : (
          <div>
            <Skeleton variant="rectangular" width={584} height={350} />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        )}
      </div>

      {dataBlog.length !== 0
        ? dataBlog.slice(1, 5).map((item) => (
            <Link key={item.id} to={`${item.id}`}>
              <div className="flex bg-white shadow-lg rounded-lg p-4 mb-4">
                <div className="w-1/3">
                  <img
                    src={item?.thumb}
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h3 className="font-bold text-lg">{item?.title}</h3>
                  {/* <Skeleton animation="wave" /> */}
                  <p className="text-sm text-gray-500 flex items-center">
                    📅 {item?.publish_date}
                  </p>
                  {/* <Skeleton animation="wave" /> */}
                  <p className="text-gray-700 mt-2 line-clamp-3">
                    {item?.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        : [1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="flex bg-white shadow-lg rounded-lg p-4 mb-4"
            >
              <Skeleton variant="rectangular" width={584} height={156} />
            </div>
          ))}
    </main>
  );
};
{
  /* <Skeleton variant="rectangular" width={289} height={491} /> */
}
export default MainBlog;
