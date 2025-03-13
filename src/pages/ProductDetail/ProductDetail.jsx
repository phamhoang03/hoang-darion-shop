import { useEffect, useState } from "react";
import ApiProduct from "../../services/ApiProduct";
import { useNavigate, useParams } from "react-router-dom";
import BoxProduct from "../../components/Products/BoxProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../components/redux-toolkit/featrures/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InformationProducts from "./InformationProducts";
import DescriptionDetail from "./DescriptionDetail";
import { Backdrop, CircularProgress } from "@mui/material";
import {
  addToHeart,
  removeHeart,
} from "../../components/redux-toolkit/featrures/heartSlice";

const ProductDetail = () => {
  const pagram = useParams();
  console.log(pagram.id, "pagram");

  // const dataCart = useSelector((state) => state.cartSilce.carts);
  const [quantity, setQuantity] = useState(1);
  const [dataDetail, setDataDetail] = useState({});
  const [dataCategory, setDataCategory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCheckOpen, setIsCheckOpen] = useState(false);
  const dataHeart = useSelector((state) => state.heartSlice.hearts);
  const isFavorite = dataHeart.some((item) => item.id === dataDetail.id);

  const userName = useSelector((state) => state.authenSlice.userName);
  console.log(userName, "userNameuserName");

  const dataCarts = useSelector((state) => state.authenSlice.carts);
  console.log(dataCarts, "dataCartsdataCarts");

  const fetDataProductDetail = async (id) => {
    const res = await ApiProduct.getDetail(id);
    console.log(res, "setDataCategoryList");
    setIsCheckOpen(false);
    if (res.status === 200) {
      setDataDetail(res.data);
      setIsCheckOpen(true);
    }
    if (res.data.category) {
      fetDataCategory(res.data.category);
    }
  };

  const fetDataCategory = async (category) => {
    const res = await ApiProduct.getCategory(category);
    // console.log(res, "jjjjjjjjjjjjjjjjjj");
    setDataCategory(res.data.products);
  };

  useEffect(() => {
    fetDataProductDetail(pagram.id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pagram.id]);

  // console.log(dataCategory, "dataPtodroductSellerdataPtodroductSeller");

  const handleDetail = (id) => {
    fetDataProductDetail(id);
  };

  const handleAddToCart = () => {
    setQuantity(1);
    // dispatch(
    //   addToCard({
    //     ...dataDetail,
    //     quantity: quantity,
    //   })
    // );
    if (userName) {
      dispatch(
        addToCard({
          ...dataDetail,
          quantity: quantity,
        })
      );
    } else {
      navigate("/login");
    }

    toast.success(`Thêm sản phẩm "${dataDetail.title}" thành công`, {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const handleToggleHeart = () => {
    if (isFavorite) {
      dispatch(removeHeart(dataDetail.id));
    } else {
      dispatch(
        addToHeart({
          ...dataDetail,
          quantityHeart: 1,
        })
      );
    }
  };

  // console.log(dataCart, "dataCartdataCartdataCart");

  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={!isCheckOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="w-full h-20"></div>
      <ToastContainer />
      <div className="container">
        <ul className="flex gap-2 items-center py-4">
          <li>
            <a className="text-sm" href="#none">
              Home /{" "}
            </a>
          </li>
          <li>
            <a className="text-sm" href="#none">
              {dataDetail.category
                ? dataDetail.category.replace(/\b\w/g, (char) =>
                    char.toUpperCase()
                  )
                : "Unknown Category"}{" "}
              /
            </a>
          </li>
          <li>
            <a className="text-sm" href="#none">
              {dataDetail.title
                ? dataDetail.title.replace(/\b\w/g, (char) =>
                    char.toUpperCase()
                  )
                : "Unknown Title"}
            </a>
          </li>
        </ul>

        <InformationProducts
          dataDetail={dataDetail}
          dataCategory={dataCategory}
          handleDetail={handleDetail}
          setQuantity={setQuantity}
          quantity={quantity}
          handleAddToCart={handleAddToCart}
          handleToggleHeart={handleToggleHeart}
          isFavorite={isFavorite}
        />

        <DescriptionDetail dataDescription={dataDetail} />

        <div className="mt-24 mb-24">
          <h2 className="text-center text-lg lg:text-3xl font-semibold">
            You may also like
          </h2>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {dataCategory.length &&
              dataCategory.map((item) => (
                <BoxProduct key={item.id} products={item} />
              ))}
          </ul>
        </div>
        {/* 
        <div className="mt-24 mb-32">
          <h2 className="text-center text-xl lg:text-3xl font-semibold">
            Recently Viewed Products
          </h2>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {dataCategory.length &&
              dataCategory.map((item) => (
                <BoxProduct key={item.id} products={item} />
              ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
