import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Footer = () => {
    return (
        <footer>
            <div className='highlight'>
                Need help finding us ?<span>+234-8023-456-7890</span>
            </div>
            <div className='block'>
                <div>
                    <div className='logo'>
                        <big>p</big>
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
                </div>
                <div className='addresses'>
                    {/* <h2>Find Us</h2>  */}
                    <h2>Our Offices</h2>
                    <div>
                        22, Aguiyilronsi Street (Merit House) Maitama, fCT
                        Abuja.
                    </div>
                    <div>No 4, Itaji Street krashi Olasegun Lagos State.</div>
                </div>
                <div className='shortLinks'>
                    <h2>Useful links</h2>
                    <span>FAQs</span>
                    <br />
                    <span>Privacy Policy</span>
                    <br />
                    {/* <hr /> */}
                    <span>Terms & Conditions </span>
                    <br />
                    <span>Our Projects </span>
                    {/* Default Content: This section holds informaton about our company (poicies) Projects. We have 2 completed... Most of our ongoing proj..... We are obliged  */}
                </div>
            </div>
            <hr />
            {/* <div className='block'> */}

            <sub>
                Platinum Ville Mines Limited &copy; 2023. All Rights Reserved.
            </sub>
            {/* </div> */}
        </footer>
    );
};

export default Footer;
