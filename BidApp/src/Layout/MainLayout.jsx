import { Outlet } from "react-router-dom";

import Navbar from "../components/HomeComponents/Navbar";
import Footer from "../components/ShareComponents/Footer";




const MainLayout = () => {

    return (
        <div >
            <Navbar></Navbar>
            <Outlet/>
          <Footer></Footer>
        </div>
    );

  

  }
export default MainLayout;
