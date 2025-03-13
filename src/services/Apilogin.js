import axios from "axios";
import { API_CHANGE_PASSWORD, API_GET_ME, API_LOGIN, API_PROFILE, API_REGISTER } from "../utils/constents/api";

const ApiLogin = {
    login: async (data) => {
        return await axios.post(API_LOGIN, data);
    },
    register: async (data) => {
        return await axios.post(API_REGISTER, data);
    },
    getInfo: async () => {
        const token = localStorage.getItem("authToken");
        return await axios(API_GET_ME, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    },
    updateProfile: async (data) => {
        const token = localStorage.getItem("authToken");
        return await axios.put(API_PROFILE, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    changePassword: async (data) => {
        const token = localStorage.getItem("authToken");
        return await axios.put(API_CHANGE_PASSWORD, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

export default ApiLogin