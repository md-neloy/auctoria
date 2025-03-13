const SingleMeetCard = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto  p-5">
        {/* Image */}
        <img
          src="https://i.ibb.co.com/ch3LS3yD/avatar.png" // Replace with actual image URL
          alt="Auction"
          className="w-full h-60 object-contain rounded-2xl"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4 text-center">Rumman</h2>

        {/* Price */}
        <p className="text-gray-700 mt-2 text-center">Chief Auctioneer</p>
      </div>
    </div>
  );
};

export default SingleMeetCard;
