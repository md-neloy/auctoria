import { useEffect, useState } from "react";
import AllAuctionCard from "./HomePage/AllAuctionCard";


const AllAuctions = () => {
    const [allAuctions,setAllAuctions] = useState([]);
   
    useEffect(() => {
        fetch("http://localhost:5000/addProducts")
          .then((res) => res.json())
          .then((data) => {
            setAllAuctions(data);
            
            
          })
          .catch((error) => {
            console.error('Error fetching blogs:', error);
            
          });
      }, []);


    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-5">All Auctions</h2>
            <div >
                {
                    allAuctions.map(auction => <AllAuctionCard key={auction._id} auction={auction}></AllAuctionCard>)
                }
            </div>
        </div>
    );
};

export default AllAuctions;