import React from 'react';

const Served = ({ service }) => {
    return (
        <div>
            <img src={service.img} alt={service.service} />
            <span>{service.service}</span>
        </div>
    );
};

export default Served;
