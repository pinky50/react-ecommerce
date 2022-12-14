import React from "react";

function SingleCart({
  img,
  title,
  price,
  size,
  onRemove,
  onIncrease,
  onDecrease,
  quantity,
}) {
  return (
    <div>
      {" "}
      <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
        <div className="w-32 flex-shrink-0">
          <img src={img} className="w-full" alt="" />
        </div>
        <div className="md:w-1/3 w-full">
          <h2 className="text-gray-800 mb-3 xl:text-xl text-lg font-medium uppercase">
            {title}
          </h2>
          <p className="text-primary font-semibold">${price}</p>
          <p className="text-gray-500">Size: {size}</p>
        </div>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            <button onClick={onDecrease}> -</button>
          </div>
          <div className="h-8 w-10 flex items-center justify-center">
            {quantity}
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            <button onClick={onIncrease}>+</button>
          </div>
        </div>
        <div className="ml-auto md:ml-0">
          <p className="text-primary text-lg font-semibold">
            {parseInt(price * quantity)}
          </p>
        </div>
        <div className="text-gray-600 hover:text-primary cursor-pointer">
          <button>
            <i className="fas fa-trash" onClick={onRemove} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
