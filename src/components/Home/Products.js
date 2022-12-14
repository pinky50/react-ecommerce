import React from "react";
import SingleProduct from "./SingleProduct";
import product1 from "../../images/product9.jpg";
import product2 from "../../images/product1.jpg";
import product3 from "../../images/product8.jpg";
import product4 from "../../images/product10.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectItems } from "../../redux/slices/basketSlice";

function Products() {
  const ProductItems = [
    {
      id: "1",
      img: product1,
      name: " Guyer chair",
      content: "Black Bedside",
      price: "45",
      previousPrice: "55",
      size: "XL",
    },
    {
      id: "2",
      img: product2,
      name: " mediline Sofa",
      content: "Queen Headboard",
      price: "55",
      previousPrice: "65",
      size: "S",
    },
    {
      id: "3",
      img: product3,
      name: "bianco chair ",
      content: "Fabric Sofa Bed",
      price: "75",
      previousPrice: "85",
      size: "M",
    },
    {
      id: "4",
      img: product4,
      name: " pilagea lougue",
      content: "Fabric Accent Chair",
      price: "65",
      previousPrice: "95",
      size: "L",
    },
  ];
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);
  const addToBasket = (product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };
  const checkItemExists = (id) => {
    console.log(id);
    const find = cartItems.filter((item) => item.id === id);
    return !!find.length;
  };
  return (
    <div className="container pb-16">
      <h2 className="text-3xl font-medium text-grey-800 uppercase mb-6 mt-6">
        top new arrival
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {ProductItems.map((product) => {
          return (
            <SingleProduct
              {...product}
              key={product?.id}
              onClick={() => addToBasket(product)}
              exists={() => checkItemExists(product?.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
