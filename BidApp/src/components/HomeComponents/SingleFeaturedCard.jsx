

import { FaGavel } from "react-icons/fa";
const SingleFeaturedCard = () => {
    return (
        <div>
             <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg p-5">
                  {/* Image */}
                  <img
                    src="https://i.ibb.co.com/K5qGctv/fitbit.webp" // Replace with actual image URL
                    alt="Auction"
                    className="w-full h-52 object-cover rounded-2xl"
                  />
            
                  {/* Title */}
                  <h2 className="text-2xl font-bold mt-4">Smartwatch</h2>
            
                  {/* Price */}
                  <p className="text-gray-700 mt-2">
                  $200
                  </p>
            
                  {/* Description */}
                  <p className="text-gray-700 mt-2">
                  Stay connected in style!
                  </p>
            
                  {/* Bid Button */}
                  <button className="flex items-center justify-center gap-2 mt-4 bg-teal-300 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-teal-400 transition w-full">
                    <FaGavel /> Bid Now
                  </button>
                </div>
        </div>
    );
};

export default SingleFeaturedCard;