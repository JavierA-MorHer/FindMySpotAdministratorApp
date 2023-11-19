import React from 'react'
import Cardinforesumen from './Cardinforesumen'
import Infoestacionamiento from './Infoestacionamiento'

export default function Inicio() {
  return (
  <>
    <div className='container-inicio'>

      <div className='container-resumen-saludo mt-3'>
        <h2>Bievenido usuario <span>Administrador</span></h2>
        <p>Asi va el dia de hoy:</p>
      </div>

      <div className='container-resumen-cards  container-fluid'>
        <div class="row">

        <Cardinforesumen/>
        <Cardinforesumen/>
        <Cardinforesumen/>
        
        </div>
      </div>

      <div className='container-info-estacionamientos'>

      <Infoestacionamiento/>
      <Infoestacionamiento/>

      </div>

    </div>
  </>
  )
}
