import React from "react";
import Background from "../Background";
import Pic from "../../Images/Drilled-Hole.jpg";
import Served from "../Services/Served";
import Service1 from "../../Images/Services/heavy-mining-truck.png";
import Service2 from "../../Images/Services/heavy-mining-truck.png";
import Service3 from "../../Images/Services/heavy-mining-truck.png";
import Service4 from "../../Images/Services/heavy-mining-truck.png";
import Service5 from "../../Images/Services/heavy-mining-truck.png";
import Service6 from "../../Images/Services/heavy-mining-truck.png";

const Services = () => {
    const ServiceArray = [
        { service: 'Mining development', img: Service1 },
        { service: 'Mining of mineral deposits', img: Service2 },
        { service: 'Consultancy', img: Service3 },
        { service: 'Exploration', img: Service4 },
        { service: 'Technical expertise', img: Service5 },
        { service: 'Mining infrastructure', img: Service6 },
    ];

  return (
    <section id="Services">
      <h2>Our Services</h2>
      <Background img={Pic} />
      {ServiceArray.map((service, i) => (
        <Served key={i} service={service} />
      ))}
    </section>
  );
};

export default Services;
