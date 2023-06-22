import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Privacy = ({ showPrivacy, setShowPrivacy }) => {
  if (showPrivacy) {
    return (
      // showPrivacy ? (
      //   // return
      // ReactDOM.createPortal(
      <div
        className={`Privacy ${showPrivacy ? "show" : "noshow"}`}
        // onClick={() => setShowPrivacy(!showPrivacy)}
      >
        <main
        // onClick={() => {
        //   console.log("I am Main");
        // }}
        >
          <header>
            <h1>Privacy Policy and Cookie Policy </h1>
            <aside>
              {/* // onClick={() => setShowPrivacy(!showPrivacy)}> */}
              <button
                onClick={() => {
                  setShowPrivacy((s) => (s = !s));
                }}
              >
                {/* <button onClick={()={setShowPrivacy((s)=>s=!s)}}> */}
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

export default Privacy;
