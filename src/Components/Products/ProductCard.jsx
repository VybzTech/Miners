import React from "react";
// import { BsBattery } from "react-icons/bs";
// import { Swiper, SwiperSlide } from 'swiper/react';

const ProductCard = ({ product }) => {
  // console.log(product);
  const { name, content, img, svg } = product;
  // console.log(product);
  // const shorten = (p) => p.substr(0, 80) + "...";
  return (
    <div className="card">
      {/* <div >
    </div> */}
      <img src={img} alt={name} />
      <div className="container">
        <h3>{name}</h3>
        <hr />
        <p>{content}</p>
      </div>
      <span>
        {svg}
        {/* <BsBattery /> */}
      </span>
      {/* PREVIEW LINK */}
    </div>
    // </SwiperSlide>
  );
};

export default ProductCard;
