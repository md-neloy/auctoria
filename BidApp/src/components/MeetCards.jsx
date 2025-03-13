import React from 'react';
import SingleMeetCard from './SingleMeetCard';

const MeetCards = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-black text-5xl pt-10 pb-5'> Meet Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            
            <SingleMeetCard/>
            <SingleMeetCard/>
            <SingleMeetCard/>
            <SingleMeetCard/>
        </div>
        </div>
    );
};

export default MeetCards;