import SingleFeaturedCard from "./SingleFeaturedCard";


const FeaturedCards = () => {
    return (
        <div>
             <h2 className='font-bold text-center text-black text-5xl pt-10 pb-5'> Featured Auction Items</h2>
             <div className=' lg:w-[1240px] mx-auto last:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            
           <SingleFeaturedCard/>
           <SingleFeaturedCard/>
           <SingleFeaturedCard/>
           <SingleFeaturedCard/>
           <SingleFeaturedCard/>
           <SingleFeaturedCard/>
        </div>
        </div>
    );
};

export default FeaturedCards;