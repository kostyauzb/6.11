import React from "react";

const Card = ({ product }) => {
  const { images, title, price, description, category } = product;
  return (
    <div className="border p-6 rounded-lg">
      <img src={images[0]} className="rounded-lg" />
      <h3 className="font-bold text-xl my-3">{title}</h3>
      <p className="text-slate-500 mb-2">{description}</p>
      <div className="rounded-full mb-4 bg-gray-300 inline-block">
        {category.name}
      </div>
      <div className="flex justify-between items-center">
        <span>{price}</span>
        <button className="btn btn-primary">Add to Cart </button>
      </div>
    </div>
  );
};

export default Card;
