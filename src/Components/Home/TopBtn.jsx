import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const TopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [showBtn]);

  return (
    <div
      className={`TopBtn ${showBtn === true ? "" : "noShow"}`}
      onClick={() => window.scroll(0, 0)}
    >
      <MdArrowForwardIos />
    </div>
  );
};

export default TopBtn;
