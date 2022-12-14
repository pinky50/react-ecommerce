import React from "react";
import SingleFeature from "./SingleFeature";

function Feature() {
  const FeatureItems = [
    {
      img: "https://themes.programmingkit.xyz/rafcart/assets/images/svg/delivery-van.svg",
      title: " Free Shipping",
      content: "Orders over $200",
    },
    {
      img: "https://themes.programmingkit.xyz/rafcart/assets/images/svg/money-back.svg",
      title: " Money Returns",
      content: "30 Days money return",
    },
    {
      img: "https://themes.programmingkit.xyz/rafcart/assets/images/svg/service-hours.svg",
      title: " 24/7 Support",
      content: "Customer support",
    },
  ];
  return (
    <div className="container py-16">
      <div className="w-10/12 grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-auto justify-center">
        {FeatureItems.map((FeatureItem, i) => {
          return <SingleFeature {...FeatureItem} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Feature;
