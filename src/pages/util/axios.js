import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `http://10.150.150.214:8080:/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = token;
    return config;
  });

export default axiosInstance;