import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackLeftIcon from "../assets/back_left.svg";
import ShareIcon from "../assets/share.svg";
import BgLogin from "../assets/image55.png";
import LogoGG from "../assets/logos_google-icon.png";
import api from "@/lib/axios";
const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await api.post(
        "auth/sign-up",
        {
          fullName: fullname, // sửa lại đúng tên field
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log({ email, password, fullname });

      if (response.status === 201) {
        setSuccess("Đăng kí thành công, mở email để xác nhận");
        setFullname("");
        setEmail("");
        setPassword("");
        navigate("/auth/confirm-email");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        console.log("Lỗi 422 từ server:", err.response.data);
        setError(err.response.data.message || "Dữ liệu không hợp lệ!");
      } else {
        setError("Không thể kết nối đến server!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/login")}
            className="flex bg-transparent items-center gap-2  mb-6  text-gray-800 rounded-lg transition"
          >
            <span className="flex items-center justify-center border border-gray-400 w-10 h-10 rounded-full">
              <img src={BackLeftIcon} alt="Back" className="w-5 h-5" />
            </span>
            <span className="font-bold">Back</span>
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
          <h1 className="text-5xl font-bold">Create an account</h1>
          <span className="text-xl text-gray-500">
            Let's create your account
          </span>

          <img src={BgLogin} alt="login" className="w-90 h-3/4" />
          <div className="flex justify-center">
            <span>
              First time here?
              <a href="/login" className="font-bold ml-2">
                Log In
              </a>
            </span>
          </div>
        </div>

        <div className="w-1/2">
          <form className="space-y-7" onSubmit={handleRegister}>
            <div className="flex flex-col">
              <label htmlFor="fullname" className="text-m font-medium mb-1">
                Fullname
              </label>
              <input
                id="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your fullname"
                className="border w-full bg-gray-100 border-gray-300 px-4 py-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-m font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email adress"
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

            <button
              type="submit"
              className="w-full  bg-black text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="flex items-center my-5 ">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="mx-4 text-gray-500 font-medium">OR</span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div>
              <button className="flex w-full py-4 items-center justify-center gap-2 bg-white border border-gray-300  px-4 rounded-lg hover:bg-gray-100 transition ">
                <img src={LogoGG} alt="logogg" className="w-5 h-5" />
                <span>Login with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
