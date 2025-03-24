import { Outlet } from "react-router-dom";

import Footer from "../components/ShareComponents/Footer";
import Navbar from "../components/ShareComponents/Navbar";




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
