import { FaHome, FaUser } from "react-icons/fa";
import useAdmin from "../../../privateRoutes/useAdmin";
import useSeller from "../../../privateRoutes/useSeller";
import AdminNavbar from "../dasboardaNavbar/AdminNavbar";
import BuyerNavbar from "../dasboardaNavbar/BuyerNavbar";
import SellerNavbar from "../dasboardaNavbar/SellerNavbar";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();
  return (
    <div>
      <div className="w-full md:w-64">
        <ul>
          {isAdmin ? (
            <AdminNavbar />
          ) : isSeller ? (
            <SellerNavbar />
          ) : (
            <BuyerNavbar />
          )}
        </ul>
        {/* horizontal line */}
        <div className="divider"></div>
        {/* share common Navlink */}
        <ul className="menu">
          <li>
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FaUser /> Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
