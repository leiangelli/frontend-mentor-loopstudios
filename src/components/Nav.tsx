import React from 'react'

function Nav (props: any) {
  
  return (
    <nav className={ props?.class }>
      <ul className="nav-list">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
