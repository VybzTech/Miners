import React, { useState, useRef, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiLogOutCircle, BiMailSend } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    // useEffect(() => {
    //     // toast.error('test error');
    // }, []);

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [verified, setVerified] = useState(false);
    // const [error, setError] = useState('');
    const ChangeEmail = (e) =>
        email !== e.target.value && setEmail(e.target.value);
    const ChangeMesssage = (e) =>
        email !== e.target.value && setMessage(e.target.value);

    const validateEmail = (e) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        e.preventDefault();
        if (email === '') {
            toast.warn('Email field cannot be empty');
        } else {
            if (!emailRegex.test(email)) {
                // setError('Please enter a valid email address');
                toast.error("Please check the email address' spelling");
                // setError('');
                // toast.error(error);
            } else {
                toast.success('Email Verified');
                setTimeout(toast.dismiss(), 3000);
                sendEmailValidationRequest(email);
            }
        }
        console.log('Finished Validation');
        // console.log('Finished Submission');
    };

    const ServiceID = 'service_akhfykf';
    const TemplateID = 'template_lfbfzzl';
    const publicKey = 'QXFYq9qCqWYZXGhQj';
    const apiKey = 'c9df20ab4dcc4877bbd25e39dfbb44be';
    const apiURL =
        'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;

    const sendEmailValidationRequest = async (email) => {
        const load = toast.loading('Loading...');
        try {
            const response = await fetch(apiURL + '&email=' + email);
            const data = await response.json();
            console.log(data);

            const isValidSMTP =
                data.is_smtp_valid.value &&
                data.deliverability == 'DELIVERABLE';
            if (isValidSMTP) {
                // console.log('Correct Email');
                // const load = toast.loading;
                toast.dismiss(load);
                setVerified(true);
            } else {
                console.log('InCorrect Email');
                // setError("This email address doesn't exist");
                toast.warning("This email address doesn't exist");
            }
        } catch (error) {
            if (error.name === undefined) {
                toast.error('Error: Please try again');
                toast.dismiss(load);
            } else {
                error.name === 'TypeError'
                    ? toast.error('Please connect to the Internet')
                    : toast.error(error.name);
                toast.dismiss(load);
            }
            console.log({ error });
        }
    };

    const sendMail = () => {
        const name = (email) => {
            const regex = /@.*$/;
            const newArr = [...email];
            return newArr.map((str) => str.replace(regex, '')).toString();
        };
        console.log(name);
        console.log('email', email);
        console.log('message', message);
        if (message === undefined || message === '') {
            toast.info("Pls Indulge us, we'd like to know what you think!");
            return;
        }
        const load = toast.loading('Loading...');
        emailjs
            .send(ServiceID, TemplateID, { name, email, message }, publicKey)
            .then(
                (result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    console.log(result.text);
                    toast.dismiss(load);
                    toast.success('Email successfully sent !');
                },
                (error) => {
                    console.log(error.text);
                    toast.dismiss(load);
                    toast.error(error.name);
                    toast.error(error.text);
                }
            );
    };

    return (
        <main>
            <ToastContainer />
            <div className='error'></div>
            <div className='Form'>
                <p>
                    {!verified ? 'First ,' : 'Now, Let us know what you think'}
                    {verified && (
                        <BiLogOutCircle onClick={() => setVerified(false)} />
                    )}
                </p>
                <div className={`formGroup ${verified && 'disappear'}`}>
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
                <div
                    className={`formGroup message ${!verified && 'disappear'}`}>
                    <textarea
                        name='Message'
                        id='Message'
                        cols='30'
                        rows='10'
                        placeholder='Type your message'
                        onChange={ChangeMesssage}
                        required
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
