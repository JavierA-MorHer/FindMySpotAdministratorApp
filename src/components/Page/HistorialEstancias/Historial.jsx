import {useEffect, useState} from 'react'

export default function Historial() {

  const [pagos,setPagos] = useState([])

  useEffect(()=>{
    const apipag = async () =>  {
  
      const url = 'https://findmyspotspringboot-production.up.railway.app/pagos/list'  
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json() 

      setPagos(resultado)
  }
  apipag();

},[])


  return (
    <>
        <div className="container-fluid mt-3">

          <div className="card shadow-lg">
                <div className="card-header pb-0">
                <div className='mb-3'>
                <h3>Historial de estancias</h3>
                </div>
                <div className='m-3 d-flex justify-items-center'>
                
                  <form action="" className='row g-4'>
                    <div className='col-auto'>
                    <input className='rounded-3' type="date" />
                    </div>
                    <div className='col-auto'>
                    <p>al</p>
                    </div>
                    <div className='col-auto'>
                    <input className='rounded-3' type="date" />
                    </div>
                    <div className='col-auto mb-2'>
                    <button className='btn btn-outline-light'>Consultar</button>
                    </div>
                  </form>
                  </div>   
              </div>
            


            <div className="card-body px-0 pb-2">
             
              <div className="table-responsive m-2 rounded-2">
                <table className="table table-borderless align-items-center mb-0">
                <thead >
                    <tr>
                      <th className="text-center text-uppercase text-xxs font-weight-bolder ">Id cliente</th>
                      <th className="text-center text-uppercase text-xxs font-weight-bolder  ps-2">Id estacionamiento</th>
                      <th className="text-center text-uppercase text-xxs font-weight-bolder ">Id Entrada</th>
                      <th className="text-center text-uppercase text-xxs font-weight-bolder ">Fecha Pago</th>
                      <th className="text-center text-uppercase text-xxs font-weight-bolder ">Total</th>
                    </tr>
                </thead>
                <tbody >
                    { pagos.map(pagos =>{
                      return(
                        <tr className=''>
                      <td className='text-center'>{pagos.id_Pago}</td>
                      <td className='container-fluid text-center'>{pagos.id_Usuario}</td>
                      <td className='container-fluid text-center'>{pagos.id_Entrada}</td>
                      <td className='container-fluid text-center'>{pagos.fechaPago}</td>
                      <td className='container-fluid text-center'>{pagos.total}</td>  
                      </tr>
                      )
                    })
                    
                  }


                </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        
     
      

    </>
  )
}
