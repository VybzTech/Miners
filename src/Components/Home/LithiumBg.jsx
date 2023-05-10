import React from "react";
// import pic from "../Images/pxfuel.jpg";
// import "../Styles/Home/Bg.css";
// import "../Styles/Home/Bg.css";

const LithiumBg = ({ img }) => {
  return (
    <div
      className="Bg__Image"
      style={{
        backgroundImage: `linear-gradient(0deg,#2e0f10cc,#2e0f10af), url(${img})`,
      }}
    ></div>
  );
};

export default LithiumBg;
