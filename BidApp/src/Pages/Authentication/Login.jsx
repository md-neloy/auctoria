import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import auctionImage from "../../assets/auction-image.svg"; // Ensure you have an image in the assets folder
import GoToHomeButton from "../../components/ShareComponents/GoToHomeButton";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-full min-h-screen bg-white px-10 overflow-hidden">
        {/* Left Side Image */}
        <div className="w-1/2">
          <img
            src={auctionImage}
            alt="Auction Platform"
            className="w-full h-full object-center"
          />
        </div>

        {/* Right Side Login Form */}
        <motion.div
          initial={{ opacity: 0, y: -600 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 p-12 space-y-6 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Welcome To Auction
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-lg"
            >
              Login
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <hr className="w-1/3 border-gray-300" />
            <span className="text-gray-500">or</span>
            <hr className="w-1/3 border-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 text-lg">
            <FaGoogle className="text-red-500" /> Sign in with Google
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          <div className="flex flex-col items-center justify-center">
            <GoToHomeButton />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
