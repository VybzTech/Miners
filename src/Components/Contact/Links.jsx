import React, { useState } from 'react';
// import Faqs from './Faqs';

const Links = () => {
    const [showFaqs, setShowFaqs] = useState(false);
    return (
        <div className='shortLinks'>
            <h2>Useful links</h2>
            <div onClick={setShowFaqs(true)}>
                <span>FAQs</span>
            </div>
            <div>
                <span>Privacy Policy</span>
            </div>
            <div>
                <span>Terms & Conditions </span>
            </div>
            <div>
                <span>Our Projects </span>
            </div>
            {/* <Faqs showFaqs={showFaqs} setShowFaqs={setShowFaqs} /> */}
            {/* Default Content: This section holds informaton about our company (poicies) Projects. We have 2 completed... Most of our ongoing proj..... We are obliged  */}
        </div>
    );
};

export default Links;
