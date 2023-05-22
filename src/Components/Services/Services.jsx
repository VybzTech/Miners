import React from "react";
// import Background from '../Background';
import Pic from "../../Images/Drilled-Hole.jpg";
import Served from "../Services/Served";
import Service1 from "../../Images/Services/Mining-Industry.jpg";
import Service2 from "../../Images/Services/Mining_FuelEconomy.jpg";
import Service3 from "../../Images/Services/Tom-Swinnen.jpg";
import Service4 from "../../Images/Services/Pixabay.jpg";
// import Service5 from '../../Images/Services/heavy-mining-truck.png';
import Service5 from "../../Images/Services/Truck_Cover.jpg";
import Service6 from "../../Images/Services/heavy-mining.jpg";
import LithiumBg from "../Home/LithiumBg";

const Services = () => {
  const ServiceArray = [
    { service: "Mining development", img: Service1 },
    { service: "Mining of mineral deposits", img: Service2 },
    { service: "Consultancy", img: Service3 },
    { service: "Exploration", img: Service4 },
    { service: "Technical expertise", img: Service5 },
    { service: "Mining infrastructure", img: Service6 },
  ];

  return (
    <section id="Services">
      <LithiumBg img={Pic} color={"#000c"} color2={"#222e"} />
      {/* <LithiumBg img={Pic} color={'#000a'} color2={'#222a'} /> */}
      <div className="container">
        <h2>Our Services</h2>
        <div className="OurServices">
          {ServiceArray.map((service, i) => (
            <Served key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
