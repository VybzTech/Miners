import React, { useState } from "react";
import Background from "../Background";
import Navbar from "./Navbar";

const Home = () => {
  const [img, setImg] = useState("");
  return (
    <section id="Home">
      <Background img={img} />
      <Navbar />
      <main>
        <h1>What</h1>
        <h1>
          we <br />
          do
        </h1>
        <a href="#Lithium">Lithium Mining</a>
        <div className="img_Counter">01</div>
      </main>
    </section>
  );
};

export default Home;