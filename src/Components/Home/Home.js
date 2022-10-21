import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    console.log(typeof(tshirts));
    console.log(tshirts);
    return (
        <div className='home-container'>
            
            <div className='card-container'>
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;