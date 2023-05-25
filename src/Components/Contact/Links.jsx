import React, { useState } from "react";
import Faqs from "./Faqs";
import Privacy from "./Privacy";
import Terms from "./Terms";

const Links = () => {
  const [showFaqs, setShowFaqs] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  return (
    <div className="shortLinks">
      <h2>Useful links</h2>
      <div onClick={() => setShowFaqs(!showFaqs)}>
        <span>FAQs</span>
      </div>
      <div onClick={() => setShowPrivacy(!showPrivacy)}>
        <span>Privacy Policy</span>
      </div>
      <div onClick={() => setShowTerms(!showTerms)}>
        <span>Terms & Conditions </span>
      </div>
      {/* <div>
        <span>Our Projects </span>
      </div> */}
      <Faqs showFaqs={showFaqs} setShowFaqs={setShowFaqs} />
      <Privacy showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />
      <Terms showTerms={showTerms} setShowTerms={setShowTerms} />
      {/* Default Content: This section holds informaton about our company (poicies) Projects. We have 2 completed... Most of our ongoing proj..... We are obliged  */}
    </div>
  );
};

export default Links;
