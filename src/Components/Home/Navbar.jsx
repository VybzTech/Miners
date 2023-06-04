import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
// const Navbar = withRouter(({ history }) => {
const Navbar = ({ navs, activeNav, set }) => {
  const [lightNav, setLightNav] = useState(false);
  const [smallNav, setSmallNav] = useState(false);

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

  return (
    <nav
      className={`Navbar ${lightNav === true ? "Light" : "Fade"} ${
        smallNav === true ? "small" : "nosmall"
      }`}
    >
      <div className="Logo" onClick={() => window.scroll(0, 0)}>
        <span>p</span>
        <p>Platinum Ville mines</p>
      </div>
      <nav>
        {navs?.map((nav) => (
          <a
            key={nav}
            href={`#${nav}`}
            className={activeNav === nav ? "screen" : ""}
            onClick={() => {
              set(nav);
              setSmallNav(!smallNav);
            }}
          >
            {nav}
          </a>
        ))}
      </nav>
      <div className="hamburger" onClick={() => setSmallNav(!smallNav)}>
        {smallNav ? <CgClose /> : <RxHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
