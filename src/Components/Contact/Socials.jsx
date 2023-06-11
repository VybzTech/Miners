import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
// import { AiFillFacebook } from 'react-icons/ai';
// import { FaFacebookF } from 'react-icons/fa';
// import { TfiEmail } from 'react-icons/tfi';

const Socials = () => {
  const companyEmail = "info@platnumvillemines.com";
  const tempMsg = "TEMPLATE Message to be Sent !";
  const tempSubject =
    "Please%20we%20would%20like%20for%20Platinum%20Ville%20Mines%20to%20....";
  const facebookLink = "";
  const whatsappLink = "08032801376";
  return (
    <div className="socials">
      <span>
        {/* <TfiEmail /> */}
        <a
          href={`mailto:${companyEmail}?subject=${tempSubject}&body=${tempMsg}`}
          rel="noreferrer"
          title="Email"
        >
          <MdEmail />
        </a>
      </span>
      <span>
        <a
          href={`https://m.facebook.com/${facebookLink}`}
          target="_blank"
          rel="noreferrer"
          title="facebook"
        >
          <TiSocialFacebook />
        </a>
        {/* <AiFillFacebook /> */}
        {/* <FaFacebookF /> */}
      </span>
      <span>
        <a
          href={`https://wa.me/${whatsappLink}`}
          target="_blank"
          rel="noreferrer"
          title="whatsapp"
        >
          <MdOutlineWhatsapp />
        </a>
      </span>
      {/* <MdEmail /> */}
      {/* <FaWhatsappSquare /> */}
    </div>
  );
};

export default Socials;
