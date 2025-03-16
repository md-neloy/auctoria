import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
<<<<<<< HEAD
import auctionImage from "../../assets/auction-image.svg"; 
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
=======
import auctionImage from "../../assets/auction-image.svg"; // Ensure you have an image in the assets folder
import GoToHomeButton from "../../components/ShareComponents/GoToHomeButton";
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( name,email,password);


    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.log('error',error)
    })
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-full min-h-screen bg-white px-10 overflow-hidden">
        {/* Left Side Image */}
        <div className="w-1/2">
          <img
            src={auctionImage}
            alt="Auction Platform"
            className="w-full h-full object-center md:object-center"
          />
        </div>

        {/* Right Side Register Form */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: -20 }}
=======
          initial={{ opacity: 0, y: -600 }}
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 p-12 space-y-6 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Create an Auction Account
          </h2>
<<<<<<< HEAD
          <form onSubmit={handleRegister} className="space-y-6">
=======
          <form className="space-y-6">
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
<<<<<<< HEAD
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your full name"
                name="name"
=======
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-300 "
                placeholder="Enter your full name"
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
<<<<<<< HEAD
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                name="email"
=======
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-300 "
                placeholder="Enter your email"
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
<<<<<<< HEAD
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Create a password"
                name="password"
=======
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-300 "
                placeholder="Create a password"
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8
                required
              />
            </div>
            <button
              type="submit"
<<<<<<< HEAD
              className="w-full px-4 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-lg"
=======
              className="w-full px-4 py-3 text-black bg-teal-300 rounded-md hover:bg-teal-400 text-lg font-semibold"
            >
              Register
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <hr className="w-1/3 border-gray-300" />
            <span className="text-gray-500">or</span>
            <hr className="w-1/3 border-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 text-black font-semibold bg-gray-200 rounded-md hover:bg-teal-300 text-lg">
            <FaGoogle className="text-red-500" /> Sign up with Google
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 hover:underline font-semibold"
>>>>>>> f0c1c5745d598cb68df98d1649fe85c8fdecc0f8
            >
              Login
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

export default Register;
