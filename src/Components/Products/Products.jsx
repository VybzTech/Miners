import React from "react";
import { PRODUCTS } from "../Services/Data";
import ProductCard from "./ProductCard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css/scrollbar";
register();
const Products = () => {
  return (
    <section id="Products">
      <div className="hero">
        <span>your best choice</span>
        <h1>Products</h1>
        <h2>Our Products</h2>
      </div>
      <main>
        <Swiper
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1.3,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1240: {
              slidesPerView: 3,
            },
          }}
          navigation
          spaceBetween={80}
          // OTHER VARIABLES scrollbar
          // loop={true}
          // freeMode
          // pagination={{ clickable: true }}
          // onSwiper={(swiper) => {}}
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
