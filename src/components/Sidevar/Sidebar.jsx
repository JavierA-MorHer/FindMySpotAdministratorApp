import React from 'react'
import ItemNav from './ItemNav'

export default function Sidebar() {

  return (
    <>

        <div className='container-fluid'>

        <nav class="h-100 navbar border-1 border-radius-xl my-3 fixed-start ms-1" id="sidenav-main">
          <div class="text-white ">
           <a class="navbar-brand text-white " href="/dashboard">
            <span >FindMySpot</span>
            </a>
            <hr class="horizontal dark mt-2"/>
          </div>

          <div class="navbar-collapse h-75 w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav d-flex justify-content-start">
          <ItemNav Link={'dasboard/inicio'} Name = {'Dashboard'}/>
          <ItemNav Link={'dasboard/historial'} Name = {'Historial de estancias'}/>
          </ul>
          </div>
        </nav>

        </div>
    
    </>
  )
}
