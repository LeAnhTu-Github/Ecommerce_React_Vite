import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackLeftIcon from "../assets/back_left.svg";
import ShareIcon from "../assets/share.svg";
import ProfileCard from "@/components/ui/profilecard";
const Myprofile = () => {
  const navigate = useNavigate();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

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
        <div className="w-2/5">
          <ProfileCard />
        </div>
        <div className="w-3/5">
          thể hiện nội dung khi chọn nút bên profilecard
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
