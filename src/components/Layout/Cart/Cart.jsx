import { useSelector } from "react-redux";

import { noCart } from "../../../utils/constents/mockData";
import ProductsCart from "./ProductsCart";
import ApiProduct from "../../../services/ApiProduct";
import useFetch from "../../Hooks/useFetch";
import BoxProduct from "../../Products/BoxProduct";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dataCarts = useSelector((state) => state.cartSlice.carts);
  const navigate = useNavigate();

  const totalCart = dataCarts.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  const { data: dataPtodroductSeller } = useFetch(
    () => ApiProduct.getAllProduct(),
    [],
    (data) => data.products.slice(9, 17)
  );

  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-full h-20"></div>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Shopping Cart</h2>
          {dataCarts.length !== 0 ? (
            <ProductsCart totalCart={totalCart} dataCarts={dataCarts} />
          ) : (
            <div>
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-center p-10 w-[400px]">
                  <img
                    src={noCart}
                    className="h-[120px] mx-auto"
                    alt="NoCart"
                  />
                  <p className="my-4  text-lg">Giỏ hàng của bạn còn trống</p>
                  <button
                    onClick={() => navigate("/product")}
                    className="py-3 px-11 text-white bg-orange-600 cursor-pointer rounded-lg hover:bg-orange-500 transition-all"
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
              <section className="pt-16 pb-8">
                <div className="container">
                  <div className="lg:flex justify-between items-end">
                    <p className="mt-2 text-lightGray">CÓ THỂ BAN CŨNG THÍCH</p>
                    <a
                      href="/product"
                      className="mt-2 text-[1.2vw] cursor-pointer text-rose-700"
                    >
                      Xem Tất Cả 👉
                    </a>
                  </div>
                  <ul className="mt-8 lg:grid grid-cols-4 gap-7">
                    {dataPtodroductSeller &&
                      dataPtodroductSeller.map((product) => (
                        <BoxProduct key={product.id} products={product} />
                      ))}
                  </ul>
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
      <section className="pt-12 pb-12"></section>
    </div>
  );
};

export default Cart;
