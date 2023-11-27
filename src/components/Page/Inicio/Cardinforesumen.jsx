import React from 'react'

export default function Cardinforesumen({mensaje2,mensaje,numero}) {


  return (
    <div className=" col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card shadow  border-light">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">{mensaje}</p>
                    <h5 className="font-weight-bolder mb-0">
                      {numero}
                      
                    </h5>
                    <p>{mensaje2}</p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
