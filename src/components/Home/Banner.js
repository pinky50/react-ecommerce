import React from "react";
import background1 from "../../images/banner-1.jpg";

function Banner() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{
        backgroundImage: `url(${background1})`,
        height: "100%",
      }}
    >
      <div className="container">
        <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
          Best Collection For <br className="hidden sm:block" /> Home Decoration
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat{" "}
          <br />
          voluptas labore doloribus praesentium nemo deserunt qui dolorum
        </p>
        <div className="mt-12">
          <a
            href="/"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
