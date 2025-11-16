import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/register");
    } else {
      alert("Login thất bại!");
      navigate("/login");
    }
  }, [navigate]);

  return <div>Logging in with Google...</div>;
};

export default GoogleCallback;
