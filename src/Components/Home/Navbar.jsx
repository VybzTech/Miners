import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";

// const Navbar = withRouter(({ history }) => {
const Navbar = ({ navs, activeNav, set }) => {
  const [lightNav, setLightNav] = useState(false);

  // const [activeNav, set] = useState("Home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setLightNav(true);
      } else {
        setLightNav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [lightNav]);
  // const navs = ["Home", "About", "Products", "Services", "Contact"];

  return (
    <nav className={`Navbar ${lightNav === true ? "Light" : "Fade"}`}>
      <div
        className="Logo"
        // onClick={() => {
        // history.push("/");
        // }}
      >
        <span>p</span>
        <p>
          Platinum Ville mines
          {/* <span>mines</span> */}
        </p>
      </div>
      <nav>
        {navs.map((nav) => (
          <a
            key={nav}
            href={`#${nav}`}
            className={activeNav === nav ? "screen" : ""}
            onClick={() => set(nav)}
          >
            {nav}
          </a>
        ))}
        {/* <a href="#Home" className={activeNav==="Home"?'screen':''}>Home</a>
        <a href="#About" className={activeNav==="About"?'screen':''}>About</a>
        <a href="#Products" className={activeNav==="Products"?'screen':''}>Products</a>
        <a href="#Services" className={activeNav==="Services"?'screen':''}>Services</a>
        <a href="#Contact" className={activeNav==="Contact"?'screen':''}>Contact</a>
        
        
        import ReactVisibilitySensor from 'react-visibility-sensor'
        
        <ReactVisibilitySensor
			resizeCheck={true}
			delayedCall={true}
			scrollCheck={true}
			scrollDelay={150}
			partialVisibility={true}
			minTopValue={200}
			onChange={(isVisible) =>
				setAnime(isVisible)
			}
			active={!anime}
		>


        */}
      </nav>
    </nav>
  );
};

export default Navbar;
