import React from 'react'

export default function Infoestacionamiento() {
  return (
    <>
        <div class="cotainer-info-estacionamiento row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card shadow bg-success text-white border-light">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100">
                    <h5 class="font-weight-bolder">*nombre estacionamiento</h5>
                    <p class="mb-5">Capacidad: *Capacidad</p>
                    <p class="">Capacidad usada: *Capacidad usada %</p>
                    <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                      Read More
                      <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                  
                  <div class="position-relative d-flex align-items-center justify-content-center h-100">
                        <h5>*Imagen logo estacionamiento</h5>
                      </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="container-estacionamiento-map col-lg-5">
          <div class="card h-100 p-3 shadow boder-light bg-success text-white">
            <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100" >
              <h2>*Aqui va un mapa bien mamalon</h2>
            </div>
          </div>
        </div>

        
      </div>


    </>
  )
}
