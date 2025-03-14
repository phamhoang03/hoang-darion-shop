import ApiProduct from "../../../services/ApiProduct";

import BoxProduct from "../../Products/BoxProduct";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router-dom";

const Bestseller = () => {
  const { data: dataPtodroductSeller, loading } = useFetch(
    () => ApiProduct.getAllProduct(),
    [],
    (data) => data.products.slice(0, 8)
  );

  // console.log(dataPtodroductSeller, "dataPtodroductSeller");

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
        <div className="container">
          <div className="lg:flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">Bestseller</h2>
              <p className="mt-2 text-lightGray">
                Experience the best products at our store!
              </p>
            </div>
            <Link
              to="/product"
              className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
            </Link>
          </div>

          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            {dataPtodroductSeller.map((product) => (
              <BoxProduct key={product.id} products={product} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Bestseller;
