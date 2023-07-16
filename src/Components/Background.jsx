import React from "react";

const Background = ({ img }) => {
  return (
    <div className="Bg__Image" style={{ backgroundImage: `url(${img})` }} />
  );
};

export default Background;
