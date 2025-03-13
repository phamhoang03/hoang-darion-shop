import BoxProduct from "../Products/BoxProduct";
import { useSearchParams } from "react-router-dom";
import useFetchGetDataAllCategory from "../Hooks/useFetchGetDataAllCategory";
import { useEffect, useReducer, useState } from "react";

import {
  filterProductReducer,
  initialState,
  TYPE_ACTION,
} from "./reducer/FilterProductReducer";
import useHandleChange from "../Hooks/useHandleChange";
import useFetchGetDataProduct from "../Hooks/useFetchGetDataProduct";
import useDebounce from "../Hooks/useDebounce";
import { Pagination } from "@mui/material";
import FiterCategory from "./FiterCategory";
import SearchIcon from "@mui/icons-material/Search";

const SearchProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useFetchGetDataAllCategory();
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [filterProduct, dispatch] = useReducer(
    filterProductReducer,
    initialState
  );
  const { formData, handleChange } = useHandleChange({ valueSearch: "" });
  const { products, totalProduct } = useFetchGetDataProduct(
    category,
    filterProduct
  );

  const debouncedValue = useDebounce(formData.valueSearch, 1000);
  const handleChangeSort = (e) => {
    const value = e.target.value.split(",");
    dispatch({
      type: TYPE_ACTION.CHANGE_SORT,
      payload: {
        sortBy: value[0],
        order: value[1],
      },
    });
  };

  const handleChangePage = (page) => {
    dispatch({
      type: TYPE_ACTION.CHANGE_PAGE,
      payload: (page - 1) * 12,
    });
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch({
        type: TYPE_ACTION.CHANGE_QUERY,
        payload: debouncedValue,
      });
    } else {
      dispatch({
        type: TYPE_ACTION.CHANGE_QUERY,
        payload: "",
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (filterProduct) {
      const stringJson = JSON.stringify({
        ...filterProduct,
      });
      const dataFilterJson = JSON.parse(stringJson);
      setSearchParams(new URLSearchParams(dataFilterJson));
    }
  }, [filterProduct, setSearchParams]);

  useEffect(() => {
    let tmpDataFilter = {
      limit: 12,
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = JSON.parse(
        '{"' +
          decodeURI(
            searchParams.toString().replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );
      tmpDataFilter = {
        category: dataFromSearchParams["category"] || "",
        limit: dataFromSearchParams["limit"] || 12,
        sortBy: dataFromSearchParams["sortBy"],
        order: dataFromSearchParams["order"],
        q: dataFromSearchParams["q"]
          ? dataFromSearchParams["q"].replace(/\+/g, " ")
          : "",
        skip: dataFromSearchParams["skip"],
      };
      dispatch({
        type: TYPE_ACTION.CHANGE_INITIAL,
        payload: { ...tmpDataFilter },
      });
    }
  }, [searchParams, categories]);

  const handleReset = () => {
    dispatch({
      type: TYPE_ACTION.CHANGE_RESET,
      payload: 12,
    });

    // Reset formData.valueSearch về rỗng
    handleChange({
      target: { name: "valueSearch", value: "" },
    });
  };

  return (
    <>
      <section className="pt-12 pb-12">
        <div className="container">
          <div className="lg:grid grid-cols-5">
            <FiterCategory
              setCategory={(cat) => {
                setCategory(cat);
                setSearchParams(new URLSearchParams({ category: cat }));
              }}
              category={category}
              categories={categories}
            />

            <div className="col-span-4 mt-6 p-4 lg:mt-0">
              {category ? (
                ""
              ) : (
                <div className="flex relative gap-4">
                  <div className="py-2  px-3 border rounded-full cursor-pointer w-60">
                    <select
                      onChange={handleChangeSort}
                      className="w-full text-sm outline-none"
                      value={`${filterProduct.sortBy},${filterProduct.order}`}
                    >
                      <option value="">Mặc định</option>
                      <option value="price,desc">Giảm dần theo giá</option>
                      <option value="price,asc">Tăng dần theo giá</option>
                      <option value="title,asc">A-Z</option>
                      <option value="title,desc">Z-A</option>
                    </select>
                  </div>

                  <SearchIcon className=" absolute left-42 top-2 lg:left-50  " />
                  <input
                    placeholder="Search..."
                    className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    onChange={handleChange}
                    name="valueSearch"
                    value={formData.valueSearch} // Dùng formData thay vì filterProduct.q
                  />

                  <button
                    className="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl  font-medium rounded-full text-sm px-10 py-2.5 text-center "
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              )}

              <ul className="lg:grid grid-cols-3 gap-5 mt-9 space-y-3 lg:space-y-0">
                {products.length > 0 &&
                  products.map((item) => (
                    <BoxProduct key={item.id} products={item} />
                  ))}
              </ul>
              {!category && (
                <div className="mt-10 flex justify-center">
                  <Pagination
                    onChange={(e, page) => handleChangePage(page)}
                    count={Math.ceil(totalProduct / 12)}
                    variant="outlined"
                    size="large"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProduct;
