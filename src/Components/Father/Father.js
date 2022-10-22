import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h3>Father</h3>
            <p>Home : {house}</p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;