import React from 'react';
import Footer from './Footer';
import Background from '../Background';
import Pic from '../../Images/Contact_Track.jpg';
import LithiumBg from '../Home/LithiumBg';
import { MdArrowForward, MdArrowForwardIos } from 'react-icons/md';

const Contact = () => {
    return (
        <section id='Contact'>
            {/* <Background img={Pic} /> */}
            {/* <div
                className='fakeSpace'
                style={{ backgroundColor: '#fffd', height: 100 }}></div> */}
            <LithiumBg
                img={Pic}
                color={'#eee7'}
                color2={'#fffd'}
                color3={'#fdfdfdee'}
            />
            <div className='container'>
                <div className='hero'>
                    <p>stay in touch</p>
                    <h2>Leave us a message</h2>
                </div>
                <div className='footer'>
                    <div className='highlight'>
                        <p>Still Need help finding us ? </p>
                        {/* <div> */}
                        <b>Call Us Now</b>
                        <MdArrowForward />
                        <span>+234-8023-456-7890</span>
                        {/* </div> */}
                    </div>
                    <Footer />
                </div>
            </div>
        </section>
    );
};

export default Contact;
