import React from "react";
import { useNavigate } from "react-router-dom";
import BackLeftIcon from "../assets/back_left.svg";
import ShareIcon from "../assets/share.svg";
import BgLogin from "../assets/image55.png";
import LogoGG from "../assets/logos_google-icon.png";
const Login = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    window.location.href = `${apiBaseUrl}/v1/auth/google`;
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
                placeholder="Enter your email"
                className="border w-full bg-gray-100 border-gray-300 px-4 py-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="password" className="text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border bg-gray-100 border-gray-300 px-4 py-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <button className="w-full  bg-black text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
              Login
            </button>
            <div className="flex items-center my-5 ">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="mx-4 text-gray-500 font-medium">OR</span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="flex w-full py-4 items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition "
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
