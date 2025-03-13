import axios from "axios"
import { API_GET_ALL_BLOG, API_GET_DEAIL_BLOG } from "../utils/constents/api"


const ApiBlogNews = {
    getApiBlog: (params, category) => {
        return axios.get(`${API_GET_ALL_BLOG}/categories_news/${category}/articles`,{
            params
        })
    },
    getApiDetailBlog: (id) => {
        return axios.get(`${API_GET_DEAIL_BLOG}/${id}`)
    },
    getAllBlog: () => {
        return axios.get(API_GET_ALL_BLOG)
    },
    getCategoryBlog: (category=2) => {
        return axios.get(`${API_GET_ALL_BLOG}/categories_news/${category}/articles`)
    }
}

export default ApiBlogNews