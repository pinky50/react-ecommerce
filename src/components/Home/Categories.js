import React from "react";
import SingleCategories from "./SingleCategories";
import category1 from "../../images/category-1.jpg";
import category2 from "../../images/category-2.jpg";
import category3 from "../../images/category-3.jpg";
import category4 from "../../images/category-4.jpg";
import category5 from "../../images/category-5.jpg";
import category6 from "../../images/category-6.jpg";

function Categories() {
  const CategoriesItems = [
    {
      img: category1,
      content: "Bedroom",
    },

    {
      img: category2,
      content: "Mattresses",
    },
    {
      img: category3,
      content: "Office",
    },
    {
      img: category4,
      content: "Outdoor",
    },
    {
      img: category5,
      content: "Lounges & Sofas",
    },
    {
      img: category6,
      content: "Living & Dining",
    },
  ];
  return (
    <div className="container py-8 ">
      <h2 className="text-3xl font-medium text-grey-800 uppercase mb-6">
        shop by categories
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {CategoriesItems.map((CategoriesItem, i) => {
          return <SingleCategories {...CategoriesItem} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
