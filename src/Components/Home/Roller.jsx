/* eslint-disable array-callback-return */
import React from 'react';
import { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';

const Roller = ({ infos }) => {
    // console.log('Infos to Loop', infos);
    const [active, set] = useState(0);
    console.log(document.querySelector('.Roller')?.clientHeight);
    return (
        <main className='Roller'>
            {infos?.map((info, i) => {
                return (
                    <div
                        className={`${
                            active === i ? 'active' : 'inactive'
                        } content`}
                        key={i}>
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
                className='line'
                style={{
                    maxHeight: `${
                        document.querySelector('.Roller')?.clientHeight - 69 //INCREASE TO MAKE SHORTER
                    }px`,
                }}
            />
        </main>
    );
};

export default Roller;
