import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

function Checkout() {
  return (
    <div>
      <Breadcrumb name="Checkout" />
      <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
          <form action>
            <h3 className="text-lg font-medium capitalize mb-4">checkout</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input type="text" className="input-box" />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input type="text" className="input-box" />
                </div>
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">Company Name</label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  County/Region <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Street Address <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Town/City <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Zip Code <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            ORDER SUMMARY
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">
                  Italian Shape Sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-600">x3</p>
              <p className="text-gray-800 font-medium">$320</p>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-200 mt-1">
            <h4 className="text-gray-800 font-medium my-3 uppercase">
              Subtotal
            </h4>
            <h4 className="text-gray-800 font-medium my-3 uppercase">$320</h4>
          </div>
          <div className="flex justify-between border-b border-gray-200">
            <h4 className="text-gray-800 font-medium my-3 uppercase">
              Shipping
            </h4>
            <h4 className="text-gray-800 font-medium my-3 uppercase">Free</h4>
          </div>
          <div className="flex justify-between">
            <h4 className="text-gray-800 font-semibold my-3 uppercase">
              Total
            </h4>
            <h4 className="text-gray-800 font-semibold my-3 uppercase">$320</h4>
          </div>

          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              id="agreement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              htmlFor="agreement"
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              Agree to our
              <a href="#!" className="text-primary">
                terms &amp; conditions
              </a>
            </label>
          </div>

          <Link
            to="/orderComplete"
            className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition text-sm w-full block text-center"
          >
            Place order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
