import React from 'react'

export default function Historial() {
  return (
    <>
     

        <div class="container-fluid mt-3">

          <div class="card bg-success shadow-lg">
                <div class="card-header pb-0 text-white">
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
            


            <div class="card-body px-0 pb-2">
             
              <div class="table-responsive m-2 rounded-2">
                <table class="table table-borderless align-items-center mb-0">
                <thead >
                    <tr>
                      <th class=" text-success text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre cliente</th>
                      <th class=" text-success text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Estacionamiento</th>
                      <th class="text-success text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Entrada</th>
                      <th class="text-success text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Salida</th>
                      <th class="text-success text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        
     
      

    </>
  )
}
