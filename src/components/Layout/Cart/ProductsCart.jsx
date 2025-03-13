import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCard,
  decrementCart,
  removeCart,
} from "../../redux-toolkit/featrures/cartSlice";
import toast from "react-hot-toast";

const ProductsCart = ({ totalCart, dataCarts }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="lg:grid grid-cols-6 mt-10 gap-8">
        <div className="col-span-4">
          <div className="border border-gray rounded-lg">
            <div className="hidden lg:flex ">
              <div className="p-5 border border-gray w-2/4 flex items-center justify-center">
                Product
              </div>
              <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                Quantity
              </div>
              <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                Total
              </div>
              <div className="p-5 border border-gray w-1/4 flex items-center justify-center"></div>
            </div>

            {dataCarts &&
              dataCarts.map((cart) => (
                <div key={cart.id} className="flex">
                  <div className="p-2 lg:p-5 border border-gray w-2/4">
                    <div className="flex items-center gap-3">
                      <div className="w-32 overflow-hidden">
                        <img className="image" src={cart.thumbnail} alt="" />
                      </div>
                      <div>
                        <p className="text-xs uppercase">{cart.title}</p>
                        <span className="text-xs">${cart.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border border-gray w-1/4 justify-center lg:flex hidden">
                    <div className="flex items-center w-max relative">
                      <button
                        disabled={cart.quantity === 1}
                        type="button"
                        className="text-lg block text-[0px] absolute left-4"
                        onClick={() => dispatch(decrementCart(cart.id))}
                      >
                        <span className="text-2xl leading-[24px]">-</span>
                      </button>
                      <input
                        type="text"
                        className="w-[120px] h-[40px] border px-10 border-black rounded-full text-center"
                        value={cart.quantity}
                      />
                      <button
                        type="button"
                        className="text-lg block text-[0px] absolute right-4"
                        onClick={() => dispatch(addToCard(cart))}
                      >
                        <span className="text-2xl leading-[24px]">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                    ${cart.price * cart.quantity}
                  </div>
                  <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                    <button
                      onClick={() =>
                        dispatch(
                          removeCart(cart.id),
                          toast.success(
                            `Xóa sản phẩm ${cart.title} thành công !`
                          )
                        )
                      }
                    >
                      <img
                        className="block size-5"
                        src="images/ico_trash.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-9">
            <p className="text-md">Special instructions for seller</p>

            <textarea
              name=""
              id=""
              placeholder="how can we help you?"
              className="text-md mt-3 border border-gray p-5 w-full"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="col-span-2 mt-6 lg:mt-0">
          <div className="p-7 bg-[#f7f4ef] rounded-lg">
            <h3 className="uppercase font-medium text-sm">
              FREE SHIPPING ON ORDERS $100.00
            </h3>
            <p className="text-sm mt-2">
              Congratulations , you&apos;ve got free shipping!
            </p>
            <p className="bg-[#14c100] w-full h-1 mt-5"></p>
          </div>

          <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
            <span>Coupon</span>
            <p className="mt-2 mb-6 text-md text-lightGray">
              * Discount will be calculated and applied at checkout
            </p>
            <input
              type="text"
              className="h-10 px-6 text-sm border border-gray rounded-md w-full"
              placeholder="Coupon code"
            />
            <p className="mt-6 font-semibold">Total: ${totalCart}</p>

            <Link
              to={"/order"}
              className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
            >
              Check out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
