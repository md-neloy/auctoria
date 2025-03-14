import { FaGavel } from "react-icons/fa";

const BiddingMadness = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white p-6">
      <div className="bg-gray-600 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://i.ibb.co/0BTZvC2/blog-cover.jpg"
            alt="Auction Event"
            className="rounded-xl w-32 h-32 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold">Join the Bidding Madness</h1>
        <p className="text-gray-300 mt-2">Sign up now and snag amazing deals!</p>
        
        {/* Center the button */}
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 bg-green-400 text-gray-900 font-semibold rounded-full flex items-center gap-2 hover:bg-green-500 transition">
            <FaGavel /> Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiddingMadness;
