import React from "react";
import pic from "../../Images/Tractor-Cut.png";

const AboutImg = () => {
  return (
    <div className="AboutImg">
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
