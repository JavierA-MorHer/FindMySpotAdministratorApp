import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import * as bootstrap from 'bootstrap'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,  
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);


ReactDOM.createRoot(document.getElementById('body')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
