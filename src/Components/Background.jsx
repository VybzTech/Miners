import React from "react";
// import pic from "../Images/pxfuel.jpg";
// import "../Styles/Home/Bg.css";
// import "../Styles/Home/Bg.css";

const Background = ({ img }) => {
  return (
    <div className="Bg__Image" style={{ backgroundImage: `url(${img})` }}></div>
  );
};

export default Background;
