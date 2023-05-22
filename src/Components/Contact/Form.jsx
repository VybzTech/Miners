import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Form = () => {
  return (
    <div className="Form">
      <input type="email" name="Email" id="Email " placeholder="Your Email" />

      <input
        type="text"
        name="Message"
        id="Message "
        placeholder="Enter your Message"
      />
      <button type="submit">
        <BsArrowRightShort />
      </button>
    </div>
  );
};

export default Form;
