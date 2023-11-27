import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemNav({ruta,Name}) {
  return (
    <>
        <li className="nav-item mt-3 h-25 text-center ">
            <div className="h-100 shadow rounded-2 bg-white d-flex align-items-center justify-content-center text-center">
              <Link className="nav-link active h-100 d-flex align-items-center justify-content-center text-center " to={ruta}>
                <span> {Name} </span>
              </Link>
            </div>
        </li>
    </>
  )
}
