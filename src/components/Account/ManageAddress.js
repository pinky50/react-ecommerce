import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProfileLeftSide from "./ProfileLeftSide";

function ManageAddress() {
  return (
    <div>
      <Breadcrumb name="Manage Address" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <ProfileLeftSide />
        </div>
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            Manage address
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="input-box"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Country
                </label>
                <select className="input-box">
                  <option value="">Bangladesh</option>
                  <option value="">India</option>
                  <option value="">Japan</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Region
                </label>
                <select className="input-box">
                  <option value="">Dhaka</option>
                  <option value="">Dinajpur</option>
                  <option value="">Others</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  City
                </label>
                <select className="input-box">
                  <option value="">Dhaka</option>
                  <option value="">Noakhali</option>
                  <option value="">Bogura</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Area
                </label>
                <select className="input-box">
                  <option value="">Dhanmondi</option>
                  <option value="">Mirpur</option>
                  <option value="">Badda</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Address
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Solmaid Eidgha Mosque"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className=" p-2 text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium"
              >
                save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAddress;
