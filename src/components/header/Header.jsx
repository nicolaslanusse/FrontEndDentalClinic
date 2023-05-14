import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/centros">Centros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/regiser">Register</NavLink>
        </li>
        <li className="nav-item dropdown ">
          <a>User name</a>

          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="dropdown-item">
              <a>Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Header
