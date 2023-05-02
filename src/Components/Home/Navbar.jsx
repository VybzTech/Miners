import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [lightNav, setLightNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
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
    <nav className="Navbar">
      <div className="Logo">
        <p>Platinum Ville</p>
        <span>mines limited</span>
      </div>
      <nav>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Products">Products</a>
        <a href="#Services">Services</a>
        <a href="#Contact">Contact</a>
      </nav>
    </nav>
  );
};

export default Navbar;
