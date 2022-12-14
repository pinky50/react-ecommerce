import React from "react";
import Banner from "../Home/Banner";
import Categories from "../Home/Categories";
import Feature from "../Home/Feature";
import Products from "../Home/Products";
import RecomendedProducts from "../Home/RecomendedProducts";
import Ad from "./Ad";

function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Categories />
      <Products />
      <Ad />
      <RecomendedProducts />
    </div>
  );
}

export default Home;
