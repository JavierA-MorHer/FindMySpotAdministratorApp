import React from 'react'

export default function ItemNav({Link,Name}) {
  return (
    <>
        <li class="nav-item mt-3 h-25 text-center ">
            <div class="h-100 shadow rounded-2 bg-white d-flex align-items-center justify-content-center text-center">
              <a className="nav-link active h-100 d-flex align-items-center justify-content-center text-center " href={Link}>
                <span> {Name} </span>
              </a>
            </div>
        </li>
    </>
  )
}
