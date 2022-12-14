import React from "react";
import user from "../../images/avatar-2.png";
import {
  TfiIdBadge,
  TfiCreditCard,
  TfiHeart,
  TfiPowerOff,
  TfiGift,
} from "react-icons/tfi";
import { Link } from "react-router-dom";

function ProfileLeftSide() {
  return (
    <div>
      <div className="flex px-4 py-3 shadow items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={user}
            alt=""
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover cursor-pointer"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Hello,</p>
          <h4 className="text-gray-800 font-medium">Russel Ahmed</h4>
        </div>
      </div>
      <div className="mt-6 bg-white rounded  shadow p-4 divide-y mb-6  divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-2 pl-8 ">
          <a
            href="/account"
            className="relative text-primary items-center block font-medium capitalize transition text-xl"
          >
            <span className="absolute -left-8 top-1 text-xl">
              <TfiIdBadge />{" "}
            </span>
            Manage My Account
          </a>
          <Link
            to="/profileInformation"
            className="relative hover:text-primary items-center block  capitalize transition"
          >
            Profile Information
          </Link>
          <Link
            to="/manageAddress"
            className="relative hover:text-primary items-center block  capitalize transition"
          >
            Manage Address
          </Link>
          <Link
            to="/changePassword"
            className="relative hover:text-primary items-center block  capitalize"
          >
            Change Password
          </Link>
        </div>
        <div className="space-y-2 pl-8 pt-4 ">
          <a
            href="/"
            className="relative hover:text-primary items-center block font-medium capitalize transition text-xl"
          >
            <span className="absolute -left-8 top-1 text-xl">
              <TfiGift />{" "}
            </span>
            my order history
          </a>
          <a
            href="/"
            className="relative hover:text-primary items-center block  capitalize transition"
          >
            My returns
          </a>
          <a
            href="/"
            className="relative hover:text-primary items-center block  capitalize transition"
          >
            my collections
          </a>
          <a
            href="/"
            className="relative hover:text-primary items-center block  capitalize"
          >
            my reviews
          </a>
        </div>
        <div className="space-y-2 pl-8 pt-4">
          <a
            href="/"
            className="relative hover:text-primary items-center block font-medium  capitalize transition text-xl"
          >
            <span className="absolute -left-8 top-1 text-xl">
              <TfiCreditCard />{" "}
            </span>
            Payment methods
          </a>
          <a
            href="/"
            className="relative hover:text-primary items-center block  capitalize transition"
          >
            Voucher
          </a>
        </div>
        <div className="space-y-2 pl-8 pt-4">
          <Link
            to="/wishlist"
            className="relative hover:text-primary items-center block font-medium capitalize transition text-xl"
          >
            <span className="absolute -left-8 top-1 text-xl">
              <TfiHeart />{" "}
            </span>
            my wishlist
          </Link>
        </div>
        <div className="space-y-2 pl-8 pt-4">
          <Link
            to="/login"
            className="relative hover:text-primary items-center block font-medium capitalize transition text-xl"
          >
            <span className="absolute -left-8 top-1 text-xl">
              <TfiPowerOff />{" "}
            </span>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftSide;
