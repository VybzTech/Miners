import Prod1 from "../../Images/Products/Mining_Augmented.jpg";
import Prod2 from "../../Images/Products/Haul-Trucks.jpg";
import Prod3 from "../../Images/Products/Mining_Industries.jpeg";
import Prod4 from "../../Images/Products/Night_Truck.jpg";
import Prod5 from "../../Images/Products/Mining_Parent.jpg";
import Prod6 from "../../Images/Products/Truck-driving-on-opencast.jpg";
import { ReactComponent as AirPurifier } from "../../Images/Svg/air purifier.svg";
import { ReactComponent as Battery } from "../../Images/Svg/battery.svg";
import { ReactComponent as Metallurgy } from "../../Images/Svg/Metalurgy.svg";
import { ReactComponent as Rockets } from "../../Images/Svg/Pyrotechnics.svg";
import { ReactComponent as Ceramics } from "../../Images/Svg/Ceramics.svg";
import { ReactComponent as Elect } from "../../Images/Svg/Elect.svg";

// SOME DATA FOR SERVICES
export const LITHIUM__MINING = [
  {
    name: "brine",
    star: 3,
    content: [
      "Lithium brine deposits are accumulations of saline ground water that are enriched in dissolved lithium. ",
      "Brine can mainly be found in closed basins in arid regions where lithium salts can be extracted. ",
      "It is pumped to the surface to be evaporated in a succession of ponds.",
      "Lithium carbonate is the final product of chemical plants that achieve a higher level of purity through transfer across ponds.",
      "The majority of the lithium made from brines is produced in Chile and Argentina, with a small portion also coming from Nevada in South America.",
    ],
  },
  {
    name: "hardrock",
    star: 4,
    content: [
      "Lithium reserves found in ‘hard rock’ are a part of minerals hosted in Pegmatites.",
      "When mineral-rich magma intrudes from magma chambers into the crust, pegmatites, which are intruding rock units, are created.",
      "Water and other minerals concentrate when the final portion of this lava cools. ",
      "The fast development of the massive crystals that set pegmatites apart from other rocks is catalyzed by these fluids rich in metal. ",
      "Pegmatites can range in size from a few millimeters to hundreds of meters, forming thick seams known as dikes that protrude into neighboring rocks.",
    ],
  },
];

// SOME DATA FOR PRODUCTS
export const PRODUCTS = [
  {
    name: "CERAMICS & GLASS",
    content:
      "Lithium oxide is widely used as a flux for processing silica reducing the melting point and viscosity of the material and leading to glazes with improved physical properties including low coefficients of thermal expansion.",
    img: Prod1,
    svg: <Ceramics />,
  },
  {
    name: "ELECTRICAL & ELECTRONICS",
    content:
      "Smaller rechargeable lithium batteries, which are widely used in mobile phones, cameras, and other electronic devices, are one of lithium metal's primary industrial applications.",
    img: Prod2,
    svg: <Elect className="min" />,
  },
  {
    name: "METTALLURGY",
    content:
      "Lithium metal's main industrial uses are in metallurgy, where it is utilized as an active element to scavenge from metals including iron, nickel, copper, and zinc as well as their alloys. ", //Lithium scavenges a wide range of non-metallic elements, including oxygen, hydrogen, carbon, and various halogens.",
    img: Prod3,
    svg: <Metallurgy className="max" />,
  },
  {
    name: "PYROTECHNICS",
    content:
      "The use of lithium and related compounds in energetic systems includes its use as pyrotechnic colorants and oxidizers in red explosions and flares. ",
    img: Prod4,
    svg: <Rockets />,
  },
  {
    name: "BATTERIES",
    content:
      "Smaller rechargeable lithium batteries, which are widely used in mobile phones, cameras, and other electronic devices, are one of lithium metal's primary industrial applications.",
    img: Prod5,
    svg: <Battery />,
  },
  {
    name: "AIR PURIFICATION",
    content:
      "The salts most commonly utilized in restricted environments, such as onboard spacecraft and submarines, for carbon dioxide removal and air purification are lithium hydroxide and lithium peroxide.",
    img: Prod6,
    svg: <AirPurifier />,
  },
];
