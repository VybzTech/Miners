import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Faqs = ({ showFaqs, setShowFaqs }) => {
  showFaqs ? (
    // return
    ReactDOM.createPortal(
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
            <aside>
              <button onClick={() => setShowFaqs(!showFaqs)}>
                {/* <button onClick={()={setShowFaqs((s)=>s=!s)}}> */}
                <MdClose />
              </button>
            </aside>
          </header>
          <hr />
          <div className="container">There's no content yet....</div>
        </main>
      </div>,
      document?.getElementById("portal")
    )
  ) : (
    <></>
  );
};

export default Faqs;
