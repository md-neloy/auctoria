// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { AiOutlineGooglePlus } from "react-icons/ai";
// // import { useContext } from "react";
// // import { AuthContext } from "../../providers/AuthProvider";
// // import toast from "react-hot-toast";
// // import { Helmet } from "react-helmet";

// const Login = () => {
//   // const navigate = useNavigate();
//   // const location = useLocation();
//   // const from = location?.state || "/";

//   // const { signIn, signInWithGoogle } = useContext(AuthContext);

//   // // Email Password Signin
//   // const handleSignIn = async (e) => {
//   //   e.preventDefault();
//   //   const form = e.target;
//   //   const email = form.email.value;
//   //   const pass = form.password.value;

//   //   try {
//   //     //User Login
//   //     await signIn(email, pass);
//   //     toast.success("Signin Successful");
//   //     navigate(from, { replace: true });
//   //   } catch (err) {
//   //     if (err.code === "Unauthorized") {
//   //       toast.error("Invalid Email or Password");
//   //     } else if (
//   //       err.code === "PERMISSION_DENIED" ||
//   //       err.code === " permission denied"
//   //     ) {
//   //       toast.error("Permission Denied");
//   //     } else if (err.code === "auth/invalid-credential") {
//   //       toast.error("Invalid User!");
//   //       navigate("/registration");
//   //     } else {
//   //       toast.error(err?.message);
//   //     }
//   //   }
//   // };

//   // // Google Signin
//   // const handleGoogleSignIn = async () => {
//   //   try {
//   //     await signInWithGoogle();

//   //     toast.success("Signin Successful");
//   //     navigate(from, { replace: true });
//   //   } catch (err) {
//   //     toast.error(err?.message);
//   //   }
//   // };
//   return (
//     <>
//       {/* <Helmet>
//         <title>Login | Online Tutor Booking</title>
//       </Helmet> */}
//       <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
//         <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
//           <h2 className="text-2xl font-bold text-center text-primary mb-4">
//             Welcome to eTUTOR
//           </h2>

//           <form>
//             {/* Email Field */}
//             <div className="form-control mb-4">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
//                   <FaEnvelope />
//                 </span>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   className="input input-bordered pl-10 w-full"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="form-control mb-4">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
//                   <FaLock />
//                 </span>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   className="input input-bordered pl-10 w-full"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="form-control">
//               <button className="btn btn-primary w-full">Login</button>
//             </div>
//           </form>

//           {/* Footer */}
//           <p className="text-sm text-center my-5 text-[#1e1e1e]">
//             Don't have an account?{" "}
//             <NavLink to="/registration" className="text-primary font-bold">
//               Registration
//             </NavLink>
//           </p>

//           <div className="divider text-[#1e1e1e]">OR</div>
//           <div className="my-2">
//             <button
//               // onClick={handleGoogleSignIn}
//               className="btn btn-primary w-full"
//             >
//               <AiOutlineGooglePlus className="text-xl" />
//               Google
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// import auctionImage from "./assets/auction-image.svg"; // Ensure you have an image in the assets folder
import auctionImage from "../../assets/auction-image.svg"; // Ensure you have an image in the assets folder
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
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
