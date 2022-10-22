import React from 'react';

const Cart = ({cart, handlermv}) => {
    return (
        <div>
            <h3>Order Summery</h3>
            <small>Order Quantity : {cart.length}</small>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handlermv(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;