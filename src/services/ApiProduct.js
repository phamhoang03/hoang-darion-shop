import axios from "axios";
import { API_GET_ALL_CATEGORY_LIST, API_GET_ALL_PRODUCT, API_GET_ALL_PRODUCT_SEARCH } from "../utils/constents/api";

const ApiProduct = {
    getAllProduct: () => {
        return axios.get(API_GET_ALL_PRODUCT)
    },
    getAllProductSearch: (params) => {
        return axios.get(API_GET_ALL_PRODUCT_SEARCH,{
            params,
        })
    },  
    getAllCategoryList: () => {
        return axios.get(API_GET_ALL_CATEGORY_LIST)
    },
    getDetail: (id) => {
        return axios.get(`${API_GET_ALL_PRODUCT}/${id}`)
    },
    getCategory: (category) => {
        return axios.get(`${API_GET_ALL_PRODUCT}/category/${category}`);
    },
}

export default ApiProduct;