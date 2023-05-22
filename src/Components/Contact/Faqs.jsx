import React from 'react';
import { MdClose } from 'react-icons/md';

const Faqs = ({ showFaqs, setShowFaqs }) => {
    return (
        <div className={`Faqs ${showFaqs ? 'show' : 'noshow'}`}>
            <main>
                <h1>FAQs</h1>
                <aside>
                    <button onClick={setShowFaqs(false)}>
                        {/* <button onClick={()={setShowFaqs((s)=>s=!s)}}> */}
                        <MdClose />
                    </button>
                </aside>
                <div className='container'>There's no content yet....</div>
            </main>
        </div>
    );
};

export default Faqs;
