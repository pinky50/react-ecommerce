import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
// import Products from "../Home/Products";
import product1 from "../../images/product9.jpg";
import product2 from "../../images/product1.jpg";
import product3 from "../../images/product8.jpg";
import product4 from "../../images/product10.jpg";
import SingleProduct from "../Home/SingleProduct";

function Shop() {
  const ShopProduct = [
    {
      img: product1,
      name: " Guyer chair",
      content: "Black Bedside",
      price: "45",
      previousPrice: "55",
    },
    {
      img: product2,
      name: " mediline Sofa",
      content: "Queen Headboard",
      price: "55",
      previousPrice: "65",
    },
    {
      img: product3,
      name: "bianco chair ",
      content: "Fabric Sofa Bed",
      price: "75",
      previousPrice: "85",
    },
    {
      img: product4,
      name: " pilagea lougue",
      content: "Fabric Accent Chair",
      price: "65",
      previousPrice: "95",
    },
    {
      img: product3,
      name: " pilagea lougue",
      content: "Fabric Accent Chair",
      price: "65",
      previousPrice: "95",
    },
    {
      img: product1,
      name: " pilagea lougue",
      content: "Fabric Accent Chair",
      price: "65",
      previousPrice: "95",
    },
    {
      img: product2,
      name: " pilagea lougue",
      content: "Fabric Accent Chair",
      price: "65",
      previousPrice: "95",
    },
  ];
  // const addBtnClick = (product) => {
  //   console.log(product);
  // };

  return (
    <div>
      <Breadcrumb name="Shop" />
      <div className="container grid lg:grid-cols-4 md:grid-cols-3 gap-6 pt-4 pb-16 items-start">
        <div className="lg:col-span-1 md:col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="pt-4 pb-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Outdoor
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(75)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-3"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Sofa
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(100)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-4"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Office
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(75)</div>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-5"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-5"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Adidas
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(11)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-6"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-6"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Nike
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(73)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-7"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-7"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Easy
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(20)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-8"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-8"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Arong
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(35)</div>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-3">
                price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="Min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="Max"
                />
              </div>
            </div>
            <div className="pt-4 pb-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-3">
                size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>

                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    htmlFor="size-s"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-m"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-l"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xl"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-3">
                color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-white"
                  />
                  <label
                    htmlFor="color-white"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 block"
                    style={{ backgroundColor: "#fff" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-black"
                  />
                  <label
                    htmlFor="color-black"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 block"
                    style={{ backgroundColor: "#000" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-red"
                  />
                  <label
                    htmlFor="color-red"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 block"
                    style={{ backgroundColor: "#fc3d57" }}
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-2 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {ShopProduct.map((productItem, i) => (
              <SingleProduct {...productItem} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
