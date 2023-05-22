import React from 'react';
import Footer from './Footer';
import Background from '../Background';
import Pic from '../../Images/Contact_Track.jpg';
import LithiumBg from '../Home/LithiumBg';
import Form from './Form';
import Highlight from './Highlight';

const Contact = () => {
    return (
        <section id='Contact'>
            {/* <Background img={Pic} /> */}
            {/* <div
                className='fakeSpace'
                style={{ backgroundColor: '#fffd', height: 100 }}></div> */}
            <LithiumBg
                img={Pic}
                color={'#eee6'}
                color2={'#fffd'}
                color3={'#fefefedd'}
            />
            <div className='container'>
                <Form />
                <div className='footer'>
                    {/* <Highlight /> */}
                    <Footer />
                </div>
            </div>
        </section>
    );
};

export default Contact;
