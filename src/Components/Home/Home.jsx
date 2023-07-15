import React, { useState } from "react";
import Background from "../Background";
import pic1 from "../../Images/Tractor.jpg";
import pic2 from "../../Images/Excavator.jpg";
import pic3 from "../../Images/Scoop-tractor.jpg";
import pic4 from "../../Images/Bulldozer.jpg";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import mouse from "../../Images/Svg/Mouse.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="Home">
      <Swiper
        slidesPerView={1}
        loop
        spaceBetween={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          const interval = setInterval(() => {
            setTimeout(() => {
              swiper.slideNext(1500);
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
      >
        <SwiperSlide>
          <Background img={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <Background img={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <Background img={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <Background img={pic4} />
        </SwiperSlide>
      </Swiper>
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
        <img src={mouse} alt="mouse" />
      </main>
    </section>
  );
};

export default Home;
