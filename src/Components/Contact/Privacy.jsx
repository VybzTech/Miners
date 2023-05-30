import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Privacy = ({ showPrivacy, setShowPrivacy }) => {
  showPrivacy ? (
    // return
    ReactDOM.createPortal(
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
            <h1>Privacy Policy</h1>
            <aside>
              <button onClick={() => setShowPrivacy(!showPrivacy)}>
                {/* <button onClick={()={setShowPrivacy((s)=>s=!s)}}> */}
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

export default Privacy;
