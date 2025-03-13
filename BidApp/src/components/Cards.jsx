import React from 'react';
import SingleCard from './SingleCard';
import Stats from './Stats';
//this is latest auction buzz section
const Cards = () => {
    return (
        <div>
           <h2 className='font-bold text-center text-black text-5xl pt-10 pb-5'> Latest Auction Buzz</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </div>
        <div className='py-10'>
            <Stats/>
        </div>
        </div>
    );
};

export default Cards;