import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/HomePage/Home";




import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/AddProduct";

import AllAuctions from "../Pages/AllAuctions";

import AuctionChart from "../Pages/Dashboard/AuctionChart";

import Profile from "../components/HomeComponents/profile";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import Bid from "../Pages/BidTask/Bid";
import WishList from "../Pages/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {

        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/allAuctions",
        element: <AllAuctions></AllAuctions>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/bid/:id",
        element: <Bid />,
      },
   
      {
        path:"allAuctions",
        element:<AllAuctions></AllAuctions>
      }

    ]
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "auctionChart",
        element: <AuctionChart></AuctionChart>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "wishList",
        element: <WishList></WishList>
      },
      {
        path:"profile",
        element:<Profile></Profile>
      }
    ],
  },
]);
