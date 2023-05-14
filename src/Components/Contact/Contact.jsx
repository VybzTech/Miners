import React from 'react';
import Footer from './Footer';
import Background from '../Background';
import Pic from '../../Images/Contact_Track.jpg';
import LithiumBg from '../Home/LithiumBg';

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
                <Footer />
            </div>
        </section>
    );
};

export default Contact;
