import React from "react";

const Links = ({ props }) => {
  const { setShowFaqs, setShowPrivacy, setShowTerms } = props;

  return (
    <div className="shortLinks">
      <h2>Useful links</h2>
      <div
        onClick={() => {
          setShowFaqs((showFaqs) => (showFaqs = !showFaqs));
        }}
      >
        <span>FAQs</span>
      </div>
      <div
        onClick={() => {
          setShowPrivacy((showPrivacy) => (showPrivacy = !showPrivacy));
        }}
      >
        <span>Privacy Policy</span>
      </div>
      <div
        onClick={() => {
          setShowTerms((showTerms) => (showTerms = !showTerms));
        }}
      >
        <span>Terms & Conditions </span>
      </div>
    </div>
  );
};

export default Links;
