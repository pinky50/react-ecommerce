import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { selectTotalCartItems } from "../../redux/slices/basketSlice";

function Header() {
  // const totalCartItems = useSelector(selectTotalCartItems);
  return (
    <div className=" py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img
            src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg"
            alt=""
            className="w-32"
          />
        </Link>
        <div className="w-full max-w-xl relative flex">
          <span className="absolute  left-4 top-4 items-center text-xl text-gray-400">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-primary border border-primary text-xl text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/wishlist"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-4xl">
              <AiOutlineHeart />
            </div>
            <div className="text-xs leading-3">Wish List</div>
            <span className="absolute right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </span>
          </Link>
          <Link
            to="/cart"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-4xl">
              <AiOutlineShoppingCart />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <span className="absolute -right-2 -top-2  w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              0
            </span>
          </Link>
          <Link
            to="/account"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-4xl">
              <AiOutlineUser />
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
