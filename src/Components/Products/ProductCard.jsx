import React from 'react';
import { BsBattery } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductCard = ({ product }) => {
    // console.log(product);
    const { name, content, img } = product;
    // console.log(product);
    return (
        <div className='card'>
            {/* <div >
    </div> */}
            <img src={img} alt={name} />
            <div className='container'>
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
            <span>
                <BsBattery />
            </span>
        </div>
        // </SwiperSlide>
    );
};

export default ProductCard;
