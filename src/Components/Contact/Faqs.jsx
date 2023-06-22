import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Faqs = ({ showFaqs, setShowFaqs }) => {
  if (showFaqs) {
    return (
      // showFaqs ? (
      //   // return
      //   ReactDOM.createPortal(
      <div
        className={`Faqs ${showFaqs ? "show" : "noshow"}`}
        // onClick={() => setShowFaqs(!showFaqs)}
      >
        <main
        // onClick={() => {
        //   console.log("I am Main");
        // }}
        >
          <header>
            <h1>FAQs</h1>
            <h2>(Frequently Asked Questions)</h2>
            <aside>
              <button
                onClick={() => {
                  setShowFaqs((s) => (s = !s));
                }}
              >
                {/* <button onClick={()={setShowFaqs((s)=>s=!s)}}> */}
                <MdClose />
              </button>
            </aside>
          </header>
          <hr />
          <div className="wrapper">
            <div className="container">
              <h2>Introduction</h2>
              <p>{`
  `}</p>
            </div>
          </div>
          <span>Last updated on June 21, 2023.</span>
        </main>
      </div>
    );
  }
  return <></>;
};

export default Faqs;
