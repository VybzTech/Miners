/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useState } from "react";
// import { BsCircleFill } from 'react-icons/bs';

const Roller = ({ infos }) => {
  const { name, content } = infos;
  // console.log('content to Loop', content);
  const [active, set] = useState(0);
  useEffect(() => {
    if (active === content.length) {
      set(0);
      return;
    }
    // console.log(content.length);
    const RollerInterval = setInterval(() => {
      set((a) => a + 1);
    }, 3000);
    return () => {
      clearInterval(RollerInterval);
    };
    // console.log(active);
    // }, [name, active]);
  }, [active, content?.length]);

  // console.log(document.querySelector('.Roller')?.clientHeight);
  return (
    <main className="Roller">
      {content?.map((info, i) => {
        return (
          <div
            onClick={() => set(i)}
            className={`${active === i ? "active" : "inactive"} content`}
            key={i}
          >
            {/* <span className='svg'> */}
            {/* <BsCircleFill /> */}
            {/* </span> */}
            <p>
              <span>{info}</span>
            </p>
          </div>
        );

        // if (i === 0) return <div key={i}>{info}</div>;
        // return;
      })}
      <div
        // 348 369
        className="line"
        style={{
          maxHeight: `${
            document.querySelector(".Roller")?.clientHeight -
            (name === "brine" ? 78 : 55) //INCREASE TO MAKE SHORTER
          }px`,
        }}
      />
    </main>
  );
};

export default Roller;
