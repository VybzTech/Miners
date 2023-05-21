import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdOutlineWhatsapp } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { TiSocialFacebook } from 'react-icons/ti';
const Socials = () => {
    const companyEmail = 'officialdjvybz@gmail.com';
    const tempMsg = 'TEMPLATE EMAIL';
    const tempSubject =
        'Please%20we%20would%20like%20for%Platinum%20Ville%20Mines%20to%20....';
    const facebookLink = '';
    const whatsappLink = '';
    return (
        <div className='socials'>
            <span>
                {/* <TfiEmail /> */}
                <a
                    href={`mailto:${companyEmail}?subject=${tempSubject}&body=${tempMsg}`}>
                    <MdEmail />
                </a>
            </span>
            <span>
                <a
                    href={`https://m.facebook.com/${facebookLink}`}
                    target='_blank'>
                    <TiSocialFacebook />
                </a>
                {/* <AiFillFacebook /> */}
                {/* <FaFacebookF /> */}
            </span>
            <span>
                <a href={`https://wa.me/${whatsappLink}`} target='_blank'>
                    <MdOutlineWhatsapp />
                </a>
            </span>
            {/* <MdEmail /> */}
            {/* <FaWhatsappSquare /> */}
        </div>
    );
};

export default Socials;
