import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Form = () => {
    // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const rgex = ' /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i';
    const [email, setEmail] = useState('');
    const ChangeEmail = (e) => {
        email !== e.target.value && setEmail(e.target.value);
        console.log(email);
    };
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
                        id='Email'
                        value={email}
                        onChange={ChangeEmail}
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
