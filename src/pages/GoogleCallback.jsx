import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      alert("Không nhận được code từ Google!");
      navigate("/login");
      return;
    }

    const verifyGoogle = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

        const res = await axios.post(`${apiBaseUrl}auth/google/verify`, {
          code,
        });

        const { accessToken, refreshToken } = res.data.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Xác thực Google thất bại!");
        navigate("/login");
      }
    };

    verifyGoogle();
  }, [navigate]);

  return <div>Đang xác thực Google...</div>;
};

export default GoogleCallback;
