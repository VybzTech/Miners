import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdOutlineWhatsapp } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer>
            <div className='block'>
                <div>
                    <div className='logo'>
                        <big>p</big>
                        <p>
                            platinum ville <span> mines limited</span>
                        </p>
                    </div>
                    <div className='socials'>
                        <span>
                            {/* <TfiEmail /> */}
                            <MdEmail />
                        </span>
                        <span>
                            <TiSocialFacebook />
                            {/* <AiFillFacebook /> */}
                            {/* <FaFacebookF /> */}
                        </span>
                        <span>
                            <MdOutlineWhatsapp />
                        </span>
                        {/* <MdEmail /> */}
                        {/* <FaWhatsappSquare /> */}
                    </div>
                </div>
                <div className='addresses'>
                    {/* <h2>Find Us</h2>  */}
                    <h2>Our Offices</h2>
                    <div className='underline'>
                        <div />
                        <div />
                    </div>
                    <div>
                        22, Aguiyilronsi Street (Merit House) Maitama, fCT
                        Abuja.
                    </div>
                    <div>No 4, Itaji Street krashi Olasegun Lagos State.</div>
                </div>
                <div className='shortLinks'>
                    <h2>Useful links</h2>
                    <div className='underline'>
                        <div />
                        <div />
                    </div>
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

            <div className='copyX'>
                Platinum Ville Mines Limited &copy; 2023. All Rights Reserved.
            </div>
            {/* </div> */}
        </footer>
    );
};

export default Footer;
