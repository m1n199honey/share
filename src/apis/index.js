import axios from "axios";
import { BACKEND_URL } from "../config";

const axiosInstance = axios.create({ baseURL: BACKEND_URL });

// Request interceptor for api calls
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem("token") || "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
