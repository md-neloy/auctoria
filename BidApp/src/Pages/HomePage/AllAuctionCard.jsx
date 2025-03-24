import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { motion } from "framer-motion";
import { FaGavel } from "react-icons/fa";
const AllAuctionCard = ({ auction }) => {
  const navigate = useNavigate();
  const {
    _id,
    bids,
    productName,
    description,
    startingBid,
    productImage,
    auctionStartDate,
  } = auction;
  console.log(bids);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg"
    >
      <div className="w-full h-[380px] overflow-hidden bg-white rounded-lg shadow-lg ">
        <img
          className="object-fill object-center w-full h-44"
          src={productImage}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-1 bg-teal-400">
          <p className="flex items-center gap-2 text-gray-600">
            <FaGavel className="rotated-180" />{" "}
            <span>
              {auction.bids?.length > 0 ? auction.bids?.length : "No Bid"}
            </span>
          </p>
        </div>

        <div className="px-3 py-2 h-[100px] ">
          <h1 className="text-base font-semibold text-gray-800 dark:text-gray-800 ">
            {productName}
          </h1>

          <p className="w-full text-gray-700 dark:text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex justify-between p-3 ">
          <button className="btn text-white">
            <IoMdHeartEmpty size={28} className="text-gray-600" />
          </button>
          <button
            className="btn "
            onClick={() => navigate(`/bid/${auction._id}`)}
          >
            <IoEye size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AllAuctionCard;
