/* eslint-disable array-callback-return */
import React from "react";

const Roller = ({ infos }) => {
  console.log(infos);

  return (
    <main>
      {infos?.map((info, i) => {
        if (i === 0) return <div key={i}>{info}</div>;
        return;
      })}
    </main>
  );
};

export default Roller;
