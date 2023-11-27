import {useEffect, useState} from 'react'
import Cardinforesumen from './Cardinforesumen.jsx'
import Infoestacionamiento from './Infoestacionamiento.jsx'

export default function Inicio() {

  const [entradas, setEntradas] = useState(0)
  const [ganacias, setGanancias] = useState(0)
  
  useEffect(()=>{
    const apiestacionamientos = async () =>  {
  
      const url = 'https://findmyspotserviceslugares-production.up.railway.app/api/Estacionamientos'  
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json() 

  }
  
  const apiEntradas = async () =>  {
  
    const url = 'https://findmyspotservicesentradas.up.railway.app/api/Entradas'  

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    
   

    setEntradas(resultado.length)
}
const apiPagos = async () =>  {
  
  const url = 'https://findmyspotspringboot-production.up.railway.app/pagos/list'  

  const respuesta = await fetch(url)
  const resultado = await respuesta.json()
  let dinero = 0
  resultado.forEach(e => {

    if(e.total == null)
    e.total = 0

    dinero += parseInt(e.total)
  });
  setGanancias(dinero)
}

    apiPagos();
    apiEntradas();
    apiestacionamientos();

  },[])

  

  return (
  <>
    <div className='container-inicio'>

      <div className='container-resumen-saludo mt-3'>
        <h2>Bievenido usuario <span>Administrador</span></h2>
        <p>Asi va el dia de hoy:</p>
      </div>

      <div className='container-resumen-cards  container-fluid'>
        <div className="row">
        
        <Cardinforesumen mensaje2='Entradas' numero={entradas} mensaje ='Hoy se han realizado'/>
        <Cardinforesumen mensaje2='Pesos mexicanos' numero={ganacias} mensaje ='Se ha ganado el dia de hoy:'/>

        </div>
      </div>

      <div className='container-info-estacionamientos'>
       
      <Infoestacionamiento nombre='Estacionamiento Tortuga' direccion='C. Pino Suárez 536-532, Centro, 37000 León, Gto.' capacidad='50' img="/src/assets/a.png"/>   
      <Infoestacionamiento nombre='Estacionamiento Madero' direccion='C. Francisco I. Madero 827, Centro, 37000 León, Gto.' capacidad='120' img="/src/assets/download.jpg"/> 

      </div>

    </div>
  </>
  )
}
