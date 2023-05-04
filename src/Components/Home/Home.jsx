import React, { useRef, useEffect, useState } from "react";
import Background from "../Background";
import Navbar from "./Navbar";
import pic from "../../Images/Tractor.jpg";
// import { , useEffect } from 'react';
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const Home = () => {
  const [img, setImg] = useState(pic);

  useEffect(() => {
    // swiperEl.addEventListener('progress', (event) => {
    //   const [swiper, progress] = event.detail;
    // });
    // swiperEl.addEventListener('slidechange', (event) => {
    //   console.log('slide changed');
    // });
  }, []);

  return (
    <section id="Home">
      {/* <swiper-container */}
      <Swiper
        // slides-per-view="3"
        // grid-rows="3"
        // mousewheel-force-to-axis="true"
        // speed="500"
        // loop="true"
        // css-mode="true"
        // navigation="true"
        // pagination="true"
        // scrollbar="true"
        // spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        {/* <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> */}
      </Swiper>
      {/* </Swiper-container> */}
      {/* 
  ...
<swiper-container>
  <!-- lazy="true" attribute will automatically render the prelaoder element -->
  <swiper-slide lazy="true">
    <img src="..." loading="lazy" />
  </swiper-slide>
  <swiper-slide lazy="true">
    <img src="..." loading="lazy" />
  </swiper-slide>
  <swiper-slide lazy="true">
    <img src="..." loading="lazy" />
  </swiper-slide>
  ...
</swiper-container>




register();

export const MyComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  );
};
 */}

      <Background img={img} />
      <Navbar />
      <main>
        <h1>What</h1>
        <h1>
          we <br />
          do
        </h1>
        <a href="#Lithium">Lithium Mining</a>
        <div className="img_Counter">01</div>
      </main>
    </section>
  );
};

export default Home;
