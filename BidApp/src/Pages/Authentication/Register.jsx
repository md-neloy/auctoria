import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUber } from "react-icons/fa";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import toast from "react-hot-toast";
// import { Helmet } from "react-helmet";

const Register = () => {
  // const navigate = useNavigate();
  // const { signInWithGoogle, createUser, updateUserProfile, setUser } =
  //   useContext(AuthContext);

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const name = form.name.value;
  //   const photo = form.photo.value;
  //   const pass = form.password.value;

  //   try {
  //     //2. User Registration
  //     const result = await createUser(email, pass);

  //     await updateUserProfile(name, photo);
  //     setUser({ ...result.user, photoURL: photo, displayName: name });
  //     toast.success("Signup Successful");
  //     navigate("/");
  //   } catch (err) {
  //     toast.error(err?.message);
  //   }
  // };

  return (
    <>
      {/* <Helmet>
        <title>Register | Online Tutor Booking</title>
      </Helmet> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center text-primary mb-4">
            Welcome to eTUTOR
          </h2>
          <form onSubmit={handleSignUp}>
            {/* Name Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <div className="relative">
                <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered pl-10 w-full"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered pl-10 w-full"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered pl-10 w-full"
                />
              </div>
            </div>

            {/* Photo Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <div className="relative">
                <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
                  <FaUber />
                </span>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your PhotoUrl"
                  className="input input-bordered pl-10 w-full"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button className="btn btn-primary w-full">Registration</button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-sm text-center mt-4 text-[#1e1e1e]">
            Already have an account?{" "}
            <NavLink to="/login" className="text-primary font-bold">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
