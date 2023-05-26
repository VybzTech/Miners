import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
// const Navbar = withRouter(({ history }) => {
const Navbar = ({ navs, activeNav, set }) => {
  const [lightNav, setLightNav] = useState(false);
  const [smallNav, setSmallNav] = useState(false);

  // const [activeNav, set] = useState("Home");

  console.log("I have rendered");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      console.log("I scrolled");
      if (window.scrollY > 50) {
        setLightNav(true);
      } else {
        setLightNav(false);
      }
    });
    console.log("I am re rendering");
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [lightNav]);
  // const navs = ["Home", "About", "Products", "Services", "Contact"];

  return (
    <nav
      className={`Navbar ${lightNav === true ? "Light" : "Fade"} ${
        smallNav === true ? "small" : "nosmall"
      }`}
    >
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
        {navs?.map((nav) => (
          <a
            key={nav}
            href={`#${nav}`}
            className={activeNav === nav ? "screen" : ""}
            onClick={() => set(nav)}
          >
            {nav}
          </a>
        ))}
      </nav>
      <div className="hamburger" onClick={() => setSmallNav(!smallNav)}>
        <RxHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
