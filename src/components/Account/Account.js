import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProfileLeftSide from "./ProfileLeftSide";

function Account() {
  return (
    <div>
      <Breadcrumb name="My account" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="lg:col-span-3 col">
          <ProfileLeftSide />
        </div>
        <div className="lg:col-span-9 col grid lg:grid-cols-3 grid-col-12 gap-4">
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Personal Profile
              </h3>
              <a href="/" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">Rassel ahmed</h4>
              <p className="text-gray-700">Example@gmail.com</p>
              <p className="text-gray-700">(123) 456-789</p>
            </div>
          </div>
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Shipping Address
              </h3>
              <a href="/" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">Ralph Bohner</h4>
              <p className="text-gray-700">
                3891 Ranchview Dr. Richardson, Califora
              </p>
              <p className="text-gray-700">(123) 456-789</p>
            </div>
          </div>
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Billing Address
              </h3>
              <a href="/" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">Ralph Bohner</h4>
              <p className="text-gray-700">
                3891 Ranchview Dr. Richardson, Califora
              </p>
              <p className="text-gray-700">(123) 456-789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
