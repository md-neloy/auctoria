

import { FaGavel } from "react-icons/fa";
//this is latest auction buzz section SingleCard
const SingleCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg p-5 border border-green-600">
      {/* Image */}
      <img
        src="https://i.ibb.co.com/GQQ93ZzY/background.png" // Replace with actual image URL
        alt="Auction"
        className="w-full h-52 object-cover rounded-2xl"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold mt-4">Epic Art Auction This Weekend</h2>

      {/* Date */}
      <p className="text-gray-500 text-sm mt-1">March 10, 2025</p>

      {/* Description */}
      <p className="text-gray-700 mt-2">
        Don’t miss your chance to snag a masterpiece! Bidding starts at just
        $100. Get ready to flex your wallet!
      </p>

      {/* Bid Button */}
      <button className="flex items-center justify-center gap-2 mt-4 bg-teal-300 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-teal-400 transition w-full">
        <FaGavel /> Bid!
      </button>
    </div>
  );
};

export default SingleCard;
