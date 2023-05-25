import React from "react";
import Socials from "./Socials";
import Links from "./Links";

const Footer = () => {
  return (
    <footer>
      <div className="block">
        <div>
          {/* <div className='logoNsocials'> */}
          <div className="logo">
            <big>p</big>
            <p>
              platinum ville <span> mines limited</span>
            </p>
          </div>
          <Socials />
        </div>
        <div className="addresses">
          <h2>Our Offices</h2>
          <div>
            <p>Lagos Office:</p>
            <span>
              No 4, Itaji Street Haruna Ogba, Olasegun Lagos State, Nigeria.
            </span>
            <span>Phone No: +234 805-404-8366</span>
          </div>
          <div>
            <p>Abuja Office:</p>
            <span>
              No 22, Aguiyi Ironsi Street (Merit House) Maitama, FCT Abuja,
              Nigeria.
            </span>
            <span>Mobile No: +234 803-280-1376</span>
          </div>
          {/* <div>
            <p>Mobile Nos:</p>
            <span>+234 801 253 6589, +234 801 253 6589</span>
          </div> */}
        </div>
        <Links />
      </div>
      {/* <hr /> */}
      <div className="copyX">
        Platinum Ville Mines Limited &copy; 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
