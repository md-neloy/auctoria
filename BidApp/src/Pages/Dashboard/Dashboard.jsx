import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import { FaBars, FaTimes, FaHospitalUser, FaRegAddressBook, FaUsers } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { GrHome } from "react-icons/gr";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <div className="bg-slate-200 lg:px-14 lg:py-10 min-h-screen">
        <ul className="menu">
          <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Menu</h2>
          <li><NavLink to="/dashboard/auctionChart"><GrHome /> Auction Chart</NavLink></li>
          <li><NavLink to="/"><GrHome /> Home</NavLink></li>
          <li><NavLink to="/allAuctions"><FaHouseMedicalFlag />All Auctions</NavLink></li>
          <li><NavLink to="/dashboard/manageProfile"><FaHospitalUser /> Manage Profile</NavLink></li>
        </ul>
        <div className="divider"></div>
        
        {/* Organizer Dashboard (Admin) */}
        <ul className="menu">
          <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Admins Dashboard</h2>
          <li><NavLink to="/dashboard/manageUsers"><FaUsers />Manage Users</NavLink></li>
        </ul>
        <div className="divider"></div>
        
        {/* Sellers Dashboard */}
        <ul className="menu">
          <h2 className="my-5 font-bold text-xl mt-3 dark:text-[#A294F9] text-[#4635B1]">Sellers Dashboard</h2>
          <li><NavLink to="/addProduct"><FaRegAddressBook />Add Product</NavLink></li>
          <li><NavLink to="/dashboard/updateBidInfo"><FaRegAddressBook />Update Bid Information</NavLink></li>
        </ul>
        <div className="divider"></div>
        
        {/* Buyers Dashboard */}
        <ul className="menu">
          <h2 className="my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Buyers Dashboard</h2>
          <li><NavLink to="/dashboard/bidDetails"><FaRegAddressBook /> Bid Details</NavLink></li>
          <li><NavLink to="/dashboard/watchList"><FaRegAddressBook /> WatchList</NavLink></li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-4 bg-white border-b flex justify-between items-center">
          <button className="lg:hidden text-gray-600 text-2xl" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="p-4 overflow-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;