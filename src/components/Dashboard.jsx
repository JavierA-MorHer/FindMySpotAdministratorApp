import { useState } from 'react'
import '../dash.css'
import Sidebar from './Sidevar/Sidebar.jsx'
import Inicio from './Page/Inicio/Inicio.jsx'
import Historial from './Page/HistorialEstancias/Historial.jsx'

function dashboard(){


    return(
  <>
 <div className='d-flex container-fluid'>
  <div className='container-fluid sidebar card bg-success shadow-lg'>
      <Sidebar/>
  </div>
  <div className='container-fluid'>
    {//<Inicio/>
    }
    <Historial/> 
  </div>
  </div>
  </>
    )
}

export default dashboard