import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProfileLeftSide from "./ProfileLeftSide";

function ProfileInformation() {
  return (
    <div>
      <Breadcrumb name="Profile Information" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <ProfileLeftSide />
        </div>
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            profile information
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  First Name
                </label>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Birthday
                </label>
                <input type="date" className="input-box" placeholder="" />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Gender
                </label>
                <select className="input-box">
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Others</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="input-box"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="input-box"
                  placeholder="123 456 789"
                />
              </div>
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

export default ProfileInformation;
