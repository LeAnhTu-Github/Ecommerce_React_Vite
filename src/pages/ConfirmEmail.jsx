import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackLeftIcon from "../assets/back_left.svg";
import ShareIcon from "../assets/share.svg";
import BgConfirm from "../assets/image83.png";
import Clock from "../assets/clock.png";
import api from "@/lib/axios";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const emailToken = searchParams.get("token");

  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(45);
  const [message, setMessage] = useState("");

  // Countdown 45s
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Gửi API Confirm Email
  const handleConfirm = async () => {
    if (otpCode.length !== 6) {
      setMessage("OTP phải đủ 6 số!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/auth/confirm-email", {
        emailToken,
        otpCode: Number(otpCode),
      });

      setMessage("Xác thực thành công!");
      navigate("/login");
    } catch (err) {
      setMessage("OTP không đúng hoặc đã hết hạn!");
    } finally {
      setLoading(false);
    }
  };

  // Gửi lại OTP
  const handleResend = async () => {
    setCountdown(45);
    setMessage("OTP mới đã được gửi!");
    // Nếu BE có API resend OTP thì call tại đây
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/register")}
            className="flex bg-transparent items-center gap-2 mb-6 text-gray-800 rounded-lg transition"
          >
            <span className="flex items-center justify-center border border-gray-400 w-10 h-10 rounded-full">
              <img src={BackLeftIcon} alt="Back" className="w-5 h-5" />
            </span>
            <span>Back</span>
          </button>

          <button>
            <img src={ShareIcon} alt="share" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex gap-10 mt-7">
        {/* Left */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Create an account</h1>
          <span className="text-xl text-gray-500">
            Let's create your account
          </span>

          <img src={BgConfirm} alt="confirm" className="w-90 h-3/4" />

          <div className="flex justify-center">
            <span>
              Already a member?
              <a href="/login" className="font-bold ml-2">
                Log in
              </a>
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2">
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold">We just sent an SMS</h1>
            <span className="text-xl text-gray-500">
              Enter the security code we sent to
            </span>
            <span className="text-xl">Your email</span>
          </div>

          <div className="mt-8 flex flex-col items-start w-fit">
            <InputOTP
              maxLength={6}
              value={otpCode}
              onChange={setOtpCode}
              className="flex justify-center"
            >
              <InputOTPGroup className="gap-3 flex justify-center">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {/* Resend */}
            <div className="my-6 flex items-center gap-3">
              <span className="font-bold">
                Didn’t get the code?{" "}
                <button
                  className="text-blue-700"
                  disabled={countdown > 0}
                  onClick={handleResend}
                >
                  Resend it
                </button>
              </span>

              <div className="flex items-center gap-2">
                <img src={Clock} alt="clock" />
                <span>{countdown}s</span>
              </div>
            </div>

            {/* Message */}
            {message && <p className="text-red-500 text-sm mb-3">{message}</p>}

            {/* Confirm button */}
            <button
              onClick={handleConfirm}
              className="w-full bg-black text-white py-4 mt-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Verifying..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
