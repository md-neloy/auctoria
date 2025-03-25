import { NavLink, Outlet } from "react-router-dom";

import {  FaHospitalUser,  FaRegAddressBook, FaUsers, } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";

import { GrHome } from "react-icons/gr";
import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="">
      <div className="flex  w-full  h-full">
 
 {/* Sidebar */}
 <div className="bg-slate-200 lg:px-14 lg:py-10 min-h-screen">
   <ul className="menu">
     <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Menu</h2>
     <li><NavLink to="/dashboard/auctionChart"><GrHome /> Auction Chart</NavLink></li>
     <li><NavLink to="/"><GrHome /> Home</NavLink></li>
     <li><NavLink to='/allAuctions'><FaHouseMedicalFlag />All Auctions</NavLink></li>
     <li><NavLink to="/dashboard/manageProfile"><FaHospitalUser /> Manage Profile</NavLink></li>

     {/* Organizer Dashboard (Admin) */}
      
       <div>
         <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Admins Dashboard</h2>
         <li><NavLink to="/dashboard/manageUsers"><FaUsers />Manage Users</NavLink></li>
         
       </div>

   </ul>

 <div className="divider"></div>

   {/* Sellers Dashboard */}
   <ul className="menu">
     <h2 className=" my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Sellers Dashboard</h2>
     
     
     <li><NavLink to='/addProduct'><FaRegAddressBook />Add Product</NavLink></li>
     <li><NavLink to='/dashboard/updateBidInfo'><FaRegAddressBook />Update Bid Information </NavLink></li>
    
   </ul>

   <div className="divider"></div>

   {/* Buyers Dashboard */}
   <ul className="menu">
     <h2 className=" my-6 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Buyers Dashboard</h2>
     
     <li><NavLink to='/dashboard/bidDetails'><FaRegAddressBook /> Bid Details</NavLink></li>
     <li><NavLink to='/dashboard/watchList'><FaRegAddressBook /> WatchList</NavLink></li>
    
   </ul>
 </div>

 {/* Main Content */}
 <div className="flex-1 ml-5 lg:ml-0 p-4">
   <Outlet />
 </div>
</div>
    </div>
  );
};

export default Dashboard;
