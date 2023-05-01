import React, { useState } from "react";

const Lithium = () => {
  const [tabbed, set] = useState(true);
  return (
    <section id="#Lithium">
      <h2>Lithium Mining</h2>
      <main></main>
      <aside>
        <div
          className={`bubble ${tabbed && "Tabbed"}`}
          onClick={() => set((t) => (t = !t))}
        >
          <h4>brine</h4>
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
          <p>
            Lithium extracted by 'hard rock'comes from minerals hosted in
            Pegmatites.
          </p>
          <span>4 stars</span>
        </div>
      </aside>
    </section>
  );
};

export default Lithium;
