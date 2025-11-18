// ProfileCard.jsx
import React from "react";

const ProfileCard = () => {
  return (
    // Container bao ngoài
    <div className="flex flex-col items-center min-h-screen bg-white pt-10 pb-20">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold uppercase tracking-wider mb-8">
        MY PROFILE
      </h1>

      {/* Thẻ profile chính */}
      <div className="bg-white p-6 rounded-xl  w-full max-w-sm">
        {/* Khu vực ảnh đại diện */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32">
            {/* Ảnh (Dùng một URL ảnh placeholder hoặc của người dùng) */}
            <img
              src="../public/chandungqhuy.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
            />
            {/* Biểu tượng camera */}
            <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg cursor-pointer">
              {/* Icon Camera SVG */}
              <svg
                className="w-5 h-5 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {/* Tên người dùng */}
          <p className="mt-4 text-xl font-semibold text-gray-900">
            Phạm Quốc Huy
          </p>
        </div>

        {/* Menu chi tiết */}
        <div className="space-y-3">
          {/* Account details */}
          <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-150">
            {/* Icon Người dùng */}
            <svg
              className="w-6 h-6 mr-3 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-gray-700">Account details</span>
          </div>

          {/* Order history */}
          <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-150">
            <img src="../public/shopingcard.png" alt="shopingcard" />
            <span className="font-medium text-gray-700">order history</span>
          </div>

          {/* Address */}
          <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition duration-150">
            {/* Icon Địa chỉ */}
            <svg
              className="w-6 h-6 mr-3 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-gray-700">Address</span>
          </div>

          {/* Logout */}
          {/* Căn lề trên để tạo khoảng cách */}
          <div className="pt-2">
            <div className="flex items-center p-3 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer transition duration-150">
              <img src="../public/logout.png" alt="logout" />
              <span className="font-medium">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Link Đăng ký */}
      <p className="mt-8 text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-bold text-black hover:text-gray-800 transition duration-150"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default ProfileCard;
