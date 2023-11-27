import { useState } from 'react'
import '../App.css'

function Login() {
  

  return (
    <main className='bodyCuerpo row justify-content-center align-items-center' >

    <div className="container  col-auto text-center">
    <div className=" ">
      <form action="/dashboard">
        <div>
        <h1>FindMySpot</h1>
        </div>        
        <div className='form'>
          <label htmlFor="Labelusr">Correo Electronico</label>
          <input type="text" className="inputform" placeholder='Ingrese su usuario' name='usrlogin'/>
          <label htmlFor="labelcontra">Contraseña</label>
          <input className='inputform' type="password" name="psw" id="psw" placeholder='Ingresar contraseña' required/>
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-success mt-3 w-80">Iniciar sesion</button>
          </div>
        </div>
        
      </form>
      </div>
      
      </div>
    </main>
  )
}
export default Login

