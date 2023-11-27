import React from 'react'

export default function Infoestacionamiento({nombre, direccion,capacidad,img}) {
  
  return (
    <>
        <div className="cotainer-info-estacionamiento row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card shadow  border-light">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex flex-column h-100">
                    <h5 className="font-weight-bolder">{nombre}</h5>
                    <p className="mb-5">Capacidad: {capacidad}</p>
                    <p className="">Dirreccion: {direccion}</p>
                    <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto">
                      Read More
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                  
                  <div className="position-relative d-flex align-items-center justify-content-center h-100">
                  <img src={img}  className='card-img'/>
                      </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-estacionamiento-map col-lg-5">
          <div className="card h-100 p-3 shadow boder-light">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100" >
                <img src="/src/assets/mapa.png"  className='card-img'/>
            </div>
          </div>
        </div>

        
      </div>


    </>
  )
  


}

