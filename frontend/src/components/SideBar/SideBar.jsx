import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[50%] h-full bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        ✕
      </button>
      <ul className="flex flex-col items-start gap-6 p-6 pt-16 text-gray-700 text-lg font-medium">
        <li>
          <Link to="/" onClick={onClose}>Shop</Link>
        </li>
        <li>
          <Link to="/mens" onClick={onClose}>Men</Link>
        </li>
        <li>
          <Link to="/womens" onClick={onClose}>Women</Link>
        </li>
        <li>
          <Link to="/kids" onClick={onClose}>Kids</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
