import React from "react";
// import paymentMethod from "../../images/payment-method.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Copyright() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between max-[768px]:text-center">
        <p className="text-white">@ RAFCART - All Rights Reserved</p>
        <div className="flex space-x-6">
          <a href="/" className="text-gray-400 hover:text-gray-500 ">
            <FaFacebookF />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <FaInstagram />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <FaTwitter />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
