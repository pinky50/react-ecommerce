import React from "react";
import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function SingleProduct({
  img,
  name,
  content,
  price,
  previousPrice,
  onClick,
  exists,
  id,
  size,
}) {
  return (
    <div>
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <img src={img} alt="" className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <Link
              to="/view"
              className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaEye />
            </Link>
            <a
              href="/"
              className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaRegHeart />
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <a href="/">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              {name}
            </h4>
          </a>
          <p className="text-[#464545] text-sm mb-[10px]">{content}</p>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">{price}</p>
            <p className="text-sm text-gray-400 font-semibold line-through">
              {previousPrice}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex text-sm text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-xs text-gray-500 ml-3">(200)</div>
          </div>
        </div>
        <button
          onClick={onClick}
          className="block w-full py-2 uppercase text-center text-white bg-primary font-semibold border border-primary  rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to cart
          {exists && "bingo"}
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
