import { useEffect, useState } from "react";

import RecentProductCard from "./RecentProductCard";


const LatestAuctions = () => {
    

    const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/recentProducts")
   
      .then((res) => res.json())
      .then((data) => {
        setRecentProducts(data);
      })
      
  }, []);


  
    return (
        <div >
            <h2 className="text-center w-full mt-20 text-3xl text-[#A294F9] font-bold mb-10">Latest Auction Buzz!</h2>
            <div className="my-5  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-14 gap-y-10">

                {
                   recentProducts.map(recentProduct => <RecentProductCard key={recentProduct._id} recentProduct={recentProduct}></RecentProductCard>) 
                }
            </div>
  
        </div>
    );
};

export default LatestAuctions;