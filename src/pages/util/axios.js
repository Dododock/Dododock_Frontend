import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `http://10.150.150.214:8080:/api`,
    headers: {
        "Content-Type": "application/json",
    },
    // withCredentials: true  // 이렇게 설정하면 요청시에 자동으로 쿠키가 포함됩니다.
});


export default axiosInstance;