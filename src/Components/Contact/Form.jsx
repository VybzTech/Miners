import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiLogOutCircle, BiMailSend } from 'react-icons/bi';

const Form = () => {
    // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    // const rgex = ' /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i';
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState('');
    const ChangeEmail = (e) => {
        email !== e.target.value && setEmail(e.target.value);
        // console.log(email);
    };

    const validateEmail = (e) => {
        // console.log('Starting');
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        e.preventDefault();

        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
            setVerified(true);
            // console.log('It worked ');
        }
        console.log('Finished Submission');
    };
    const sendMail = () => {
        console.log('email', email);
        console.log('message', message);
    };
    return (
        <main>
            <div className='error'></div>
            <div className='Form'>
                <p>
                    {!verified ? 'First ,' : 'Now, Let us know what you think'}
                    {verified && (
                        <BiLogOutCircle onClick={() => setVerified(false)} />
                    )}
                </p>
                {/* <form> */}
                <div className={`formGroup ${verified && 'disappear'}`}>
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
                    <button type='submit' onClick={validateEmail}>
                        <BsArrowRightShort />
                    </button>
                </div>
                {/* </form> */}
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
                <div
                    className={`formGroup message ${!verified && 'disappear'}`}>
                    {/* <div className={`${!verified ? 'disappear' : 'formGroup'}`}> */}
                    {/* <div className='formGroup'> */}
                    <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='10'
                        placeholder='Type your message'
                    />
                    <button type='submit' onClick={sendMail}>
                        Message <BiMailSend />
                    </button>
                </div>
            </div>
            <div className='hero'>
                <p>stay in touch</p>
                <h2>Leave us a message</h2>
            </div>
        </main>
    );
};

export default Form;
