import React from "react";
import { TfiAngleRight, TfiHome } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  const { name } = props;
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link to="/" className="text-primary text-[18px]">
        <TfiHome />
      </Link>
      <span className=" text-grey-400 text-[18px]">
        <TfiAngleRight />
      </span>
      <p className="text-gray-600 font-medium">{name}</p>
    </div>
  );
}

export default Breadcrumb;
