import React from "react";
// import Background from "../Background";
// import Pic from "../../Images/Lands.jpg";
import { PRODUCTS } from "../Services/Data";
import ProductCard from "./ProductCard";
// import Bg fromimport "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css/scrollbar";
register();
const Products = () => {
  return (
    <section id="Products">
      {/* <Background img={Pic} /> */}
      <div className="hero">
        <span>your best choice</span>
        {/* <p>
          With more than thousands of items produced from Lithium, here are a
          few we are offering at very affordable prices.
        </p> */}
        <h1>Products</h1>
        <h2>Our Products</h2>
      </div>
      <main>
        <Swiper
          navigation
          // scrollbar
          // loopedSlides={6}
          //   slidesPerView={3.5}
          slidesPerView={2.5}
          // loop={true}
          // loop
          // freeMode
          // spaceBetween={300}
          spaceBetween={80}
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => {}}
        >
          {PRODUCTS.map((prod) => (
            <SwiperSlide key={prod?.name}>
              <ProductCard product={prod} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
};

export default Products;
