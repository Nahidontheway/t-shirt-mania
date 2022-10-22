import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const[cart, setCart] = useState([]);
    // console.log(tshirts);
    const handleToCart = tshirt =>{
        // console.log(tshirt);
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            alert('This product is already selected!')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const handlermv = tshirt=>{
        const rmvitem = cart.filter(ts=> ts._id !== tshirt._id);
        setCart(rmvitem);
        console.log(tshirt);
    } 
    return (
        <div className='home-container'>
            
            <div className='card-container'>
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} handleToCart={handleToCart} tshirt={tshirt}></Tshirt>)
                }
            </div>
            <div>
                <Cart cart={cart} handlermv={handlermv}></Cart>
            </div>
        </div>
    );
};

export default Home;