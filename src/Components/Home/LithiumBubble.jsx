import React from "react";

const LithiumBubble = ({ tabbed, set, LithiumInfo }) => {
  return (
    <aside>
      <div
        className={`bubble ${tabbed && "Tabbed"}`}
        onClick={() => set((t) => (t = !t))}
      >
        <h4>brine</h4>
        <hr />
        <p>
          Lithium brine recovery is a straight forward but time-consuming
          process.
        </p>
        <span>5 stars</span>
      </div>
      <div
        className={`bubble ${!tabbed && "Tabbed"}`}
        onClick={() => set((t) => (t = !t))}
      >
        <h4>hard rock</h4>
        <hr />
        <p>
          Lithium extracted by 'hard rock'comes from minerals hosted in
          Pegmatites.
        </p>
        <span>4 stars</span>
      </div>
    </aside>
  );
};

export default LithiumBubble;
