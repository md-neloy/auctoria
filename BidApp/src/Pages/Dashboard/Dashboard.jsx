import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="relative min-h-[calc(100vh-292px)] md:flex  bg-white">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-4 bg-white border-b flex justify-between items-center">
          <button className="lg:hidden text-gray-600 text-2xl" onClick={() => setSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? <FaTimes /> : <FaBars />}</button>
          <h1 className="text-lg font-bold">Dashboard</h1>
          
        
        </div >
         <div className="p-4 overflow-auto flex-1">
         <Outlet />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
