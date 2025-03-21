import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";


import Home from "../Pages/HomePage/Home";
<<<<<<< HEAD
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
=======
import AllAuctions from "../Pages/AllAuctions";
import AddProduct from "../Pages/AddProduct";
import Profile from "../components/HomeComponents/profile";

>>>>>>> ef2d09f88561956a1f7b61d5c9ace05d32610d91

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
        path:'/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/allAuctions',
        element:<AllAuctions></AllAuctions>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
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
  },
]);
