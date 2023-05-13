import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Footer = () => {
    return (
        <footer>
            <div className='logo'>
                platinum ville <span> mines limited</span>
            </div>
            <div className='socials'>
                <TfiEmail />
                {/* <MdEmail /> */}
                <AiFillFacebook />
                {/* <TiSocialFacebook /> */}
                {/* <FaFacebookF /> */}
                <MdOutlineWhatsapp />
                {/* <FaWhatsappSquare /> */}
            </div>
            <div className='addresses'>
                <span>
                    22, Aguiyilronsi Street (Merit House) Maitama, fCT Abuja.
                </span>
                <span>No 4, Itaji Street krashi Olasegun Lagos State.</span>
            </div>
            <div className='shortLinks'>
                <span>Privacy Policy</span>
                <hr />
                <span>Terms & Conditions </span>
            </div>
            <sub>
                Platinum Ville Mines Limited &copy; 2023. All Rights Reserved.
            </sub>
        </footer>
    );
};

export default Footer;
