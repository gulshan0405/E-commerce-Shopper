import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Sidebar from "../SideBar/SideBar";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const { getTotalCartItems } = useContext(ShopContext);

  console.log(getTotalCartItems());
  return (
    <div className="navbar flex justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 p-4 shadow-md">
      {/* Sidebar Toggle Button */}
      <button
        className="lg:hidden text-2xl text-gray-600 hover:text-gray-800"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      {/* Logo Section */}
      <div className="nav-logo flex items-center gap-2 lg:gap-4">
        <img
          src={logo}
          alt="Logo"
          className="w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px] transition-all duration-300"
        />
        <p className="text-[#171717] text-[20px] md:text-[30px] lg:text-[38px] font-semibold transition-all duration-300">
          SHOPPER
        </p>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu hidden lg:flex items-center gap-9 text-[#626262] text-[18px] font-medium">
        <li
          onClick={() => setMenu("shop")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to="/">Shop</Link>
          <hr
            className={`${
              menu === "shop" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
        <li
          onClick={() => setMenu("mens")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to="/mens">Men</Link>
          <hr
            className={`${
              menu === "mens" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
        <li
          onClick={() => setMenu("womens")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to="/womens">Women</Link>
          <hr
            className={`${
              menu === "womens" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to="/kids">Kids</Link>
          <hr
            className={`${
              menu === "kids" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
      </ul>

      {/* Login and Cart */}
      <div className="nav-login-cart flex items-center gap-[10px] sm:gap-[20px] lg:gap-[45px]">
        {localStorage.getItem("auth-token") ? (
          <button
            className="px-4 py-2 bg-white font-medium text-[#515151] border border-[#7a7a7a] rounded-full hover:bg-gray-100 active:scale-95 transition duration-200"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="">
            <button className="px-4 py-2 bg-white font-medium text-[#515151] border border-[#7a7a7a] rounded-full hover:bg-gray-100 active:scale-95 transition duration-200">
              Login
            </button>
          </Link>
        )}
        <Link to="/cart">
          <div className="relative">
            <img
              src={cart_icon}
              alt="Cart Icon"
              className="w-[20px] md:w-[30px] lg:w-[40px]"
            />
            <div className="counter w-[18px] md:w-[22px] h-[18px] md:h-[22px] flex justify-center items-center absolute top-[-5px] right-[-5px] rounded-full text-[12px] md:text-[14px] text-white bg-red-500">
              {getTotalCartItems()}
            </div>
          </div>
        </Link>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;
