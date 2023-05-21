import React from 'react';
import Socials from './Socials';
import Links from './Links';

const Footer = () => {
    return (
        <footer>
            <div className='block'>
                <div>
                    {/* <div className='logoNsocials'> */}
                    <div className='logo'>
                        <big>p</big>
                        <p>
                            platinum ville <span> mines limited</span>
                        </p>
                    </div>
                    <Socials />
                </div>
                <div className='addresses'>
                    <h2>Our Offices</h2>
                    <div>
                        <span>
                            22, Aguiyilronsi Street (Merit House) Maitama, fCT
                            Abuja.
                        </span>
                        <span>
                            No 4, Itaji Street krashi Olasegun Lagos State.
                        </span>
                    </div>
                    <div>
                        <p>Mobile Nos:</p>
                        <span>+234 801 253 6589, +234 801 253 6589</span>
                    </div>
                </div>
                <Links />
            </div>
            {/* <hr /> */}
            <div className='copyX'>
                Platinum Ville Mines Limited &copy; 2023. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
