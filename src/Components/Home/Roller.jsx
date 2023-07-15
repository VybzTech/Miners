/* eslint-disable array-callback-return */
import React, { useEffect } from "react";

const Roller = ({ infos, active, set }) => {
  const { name, content } = infos;
  useEffect(() => {
    if (active === content.length) {
      set(0);
      return;
    }
    const RollerInterval = setInterval(() => {
      set((a) => a + 1);
    }, 3000);
    return () => {
      clearInterval(RollerInterval);
    };
  }, [active, content?.length]);

  return (
    <main className="Roller">
      {content?.map((info, i) => {
        return (
          <div
            onClick={() => set(i)}
            className={`${active === i ? "active" : "inactive"} content`}
            key={i}
          >
            <p>
              <span>{info}</span>
            </p>
          </div>
        );
      })}
      <div
        className="line"
        style={{
          maxHeight: `${
            document.querySelector(".Roller")?.clientHeight -
            (name === "brine" ? 90 : 70) //INCREASE TO MAKE SHORTER
          }px`,
        }}
      />
    </main>
  );
};

export default Roller;
