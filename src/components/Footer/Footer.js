import React from "react";

function footer() {
  return (
    <div className="bg-[#f3f3f3] pt-16 pb-12 border-t border-gray-100">
      <div className="container xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="xl:col-span-1 space-y-8">
          <img
            src="https://themes.programmingkit.xyz/rafcart/assets/images/svg/logo.svg"
            alt=""
            className="w-30"
          />
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            harum fugiat officiis odio. Reiciendis tempora eum debitis
            perferendis ratione. Quas.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analysis
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Supports
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Api Status
                </a>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                company
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Blog
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Jobs
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Press
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                legal
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Claim
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Privacy
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Policy
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Term
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
