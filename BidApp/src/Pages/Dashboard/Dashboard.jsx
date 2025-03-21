import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="relative min-h-[calc(100vh-292px)] md:flex bg-white">
        <Sidebar />
        <div className="w-full md:flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
