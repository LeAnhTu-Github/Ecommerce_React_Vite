import React from "react";
import { useNavigate } from "react-router-dom";
import BackLeftIcon from "../assets/back_left.svg";
import ShareIcon from "../assets/share.svg";
import BgConfirm from "../assets/image83.png";
import Clock from "../assets/clock.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Confirm = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col ">
      <div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/register")}
            className="flex bg-transparent items-center gap-2  mb-6  text-gray-800 rounded-lg transition"
          >
            <span className="flex items-center justify-center border border-gray-400 w-10 h-10 rounded-full">
              <img src={BackLeftIcon} alt="Back" className="w-5 h-5" />
            </span>
            <span>Back</span>
          </button>
          <button>
            <img src={ShareIcon} alt="share" className="w-5 h-5 " />
          </button>
        </div>
      </div>
      <div className="flex gap-10 mt-7">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Create an account</h1>
          <span className="text-xl text-gray-500">
            Let's create your account
          </span>

          <img src={BgConfirm} alt="login" className="w-90 h-3/4" />
          <div className="flex justify-center">
            <span>
              Already a member?
              <a href="" className="font-bold ml-2">
                Log in
              </a>
            </span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold">We just sent an SMS</h1>
            <span className="text-xl text-gray-500">
              Enter the security code we sent to
            </span>
            <span className="text-xl">+32 123456789</span>
          </div>
          <div className="mt-8 flex flex-col items-start w-fit ">
            <InputOTP maxLength={6} className="flex justify-center ">
              <InputOTPGroup className="gap-3 flex justify-center">
                <InputOTPSlot
                  index={0}
                  className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                />
                <InputOTPSlot
                  index={1}
                  className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                />
                <InputOTPSlot
                  index={2}
                  className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                />
                <InputOTPSlot
                  index={3}
                  className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                />
                <InputOTPSlot
                  index={4}
                  className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                />
                <InputOTPSlot
                  index={5}
                  className="w-14 h-16 text-xl rounded-2xl bg-gray-100"
                />
              </InputOTPGroup>
            </InputOTP>
            <div className="my-6 flex">
              <span className="font-bold">
                Didn't get the code? <a className="text-blue-700">Resend it</a>
              </span>
              <div className="flex justify-between items-center">
                <img src={Clock} alt="clock" />
                <span> 45s</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-4 mt-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
