import ApiProduct from "../../../services/ApiProduct";
import BoxProduct from "../../Products/BoxProduct";
import useFetch from "../../Hooks/useFetch";

const NewArrivals = () => {
  const { data: dataPtodroductSeller } = useFetch(
    () => ApiProduct.getAllProduct(),
    [],
    (data) => data.products.slice(9, 17)
  );

  // console.log(dataPtodroductSeller, "dataPtodroductSellerfff");

  return (
    <div>
      <section className="pt-16 pb-8 bg-gray">
        <div className="container">
          <div className="lg:flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <p className="mt-2 text-lightGray">
                Experience the best products at our store!
              </p>
            </div>
            <a
              href="/product"
              className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
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
  );
};

export default NewArrivals;
