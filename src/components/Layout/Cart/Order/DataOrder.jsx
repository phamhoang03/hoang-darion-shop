const DataOrder = ({ dataCarts, totalCart }) => {
  return (
    <div className="lg:p-10 mt-10 lg:mt-0">
      <div className="md:px-5">
        <ul className="space-y-3">
          {dataCarts
            ? dataCarts.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <div className="size-16 border border-gray rounded-md overflow-hidden">
                    <img className="image" src={item.thumbnail} alt="" />
                  </div>
                  <p>{item.title}</p>
                  <span className="ml-auto">
                    $ {item.price * item.quantity}
                  </span>
                </li>
              ))
            : "Loading..."}
        </ul>

        <ul className="mt-6 space-y-4">
          <li className="flex items-center justify-between">
            <span className="text-[14px]">
              Subtotal * {dataCarts.length} items
            </span>
            <span className="text-[14px]">$ {totalCart}</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="text-[14px]">Shipping</span>
            <span className="text-[14px]">Free</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="text-[14px]">Estimated taxes</span>
            <span className="text-[14px]">$ 0</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">USD ${totalCart}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataOrder;
