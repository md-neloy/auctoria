import { Outlet } from "react-router-dom";
import Navbar from "../components/HomeComponents/Navbar";


const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="lg:max-w-7xl mx-auto mt-16 ">
            <Outlet/>
            </div>
           
        </div>
    );
};

export default MainLayout;