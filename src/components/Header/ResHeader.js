import React from "react";

function ResHeader() {
  return (
    <div>
      <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <a href="#!" className="block w-32">
            <img
              src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg"
              alt="logo"
              className="w-full"
            />
          </a>
          {/* logo end */}
          {/* searchbar */}
          <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fas fa-search" />
            </span>
            <input
              type="text"
              className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
              placeholder="search"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
            >
              Search
            </button>
          </div>
          {/* searchbar end */}
          {/* navicons */}
          <div className="space-x-4 flex items-center">
            <a
              href="wishlist.html"
              className="block text-center text-gray-700 hover:text-primary transition relative"
            >
              <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                5
              </span>
              <div className="text-2xl">
                <i className="far fa-heart" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
            </a>
            <a
              href="cart.html"
              className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative"
            >
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                3
              </span>
              <div className="text-2xl">
                <i className="fas fa-shopping-bag" />
              </div>
              <div className="text-xs leading-3">Cart</div>
            </a>
            <a
              href="account.html"
              className="block text-center text-gray-700 hover:text-primary transition"
            >
              <div className="text-2xl">
                <i className="far fa-user" />
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
          {/* navicons end */}
        </div>
      </header>
      {/* navbar */}
      <nav className="bg-gray-800 hidden lg:block">
        <div className="container">
          <div className="flex">
            {/* all category */}
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <span className="text-white">
                <i className="fas fa-bars" />
              </span>
              <span className="capitalize ml-2 text-white">All categories</span>
              <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                {/* single category */}
                <a
                  href="#!"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img
                    src="images/icons/bed.svg"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>
                {/* single category end */}
                {/* single category */}
                <a
                  href="#!"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img
                    src="images/icons/sofa.svg"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
                {/* single category end */}
                {/* single category */}
                <a
                  href="#!"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img
                    src="images/icons/office.svg"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Office</span>
                </a>
                {/* single category end */}
                {/* single category */}
                <a
                  href="#!"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img
                    src="images/icons/terrace.svg"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>
                {/* single category end */}
                {/* single category */}
                <a
                  href="#!"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img
                    src="images/icons/bed-2.svg"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                </a>
                {/* single category end */}
                {/* single category */}
                <a
                  href="#!"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img
                    src="images/icons/restaurant.svg"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
                {/* single category end */}
              </div>
            </div>
            {/* all category end */}
            {/* nav menu */}
            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 text-base capitalize">
                <a
                  href="index.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="shop.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                </a>
                <a
                  href="#!"
                  className="text-gray-200 hover:text-white transition"
                >
                  About us
                </a>
                <a
                  href="#!"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact us
                </a>
              </div>
              <a
                href="login.html"
                className="ml-auto justify-self-end text-gray-200 hover:text-white transition"
              >
                Login/Register
              </a>
            </div>
            {/* nav menu end */}
          </div>
        </div>
      </nav>
      {/* navbar end */}
      {/* mobile menubar */}
      <div className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        <a
          href="javascript:void(0)"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl" id="menuBar">
            <i className="fas fa-bars" />
          </div>
          <div className="text-xs leading-3">Menu</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fas fa-list-ul" />
          </div>
          <div className="text-xs leading-3">Category</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fas fa-search" />
          </div>
          <div className="text-xs leading-3">Search</div>
        </a>
        <a
          href="cart.html"
          className="text-center text-gray-700 hover:text-primary transition relative"
        >
          <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            3
          </span>
          <div className="text-2xl">
            <i className="fas fa-shopping-bag" />
          </div>
          <div className="text-xs leading-3">Cart</div>
        </a>
      </div>
      {/* mobile menu end */}
      {/* mobile sidebar menu */}
      <div
        className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow hidden"
        id="mobileMenu"
      >
        <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
          <div
            id="closeMenu"
            className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
          >
            <i className="fas fa-times" />
          </div>
          {/* navlink */}
          <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">
            Menu
          </h3>
          <div className>
            <a
              href="index.html"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="shop.html"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              About Us
            </a>
            <roa
              href="#"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Contact Us
            </roa>
          </div>
          {/* navlinks end */}
        </div>
      </div>
      {/* mobile sidebar menu end */}
    </div>
  );
}

export default ResHeader;
