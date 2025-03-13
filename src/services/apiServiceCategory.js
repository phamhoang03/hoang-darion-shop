import axios from "axios";
import { API_CATEGORIES } from "../utils/constents/api";


const apiServiceCategory = {
  getAllCategories: async () => {
    const res = await axios.get(API_CATEGORIES);
    return res.data;
  },
};

export default apiServiceCategory;