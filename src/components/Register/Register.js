import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container p-16 max-[600px]:p-4">
      <div className="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl max-[600px]:text-xl uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="text-gray-800 mb-6 text-sm">
          Register here if you don't have an account
        </p>
        <form action="">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Full Name <span class="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400 "
                placeholder="John Deo"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email Address <span class="text-primary">*</span>
              </label>
              <input
                type="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400 "
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password <span class="text-primary">*</span>
              </label>
              <input
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400 "
                placeholder="Type Password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-gray-600 mb-2 block"
              >
                Confirm Password <span class="text-primary">*</span>
              </label>
              <input
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400 "
                placeholder="Confirm your Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="agreement"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                I have read ang agree to the
              </label>
            </div>
            <div>
              <a href="/" className="text-primary">
                terms & conditions
              </a>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium"
            >
              Create account
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            or signup with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-medium text-sm hover:bg-blue-700"
          >
            Facebook
          </a>
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-medium text-sm hover:bg-yellow-500"
          >
            Google
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?
          <Link to="/login" className="text-primary ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
