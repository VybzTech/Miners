import React, { useRef, useEffect, useState } from "react";
import Background from "../Background";
import Navbar from "./Navbar";
import pic1 from "../../Images/Tractor.jpg";
import pic2 from "../../Images/Bulldozer.jpg";
import pic3 from "../../Images/Excavator.jpg";
import pic4 from "../../Images/Scoop-tractor.jpg";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiper } from "swiper/react";
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
  // const [img, setImg] = useState(pic);
  const [count, setCount] = useState(0);

  // const swiper = useSwiper();
  useEffect(() => {
    // const slide = () => swiper.slideNext();
    // onClick={() => swiper.slideNext()}
    // setTimeout(slide(), 1000);
    // swiperEl.addEventListener('progress', (event) => {
    //   const [swiper, progress] = event.detail;
    // });
    // swiperEl.addEventListener('slidechange', (event) => {
    //   console.log('slide changed');
    // });
  }, []);

  return (
    <section id="Home">
      <Swiper
        // navigation
        slidesPerView={1}
        loop
        spaceBetween={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          // const swiper;
          // const counter = swiper.realIndex;
          const interval = setInterval(() => {
            // console.log(swiper.activeIndex);
            // !swiper.animating ? swiper.activeIndex : "Animating Now"
            setTimeout(() => {
              swiper.slideNext(1500);
              // console.log(swiper.realIndex);
              // console.log(swiper.activeIndex);
              // console.log(swiper.animating);

              if (swiper.realIndex !== undefined) {
                if (count === 4) {
                  setCount(0);
                } else {
                  setCount(swiper.realIndex);
                }
              }
            }, 3000);
          }, 5000);
          return () => clearInterval(interval);
        }}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Background img={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <Background img={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <Background img={pic4} />
        </SwiperSlide>
        <SwiperSlide>
          <Background img={pic2} />
        </SwiperSlide>
      </Swiper>
      <Navbar />
      <main>
        <div className="title">
          <h1>What</h1>
          <h1>
            we <br />
            do
          </h1>
          <a href="#Lithium">Lithium Mining</a>
        </div>
        <p className="img_Counter">0{count + 1}</p>
      </main>
    </section>
  );
};

export default Home;
