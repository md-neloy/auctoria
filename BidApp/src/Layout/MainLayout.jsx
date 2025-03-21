import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Footer from "../components/ShareComponents/Footer";
import Navbar from "../components/ShareComponents/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
=======
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
>>>>>>> ef2d09f88561956a1f7b61d5c9ace05d32610d91
};

export default MainLayout;
