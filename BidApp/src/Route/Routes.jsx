import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/HomePage/Home";

import AllAuctions from "../Pages/AllAuctions";
import AddProduct from "../Pages/AddProduct";

import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AuctionChart from "../Pages/Dashboard/AuctionChart";




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
       path:"/addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"allAuctions",

        element:<AllAuctions></AllAuctions>
      },
      

    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children:[
      {
        path:'auctionChart',
        element:<AuctionChart></AuctionChart>
      }
    ]
  },
]);
