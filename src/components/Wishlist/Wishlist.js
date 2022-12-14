import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProfileLeftSide from "../Account/ProfileLeftSide";
import product1 from "../../images/product10.jpg";
import product2 from "../../images/product9.jpg";
import { TfiTrash } from "react-icons/tfi";

function Wishlist() {
  return (
    <div>
      {" "}
      <Breadcrumb name="Wishlist" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <ProfileLeftSide />
        </div>
        <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
          <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            <div className="w-28 flex-shrink-0">
              <img src={product1} alt="" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 mb-1 xl:text-xl text-lg font-medium uppercase">
                Italian Shape Sofa
              </h2>{" "}
              <p className="text-gray-500 text-sm">
                Availablity: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$45.00</div>
            <a
              href="#!"
              className="px-6 max-[320px]:px-4 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium"
            >
              Add to cart
            </a>
            <div className="text-gray-600 cursor-pointer hover:text-primary text-2xl">
              <TfiTrash />
            </div>
          </div>
          <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            <div className="w-28 flex-shrink-0">
              <img src={product2} alt="" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 mb-1 xl:text-xl text-lg font-medium uppercase">
                Italian Shape Sofa
              </h2>{" "}
              <p className="text-gray-500 text-sm">
                Availablity: <span class="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$75.00</div>
            <a
              href="#!"
              className="ml-auto md:ml-0 block px-6 max-[320px]:px-4 py-2 text-center text-sm text-white bg-primary border border-primary rounded 
                    uppercase font-roboto font-medium cursor-not-allowed bg-opacity-80"
            >
              Add to cart
            </a>
            <div className="text-gray-600 cursor-pointer hover:text-primary text-2xl">
              <TfiTrash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
