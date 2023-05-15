import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Form = () => {
    return (
        <main>
            <div className='Form'>
                <p>First,</p>
                <div className='formGroup'>
                    {/* <label htmlFor='Email'>Email :</label> */}
                    <input
                        type='email'
                        name='Email'
                        required
                        id='Email '
                        placeholder='Enter Your Email Address'
                    />
                    <button type='submit'>
                        <BsArrowRightShort />
                    </button>
                </div>
                {/* <div className='formGroup'>
                    <label htmlFor='Message'>Message :</label>
                    <input
                        type='text'
                        required
                        name='Message'
                        id='Message '
                        placeholder='Enter your Message'
                    />
                </div> */}
                {/* <div className='formGroup'>
                    <button type='submit'>
                        <BsArrowRightShort />
                    </button>
                </div> */}
            </div>
            <div className='hero'>
                <p>stay in touch</p>
                <h2>Leave us a message</h2>
            </div>
        </main>
    );
};

export default Form;
