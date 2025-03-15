import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar  rounded-3xl p-4  flex justify-between items-center max-w-7xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="https://i.ibb.co.com/Js9CG21/361076432-c6ae963c-9e4b-48c4-9bda-f1b54e9f5bf4.jpg" // Replace with your logo
          alt="Logo"
          className="rounded-full w-10 h-10 object-cover"
        />
        <span className="font-semibold text-lg">Auctoria</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-6 text-gray-800">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Auctions</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </div>

      {/* Contact Icons & Button */}
      <div className="hidden md:flex items-center space-x-4">
        <FaPhoneAlt className="text-xl cursor-pointer hover:text-blue-500" />
        <FaEnvelope className="text-xl cursor-pointer hover:text-blue-500" />
        <FaMapMarkerAlt className="text-xl cursor-pointer hover:text-blue-500" />
        <button className="bg-teal-300 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-teal-400 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="btn btn-circle btn-ghost">
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
