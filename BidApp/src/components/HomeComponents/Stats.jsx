import { FaGavel, FaUsers, FaStore } from "react-icons/fa";
//this is latest auction buzz section stats
const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-10 text-center">
      {/* Bids Placed */}
      <div className="flex flex-col items-center">
        <FaGavel className="text-5xl text-teal-300" />
        <h2 className="text-4xl font-bold text-teal-300">1,000,000</h2>
        <p className="text-lg font-semibold text-gray-800">Bids Placed</p>
      </div>

      {/* Happy Bidders */}
      <div className="flex flex-col items-center">
        <FaUsers className="text-5xl text-teal-300" />
        <h2 className="text-4xl font-bold text-teal-300">500</h2>
        <p className="text-lg font-semibold text-gray-800">Happy Bidders</p>
        <p className="text-lg font-semibold text-gray-800">Happy Bidders</p>
      </div>

      {/* Auctions Live */}
      <div className="flex flex-col items-center">
        <FaStore className="text-5xl text-teal-300" />
        <h2 className="text-4xl font-bold text-teal-300">100</h2>
        <p className="text-lg font-semibold text-gray-800">Auctions Live</p>
      </div>
    </div>
  );
};

export default Stats;
