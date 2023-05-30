import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Terms = ({ showTerms, setShowTerms }) => {
  showTerms ? (
    // return
    ReactDOM.createPortal(
      <div
        className={`Terms ${showTerms ? "show" : "noshow"}`}
        // onClick={() => setShowTerms(!showTerms)}
      >
        <main
        // onClick={() => {
        //   console.log("I am Main");
        // }}
        >
          <header>
            <h1>Terms & Conditions</h1>
            <aside>
              <button onClick={() => setShowTerms(!showTerms)}>
                {/* <button onClick={()={setShowTerms((s)=>s=!s)}}> */}
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

export default Terms;
