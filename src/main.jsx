import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import * as bootstrap from 'bootstrap'
import Inicio from './components/Page/Inicio/Inicio.jsx';
import Historial from './components/Page/HistorialEstancias/Historial.jsx'
import  Dashboardprueba from './components/Dashboardprueba.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,  
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index:true, 
        element: <Inicio/>,
        //ErrorElement sirve para cuando hay errores en lugar de renderizar el error, se renderiza lo que se desea.
      },
      {
        path: 'historial',
        element: <Historial/>,
      },

    ]
  },

  {
    path: 'prueba',
    element: <Dashboardprueba/>
  },




]);


ReactDOM.createRoot(document.getElementsByTagName('body')[0]).render(
  
  <RouterProvider router={router} />

)
