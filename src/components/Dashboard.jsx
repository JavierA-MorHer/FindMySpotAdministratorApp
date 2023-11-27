import { useState } from 'react'
import '../dash.css'
import ItemNav from './Sidevar/ItemNav.jsx'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'



function dashboard(){

const sidenav = document.getElementById('sidenav-main');
let body = document.getElementsByTagName('body')[0];
let className = 'g-sidenav-pinned';


function toggleSidenav() {

  if (body.classList.contains(className)) {
    body.classList.remove(className);
    setTimeout(function(){
      sidenav.classList.remove('bg-white')
    }, 100);
    sidenav.classList.remove('bg-transparent');

  } else {
    body.classList.add(className);
    sidenav.classList.add('bg-white');
    sidenav.classList.remove('bg-transparent');
  }
}


    return(
  <>
  {/*<div classNae='container-fluid'>
 <div className='d-flex container-fluid'>
  <div className='container-fluid sidebar card  shadow-lg sidenav-main'>

<nav className="h-100 navbar border-1 border-radius-xl my-3 fixed-start ms-1" id="sidenav-main">
  <div className=" ">
   <a className="navbar-brand " href="/dashboard">
    <span >FindMySpot</span>
    </a>
    <hr className="horizontal dark mt-2"/>
  </div>

  <div className="navbar-collapse h-75 w-auto " id="sidenav-collapse-main">
  <ul className="navbar-nav d-flex justify-content-start">
  <ItemNav ruta={'./'} Name = {'Dashboard'}/>
  <ItemNav ruta={'./historial'} Name = {'Historial de estancias'}/>
  </ul>
  </div>
</nav>
</div>*/}

<aside className="sidenav navbar navbar-vertical navbar-expand-xs fixed-start bg-white " id="sidenav-main">
   
    <div className="sidenav-header d-flex justify-content-center align-items-end">
      <Link to='/dashboard'>
        <span className="ms-1 font-weight-bold">FindMySpot</span>
        </Link>
    </div>

    <hr className="horizontal dark mt-0"/>

    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="m-2 navbar-nav d-flex justify-content-start">
      <ItemNav ruta={'./'} Name = {'Dashboard'}/>
      <ItemNav ruta={'./historial'} Name = {'Historial de estancias'}/>
      </ul>
    </div>

    <div className="sidenav-footer mx-3 ">
      <div className="card shadow-none " id="sidenavCard">
      <img src="/src/assets/thumbnail_jose.jpg" className="card-img"/>
      </div>
    </div>
  </aside>


  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">

  <div className='container-fluid'>
  <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" className="form-control" placeholder="Type here..."/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            
            
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <button onClick={toggleSidenav} className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </button>
            </li>
            
            
              
          </ul>
        </div>
      </div>
    </nav>

   <Outlet />
  </div>
  </main>
  </>
    
 )


}

export default dashboard