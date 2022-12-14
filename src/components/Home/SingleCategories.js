import React from "react";

function SingleCategories({ img, content }) {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img src={img} alt="" className="w-full" />
      <a
        href="/"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-50 transition"
      >
        {content}
      </a>
    </div>
  );
}

export default SingleCategories;
