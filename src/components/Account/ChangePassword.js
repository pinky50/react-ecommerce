import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProfileLeftSide from "./ProfileLeftSide";

function ChangePassword() {
  return (
    <div>
      <Breadcrumb name="Change Password" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <ProfileLeftSide />
        </div>
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            Change Password
          </h4>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Current Password
                </label>
                <input
                  type="password"
                  className="input-box w-1/2"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  New Password
                </label>
                <input
                  type="password"
                  className="input-box w-1/2"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Retype
                </label>
                <input
                  type="password"
                  className="input-box w-1/2"
                  placeholder="Repeat your password"
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

export default ChangePassword;
