import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 font-body pt-16 pb-12">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row gap-10 px-[100px]">
        
        {/* Logo & Tagline */}
        <div className="flex-[2] mb-10 md:mb-0">
          <h2 className="text-3xl font-heading text-white mb-4">Shoex</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Engineered for performance. Crafted for comfort. Designed to elevate your style. 
            Shoex combines innovation, quality, and modern aesthetics for every step you take.
          </p>
          <div className="flex space-x-4 mt-6 text-white text-xl">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex-[1.2] mb-10 md:mb-0">
          <h3 className="text-xl font-heading text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li><a href="#" className="hover:text-white transition">Men</a></li>
            <li><a href="#" className="hover:text-white transition">Women</a></li>
            <li><a href="#" className="hover:text-white transition">Kids</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex-[1.2] mb-10 md:mb-0">
          <h3 className="text-xl font-heading text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div className="flex-[1.2]">
          <h3 className="text-xl font-heading text-white mb-4">Contact</h3>
          <p className="text-gray-400 text-base mb-2">123 Shoex Street, Fashion City</p>
          <p className="text-gray-400 text-base mb-2">Email: support@shoex.com</p>
          <p className="text-gray-400 text-base mb-4">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 text-white text-xl">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
          </div>
        </div>

      </div> {/* Main flex container closed */}

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12"></div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm px-[100px] mt-6">
        <p>© {new Date().getFullYear()} Shoex. All rights reserved.</p>
        <div className="flex space-x-5 mt-3 md:mt-0">
          <img src="/payments/visa.png" alt="Visa" className="h-6" />
          <img src="/payments/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="/payments/paypal.png" alt="PayPal" className="h-6" />
          <img src="/payments/amex.png" alt="Amex" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
