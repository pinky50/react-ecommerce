import React from "react";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import brand4 from "../../images/brand4.png";

function Partners() {
  return (
    <div>
      <h1 className="text-grey uppercase text-center text-3xl font-medium">
        Our Partners
      </h1>
      <div className="flex container justify-between">
        <div className="grid lg:grid-cols-2 md:grid-cols-4">
          <img src={brand1} alt="" />
        </div>
        <div className="grid grid-cols-2 ">
          <img src={brand2} alt="" />
        </div>
        <div className="grid grid-cols-2 ">
          <img src={brand3} alt="" />
        </div>
        <div className="grid grid-cols-2 ">
          <img src={brand4} alt="" />
        </div>
        <div className="grid grid-cols-2 ">
          <img src={brand1} alt="" />
        </div>
        <div className="grid grid-cols-2 ">
          <img src={brand2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
