
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Routes.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

    


