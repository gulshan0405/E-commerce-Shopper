import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center gap-8 px-4 sm:px-8 lg:px-16 py-10 bg-gray-100">
      {/* Footer Logo */}
      <div className="footer-logo flex flex-col sm:flex-row items-center gap-4">
        <img src={footer_logo} alt="Shopper Logo" className="w-[80px] sm:w-[100px]" />
        <p className="text-[#383838] text-3xl sm:text-4xl lg:text-5xl font-semibold">
          SHOPPER
        </p>
      </div>

      {/* Footer Links */}
      <ul className="footer-links flex flex-wrap justify-center gap-6 sm:gap-10 text-[#252525] text-lg sm:text-xl font-medium">
        <li className="cursor-pointer hover:text-gray-700">Company</li>
        <li className="cursor-pointer hover:text-gray-700">Products</li>
        <li className="cursor-pointer hover:text-gray-700">Offices</li>
        <li className="cursor-pointer hover:text-gray-700">About</li>
        <li className="cursor-pointer hover:text-gray-700">Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icons flex gap-6">
        <div className="footer-icon-container p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition">
          <img src={instagram_icon} alt="Instagram" className="w-6 h-6" />
        </div>
        <div className="footer-icon-container p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition">
          <img src={pintester_icon} alt="Pinterest" className="w-6 h-6" />
        </div>
        <div className="footer-icon-container p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition">
          <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright flex flex-col items-center w-full gap-4">
        <hr className="w-4/5 border-none rounded-full h-[2px] bg-gray-300" />
        <p className="text-gray-600 text-sm sm:text-base">
          Copyright © 2025 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
