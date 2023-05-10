import React from 'react';
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
            <h3>{name}</h3>
            <p>{content}</p>
        </div>
        // </SwiperSlide>
    );
};

export default ProductCard;
