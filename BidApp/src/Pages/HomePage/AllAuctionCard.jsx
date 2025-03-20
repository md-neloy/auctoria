
const AllAuctionCard = ({auction}) => {

    // "_id": "67db20c177658c6c1f307972",
    // "productName": "Vintage Rolex Submariner 5513",
    // "category": "Antiques",
    // "description": "A rare Rolex Submariner 5513 from the 1960s. Well-maintained and in perfect working condition.",
    // "startingBid": "5000",
    // "auctionStartDate": "2025-03-10T01:42",
    // "productImage": "https://i.ibb.co.com/Q3m8V2qB/rolex.jpg",
    // "location": "japan",
    // "status": "Active",
    // "auctionEndTime": "2025-03-16T19:42:00.000Z"
    const {productName, description, startingBid, productImage, auctionStartDate} = auction;
    return (
        <div>
          <div className="card bg-base-100 w-[900px] mx-auto shadow-sm">
  <figure>
    <img
      src={productImage}
      className="w-[880px] h-[500px]"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {productName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <p>Starting Bid: {startingBid}</p>
    <p>Auction Start Date: {auctionStartDate}</p>
    <div className="flex gap-x-5 gap-y-5">
    <button className="btn">Add To WishList</button>
    <button className="btn">Details</button>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default AllAuctionCard;