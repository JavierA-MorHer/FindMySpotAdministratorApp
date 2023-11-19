import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import * as bootstrap from 'bootstrap'
import Dashboardprueba from './components/Dashboardprueba.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,  
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/preba",
    element: <Dashboardprueba />,
  },
  {
    path: "/dashboar/historial"
  },

]);


ReactDOM.createRoot(document.getElementById('body')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
