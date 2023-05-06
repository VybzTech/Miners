import React, { useEffect, useState } from "react";
import Background from "../Background";
import Pic from "../../Images/Tractors.jpg";
import { LITHIUM__MINING } from "../Services/Data";
import Roller from "../Roller";
import LithiumBubble from "../LithiumBubble";

const Lithium = () => {
  const [tabbed, set] = useState(true);
  useEffect(() => {}, []);
  const LithiumInfo = tabbed ? LITHIUM__MINING[0] : LITHIUM__MINING[1];
  // console.log(LithiumInfo?.content);
  return (
    <section id="Lithium">
      <Background img={Pic} />
      <h2>Lithium Mining</h2>
      <Roller infos={LithiumInfo?.content} />;
      <LithiumBubble tabbed={tabbed} set={set} LithiumInfo={LithiumInfo} />
    </section>
  );
};

export default Lithium;
