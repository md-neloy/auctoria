



const RecentProductCard = ({recentProduct}) => {

  // _id": "67db28bc7f21b13115625fea",
    // "productName": "Apple iPhone 13 Pro Max",
    // "category": "Electronics",
    // "description": "Brand new iPhone 13 Pro Max, 256GB, Sierra Blue. Unlocked and factory sealed.",
    // "startingBid": "900",
    // "auctionStartDate": "2025-03-18T02:25",
    // "productImage": "https://i.ibb.co.com/LWMMxSk/iphone.jpg",
    // "location": "United States",
    // "status": "Upcoming",
    // "auctionEndTime": "2025-03-24T20:25:00.000Z"
  
    const {productName,description,productImage,startingBid,auctionStartDate,_id} = recentProduct;
    return (
        <div className="card dark:bg-purple-700 card-compact bg-base-100 w-[320px] mx-auto shadow-xl">
  <figure>
    <img className="w-full h-[250px]"
      src={productImage}
      alt="product" />
  </figure>
  <div className="card-body gap-y-2 ">
    <h2 className="card-title font-bold text-2xl text-center">{productName}</h2>
    <p>{description}</p>
    <p><span className="font-bold">Starting Bid:</span> {startingBid}</p>
    <p><span className="font-bold">Auction Start Date:</span> {auctionStartDate}</p>
    <div className="card-actions justify-end">
      <button className="btn glass bg-[#6C48C5] hover:text-purple-700 text-blue-400">Details</button>
      <button
            
            className="btn hover:text-purple-700 glass bg-[#A294F9] text-blue-400 rounded"
          >
            Add to Wishlist
          </button>

    </div>
  </div>
</div>
    );
};

export default RecentProductCard;

