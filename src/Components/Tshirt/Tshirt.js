import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {
    const {_id, price, index, picture, name, gender} = tshirt;
    return (
        <div className='single-card-container'>
            <img src={picture} alt="" />
            <p>Product Name: {name}</p>
            <h3>Price: {price}</h3>
            <button className='btn'>Purchase</button>
        </div>
    );
};

export default Tshirt;