import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";

const Socials = () => {
  const companyEmail = "info@platnumvillemines.com";
  const tempMsg = "MESSAGE TEMPLATE !";
  const tempSubject =
    "Please%20we%20would%20like%20for%20Platinum%20Ville%20Mines%20to%20....";
  const facebookLink = "105554315863152";
  const whatsappLink = "2349013938252?text=Hey,+Platinum+Ville+Mines+...+";
  return (
    <div className="socials">
      <span>
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
          href={`https://m.facebook.com/${facebookLink}/`}
          target="_blank"
          rel="noreferrer"
          title="facebook"
        >
          <TiSocialFacebook />
        </a>
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
    </div>
  );
};

export default Socials;
