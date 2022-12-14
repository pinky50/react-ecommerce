import React from "react";
import { AiOutlineBars } from "react-icons/ai";
// import { GiBallerinaShoes } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer">
          <span className="text-white text-xl mr-6">
            <AiOutlineBars />
          </span>
          <span className="ml-2 text-white">All Catagories</span>

          {/* <div className="absolute w-full left-0 top-full  shadow-md py-3">
            <a
              href="/"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <GiBallerinaShoes />
              <span className="ml-6 text-gray-600 text-sm">Shoes</span>
            </a>
          </div> */}
        </div>
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link to="/" className="text-gray-200 hover:text-white transition">
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-200 hover:text-white transition"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
          <div className="text-white">
            <Link to="/login">Login</Link> /{" "}
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
