import { useSelector } from "react-redux";
import DataOrder from "./DataOrder";
import InformationOder from "./InformationOder";

const Order = () => {
  const dataCarts = useSelector((state) => state.cartSlice.carts);

  console.log(dataCarts, "xdxxxxxxxx");
  const totalCart = dataCarts.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  return (
    <div>
      <div className="w-full h-20"></div>
      <section>
        <div className="pt-16">
          <h2 className="text-3xl font-semibold text-center">Payment Order</h2>

          <div className="container">
            <div className="lg:grid grid-cols-2 mt-10 gap-8">
              {/* Information */}

              <InformationOder totalCart={totalCart} DataCart={dataCarts} />

              {/* =====Data===== */}

              <DataOrder totalCart={totalCart} dataCarts={dataCarts} />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-12"></section>
    </div>
  );
};

export default Order;
