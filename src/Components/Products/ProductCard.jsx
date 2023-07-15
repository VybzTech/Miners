import React from "react";

const ProductCard = ({ product }) => {
  const { name, content, img, svg } = product;
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="container">
        <h3>{name}</h3>
        <hr />
        <p>{content}</p>
      </div>
      <span>{svg}</span>
    </div>
  );
};

export default ProductCard;
