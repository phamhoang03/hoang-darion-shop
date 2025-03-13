import { useSelector } from "react-redux";
import BoxProduct from "../../components/Products/BoxProduct";

const Heart = () => {
  const dataHeart = useSelector((state) => state.heartSlice.hearts);
  console.log(dataHeart, "okkkk");

  return (
    <div>
      <div className="w-full h-20"></div>
      <section className="pt-16 pb-8 bg-gray">
        <div className="container">
          <div className="lg:flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">Danh sách yêu thích:</h2>
              <p className="mt-2 text-lightGray">
                Các sản phẩm mà bạn đã yêu thích gần đây!
              </p>
            </div>
          </div>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {dataHeart &&
              dataHeart.map((product) => (
                <BoxProduct key={product.id} products={product} />
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Heart;
