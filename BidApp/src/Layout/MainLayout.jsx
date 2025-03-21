import { Outlet } from "react-router-dom";

import Navbar from "../components/HomeComponents/Navbar";
import Footer from "../components/HomeComponents/Footer";


const MainLayout = () => {

    return (
        <div >
            <Navbar></Navbar>
            <div className="lg:max-w-7xl mx-auto mt-16 ">
            <Outlet/>
            </div>
           <Footer></Footer>
        </div>
    );

  

  }
export default MainLayout;
