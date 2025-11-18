import { useState } from "react";
import { User, ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("flash");

  return (
    <header className="py-2 px-3 sm:py-3 sm:px-6">
      <div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl px-4 sm:px-8 py-3 bg-[#f2f2f2]"
        style={{
          boxShadow:
            "4px 4px 8px rgba(0,0,0,0.12), -4px -4px 8px rgba(255,255,255,0.9)",
        }}
      >
        {/* Logo */}
        <div className="font-bold text-base sm:text-xl text-gray-800 whitespace-nowrap">
          United Deals
        </div>

        {/* Tabs */}
        <div
          className="flex items-center justify-center w-full sm:w-auto rounded-full p-1 bg-[#f2f2f2]"
          style={{
            boxShadow:
              "inset 2px 2px 4px rgba(0,0,0,0.12), inset -2px -2px 4px rgba(255,255,255,0.9)",
          }}
        >
          <button
            onClick={() => setActiveTab("flash")}
            className={`flex-1 sm:flex-none text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 ${
              activeTab === "flash"
                ? "bg-white text-orange-500 shadow-[2px_2px_6px_rgba(0,0,0,0.15),-2px_-2px_6px_rgba(255,255,255,0.8)]"
                : "text-gray-500 hover:text-orange-400"
            }`}
          >
            ⚡ Flash
          </button>
          <button
            onClick={() => setActiveTab("market")}
            className={`flex-1 sm:flex-none text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 ${
              activeTab === "market"
                ? "bg-white text-orange-500 shadow-[2px_2px_6px_rgba(0,0,0,0.15),-2px_-2px_6px_rgba(255,255,255,0.8)]"
                : "text-gray-500 hover:text-orange-400"
            }`}
          >
            🏬 Market
          </button>
        </div>

        {/* Icons */}
        <nav className="flex items-center justify-center sm:justify-end gap-3 sm:gap-5 text-gray-700">
          {/* Search */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="p-1 sm:p-1.5 hover:text-orange-500 transition">
                <Search className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-3 bg-white rounded-xl shadow-lg">
              <form className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search deals..."
                  className="pl-8 pr-2 h-9 text-sm border-gray-300"
                />
              </form>
            </PopoverContent>
          </Popover>

          {/* Cart */}
          <div className="relative cursor-pointer hover:text-orange-500 transition">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-semibold text-[10px] sm:text-xs">
              0
            </div>
          </div>

          {/* User */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="p-1 sm:p-1.5 hover:text-orange-500 transition">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 bg-white p-3 rounded-xl shadow-lg space-y-2">
              <p className="text-sm text-gray-700 font-medium border-b pb-1">
                Tài khoản
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => navigate("/login")}
                  variant="ghost"
                  className="justify-start text-sm hover:bg-orange-50 hover:text-orange-500"
                >
                  Đăng nhập
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  variant="ghost"
                  className="justify-start text-sm hover:bg-orange-50 hover:text-orange-500"
                >
                  Đăng ký
                </Button>
                <Button
                  onClick={() => navigate("/myprofile")}
                  variant="ghost"
                  className="justify-start text-sm hover:bg-orange-50 hover:text-orange-500"
                >
                  My Profile
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
      </div>
    </header>
  );
};

export default Header;
