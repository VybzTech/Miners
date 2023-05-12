import React, { useEffect, useState } from 'react';
import LithiumBg from './LithiumBg';
import Pic from '../../Images/Tractors.jpg';
import { LITHIUM__MINING } from '../Services/Data';
import Roller from './Roller';
import LithiumBubble from './LithiumBubble';

const Lithium = () => {
    const [tabbed, set] = useState(true);
    useEffect(() => {}, []);
    const LithiumInfo = tabbed ? LITHIUM__MINING[0] : LITHIUM__MINING[1];
    return (
        <section id='Lithium'>
            <LithiumBg img={Pic} color={'#2e0f10cc'} color2={'#2e0f10af'} />
            <div className='container'>
                <Roller infos={LithiumInfo} />
                <main>
                    <h2>Lithium Mining</h2>
                    <LithiumBubble
                        tabbed={tabbed}
                        set={set}
                        LithiumInfo={LithiumInfo}
                    />
                </main>
            </div>
        </section>
    );
};

export default Lithium;
