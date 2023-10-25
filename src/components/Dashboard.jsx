import { useState } from 'react'
import '../dash.css'

function dashboard(){
    return(
      <div className='row'>
        <div className='col w-25 '>
            <div className='header'>
                <div className='Headernbar'>
                    FindMySpot
                </div>
            </div>

            <div nav flex-column>
                    <ul class="navbar-nav">
                        <li className='lista-navegacion'>
                            inicio
                        </li>
                        <li className='lista-navegacion'>
                            Historial de estancias
                        </li>
                    </ul>
            </div>

        </div>

        <div className='col '></div>
      </div>
    )
}

export default dashboard