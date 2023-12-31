import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from "../util/axios";

const YourComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async()=> {
        const authCode = location.search.replace("?code=", "")
        if ( authCode) {
        try {
            const response = await axiosInstance.post(`/oauth/bsm`, null, {
                params: { authCode }
            });
            console.log('Response:', response.data); // 서버 응답 출력
            localStorage.setItem("accessToken", response.data)
            navigate("/")
            setTimeout(()=>{
              window.location.reload()
            }, 100)
        } catch (error) {
            console.error('Error:', error); // 에러 처리
        }
    }
    })()
  }, [location.search]);

  return (
    // 컴포넌트의 내용
    <div>
      sdfsdfsd
    </div>
  );
};

export default YourComponent;
