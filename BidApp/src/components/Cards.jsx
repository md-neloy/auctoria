import React from 'react';
import SingleCard from './SingleCard';

const Cards = () => {
    return (
        <div>
           <h2 className='font-bold text-center text-5xl pt-10 pb-5'> Latest Auction Buzz</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </div>
        </div>
    );
};

export default Cards;