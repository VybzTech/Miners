import React, { useState } from "react";
// import Faqs from "./Faqs";
// import Privacy from "./Privacy";
// import Terms from "./Terms";

const Links = ({ props }) => {
  const {
    showFaqs,
    showPrivacy,
    showTerms,
    setShowFaqs,
    setShowPrivacy,
    setShowTerms,
  } = props;
  console
    .log
    // props.showFaqs
    // props.showPrivacy,
    // props.showTerms,
    // props.setShowFaqs,
    // props.setShowPrivacy,
    // props.setShowTerms
    ();
  // const [showFaqs, setShowFaqs] = useState(false);
  // const [showPrivacy, setShowPrivacy] = useState(false);
  // const [showTerms, setShowTerms] = useState(true);
  return (
    <div className="shortLinks">
      <h2>Useful links</h2>
      <div
        onClick={() => {
          // console.log(showFaqs);
          setShowFaqs((showFaqs) => (showFaqs = !showFaqs));
        }}
      >
        <span>FAQs</span>
      </div>
      <div
        onClick={() => {
          // console.log(showPrivacy);
          setShowPrivacy((showPrivacy) => (showPrivacy = !showPrivacy));
        }}
      >
        <span>Privacy Policy</span>
      </div>
      <div
        onClick={() => {
          // console.log(showTerms);
          setShowTerms((showTerms) => (showTerms = !showTerms));
        }}
      >
        <span>Terms & Conditions </span>
      </div>
    </div>
  );
};

export default Links;
