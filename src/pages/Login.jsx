import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackLeftIcon from "../assets/back_left.svg";
import ShareIcon from "../assets/share.svg";
import BgLogin from "../assets/image55.png";
import LogoGG from "../assets/logos_google-icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg("Nhập đầy đủ email và mật khẩu !!!");
      return;
    }
    try {
      setLoading(true);
      setErrorMsg("");

      const res = await axios.post(`${apiBaseUrl}auth/sign-in`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.data?.token);

      navigate("/");
    } catch (err) {
      setErrorMsg(
        err.response?.data?.message || "Đăng nhập thất bại, thử lại."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    window.location.href = `${apiBaseUrl}auth/google`;
  };
  return (
    <div className="min-h-screen flex flex-col ">
      <div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex bg-transparent items-center gap-2  mb-6  text-gray-800 rounded-lg transition"
          >
            <span className="flex items-center justify-center border border-gray-400 w-10 h-10 rounded-full">
              <img src={BackLeftIcon} alt="Back" className="w-5 h-5" />
            </span>
            <span>Back</span>
          </button>
          <button
            onClick={async () => {
              const shareData = {
                title: "Ecommerce App",
                text: "Check out this awesome page!",
                url: window.location.href,
              };

              if (navigator.share) {
                try {
                  await navigator.share(shareData);
                  console.log("Shared successfully!");
                } catch (err) {
                  console.error("Share failed:", err);
                }
              } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
          >
            <img src={ShareIcon} alt="share" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-10 mt-7">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <span className="text-xl text-gray-500">
            Login in to your account
          </span>

          <img src={BgLogin} alt="login" className="w-90 h-3/4" />
          <div className="flex justify-center">
            <span>
              First time here?
              <a href="/register" className="font-bold ml-2">
                Sign up
              </a>
            </span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="space-y-10">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-m font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border w-full bg-gray-100 border-gray-300 px-4 py-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex flex-col relative">
              <label htmlFor="password" className="text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border bg-gray-100 border-gray-300 px-4 py-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-11 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errorMsg && (
              <div className="text-red-500 font-medium">{errorMsg}</div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="flex items-center my-5 ">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="mx-4 text-gray-500 font-medium">OR</span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="flex w-full py-4 items-center justify-center gap-2 bg-white border border-gray-300 px-4 rounded-lg hover:bg-gray-100 transition "
              >
                <img src={LogoGG} alt="logogg" className="w-5 h-5" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
