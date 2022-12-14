import React from "react";
import product1 from "../../images/product9.jpg";
import product2 from "../../images/product1.jpg";
import product3 from "../../images/product8.jpg";
import product4 from "../../images/product10.jpg";
import SingleProduct from "../Home/SingleProduct";

function RecomendedProducts() {
  const RecomandedProduct = [
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
    {
      img: product3,
      name: " pilagea lougue",
      content: "Fabric Accent Chair",
      price: "65",
      previousPrice: "95",
    },
  ];
  return (
    <div className="container pb-16">
      <h2 className="text-3xl font-medium text-grey-800 uppercase mb-6 mt-6">
        RECOMENDED FOR YOU
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {RecomandedProduct.map((productItem, i) => {
          return <SingleProduct {...productItem} key={i} />;
        })}
      </div>
    </div>
  );
}

export default RecomendedProducts;
