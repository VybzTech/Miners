import React from "react";
import pic from "../../Images/Tractor-Cut.png";

const AboutImg = () => {
  return (
    <div className="AboutImg">
      {/* <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M29.9,-18.4C36,-6.6,36.4,7.3,30.5,16.9C24.5,26.6,12.3,31.9,0.6,31.6C-11.1,31.3,-22.3,25.3,-27.2,16.2C-32.2,7.2,-30.9,-5,-25.3,-16.4C-19.8,-27.8,-9.9,-38.5,1,-39.1C11.9,-39.6,23.8,-30.1,29.9,-18.4Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          // style="transition: all 0.3s ease 0s;"
        ></path>
      </svg> */}
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2000"
          fill="#F9D114"
        >
          <path d="M1912 1209c27-319-72-699-318-882-187-139-462-224-785-204S85 468 84 880c0 455 481 345 636 484s139 514 477 516c386 3 693-420 715-671Z"></path>
        </svg>
      </div>
      <img src={pic} alt="AboutImg" />
    </div>
  );
};

export default AboutImg;
