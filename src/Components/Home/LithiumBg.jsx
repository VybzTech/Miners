import React from 'react';
// import pic from "../Images/pxfuel.jpg";
// import "../Styles/Home/Bg.css";
// import "../Styles/Home/Bg.css";

const LithiumBg = ({ img, color, color2 }) => {
    return (
        <div
            className='Bg__Image'
            style={{
                backgroundImage: `linear-gradient(0deg,${color},${color2}), url(${img})`,
            }}
        />
    );
};

export default LithiumBg;
