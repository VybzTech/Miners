import React from "react";

const Navbar = () => {
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
