import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineStackedBarChart } from "react-icons/md";
import {  FaHospitalUser, FaUsers, } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import { RiAuctionLine } from "react-icons/ri";
import { GrHome } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import { LuFolderHeart } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
const Dashboard = () => {
  return (
    <div className="">
      <div className="flex  w-full  h-full">
 
 {/* Sidebar */}
 <div className="bg-slate-200 lg:px-14 lg:py-10 min-h-screen">
   <ul className="menu">
     <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Menu</h2>
     <li><NavLink to="/dashboard/auctionChart"><MdOutlineStackedBarChart className=" text-2xl" />Auction Chart</NavLink></li>
     <li><NavLink to="/"><GrHome  className=" text-2xl"/> Home</NavLink></li>
     <li><NavLink to='/allAuctions'><RiAuctionLine className=" text-2xl" />All Auctions</NavLink></li>
     <li><NavLink to="/dashboard/manageProfile"><ImProfile className="text-2xl" /> Manage Profile</NavLink></li>
     <div className="divider"></div>

     {/* Organizer Dashboard (Admin) */}
      
       <div>
         <h2 className="text-center my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Admins Dashboard</h2>
         <li><NavLink to="/dashboard/manageUsers"><FaUsers className=" text-2xl" />Manage Users</NavLink></li>
         
       </div>

   </ul>

 <div className="divider"></div>

   {/* Sellers Dashboard */}
   <ul className="menu">
     <h2 className=" my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Sellers Dashboard</h2>
     
     
     <li><NavLink to='/addProduct'><TbShoppingCartPlus className=" text-2xl" />Add Product</NavLink></li>
     <li><NavLink to='/dashboard/updateBidInfo'><RxUpdate className=" text-2xl" />Update Bid Information </NavLink></li>
    
   </ul>

   <div className="divider"></div>

   {/* Buyers Dashboard */}
   <ul className="menu">
     <h2 className=" my-5 font-bold text-xl dark:text-[#A294F9] text-[#4635B1]">Buyers Dashboard</h2>
     
     <li><NavLink to='/dashboard/bidDetails'><TbListDetails className=" text-2xl" /> Bid Details</NavLink></li>
     <li><NavLink to='/dashboard/watchList'><LuFolderHeart className=" text-2xl" /> WatchList</NavLink></li>
    
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
