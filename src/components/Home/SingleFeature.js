import React from "react";

function SingleFeature({ img, title, content }) {
  return (
    <div>
      {" "}
      <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <img src={img} alt="" className="w-12 h-12 object-contain" />
        <div>
          <h4 className="font-medium capitalize text-lg">{title}</h4>
          <p className="text-gray-500 text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleFeature;
