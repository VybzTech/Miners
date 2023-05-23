import React, { useEffect } from "react";
import { LITHIUM__MINING } from "../Services/Data";
import Star from "./Star";

const LithiumBubble = ({ tabbed, set, setIndex }) => {
  const StarPill = (num) => {
    const stars = [];
    let i = 0;
    while (i < num) {
      stars.push(<Star key={i} />);
      i++;
    }
    return stars;
  };

  return (
    <aside>
      <div
        className={`bubble ${tabbed && "Tabbed"}`}
        onClick={() => {
          if (!tabbed === true) {
            setIndex(0);
            set((t) => (t = !t));
          }
        }}
      >
        <h4>brine</h4>
        <hr />
        <p>
          Lithium brine recovery is a straight forward but time-consuming
          process.
        </p>
        <nav>
          <div>{StarPill(LITHIUM__MINING[0].star).map((s) => s)}</div>
          <span>{LITHIUM__MINING[0].star} stars</span>
        </nav>
      </div>
      <div
        className={`bubble ${!tabbed && "Tabbed"}`}
        onClick={() => {
          if (tabbed === true) {
            setIndex(0);
            set((t) => (t = !t));
          }
        }}
      >
        <h4>hard rock</h4>
        <hr />
        <p>
          Lithium extracted by 'hard rock' comes from minerals hosted in
          Pegmatites.
        </p>
        <nav>
          <div>{StarPill(LITHIUM__MINING[1].star)}</div>
          <span>{LITHIUM__MINING[1].star} stars</span>
        </nav>
      </div>
    </aside>
  );
};

export default LithiumBubble;
