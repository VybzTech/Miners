import React from "react";
import Footer from "./Footer";
import Background from "../Background";
import Pic from "../../Images/Contact_Track.jpg";

const Contact = () => {
  return (
    <section id="Contact">
      <Background img={Pic} />
      <p>stay in touch</p>
      <h2>Leave us a message</h2>
      <Footer />
    </section>
  );
};

export default Contact;
