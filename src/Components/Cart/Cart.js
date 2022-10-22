import React from 'react';

const Cart = ({cart, handlermv}) => {
    let message;
    if(cart.length===0){
        message = <p>Please buy at least 1 item!</p>
    }
    else{
        message = <p>Thanks for buying!</p>
    }
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
            {
                message
            }
            {
                (cart.length === 3? <p>You buy for three person!</p>: <p>Continue buying</p>)
            }
            <p>And operator</p>
            {
                (cart.length === 2 && <h3>Double Items added!</h3>)
            }
        </div>
    );
};

export default Cart;