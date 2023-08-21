import React from "react";
import CarWidget from "./CarWidget";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <header className="flex p-4 justify-between bg-black text-white shadow-md">
      <NavLink to="/" className="navbar-logo">
        <h1 className="text-3xl font-semibold">Tienda de Motos</h1>
      </NavLink>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="hover:text-red-300">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categoria/Royal%20Enfield"
              className="hover:text-red-300"
            >
              Royal Enfield
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categoria/Harley%20Davidson"
              className="hover:text-red-300"
            >
              Harley Davidson
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Triumph" className="hover:text-red-300">
              Triumph
            </NavLink>
          </li>
          <li>
            <NavLink to="/carrito" className="hover:text-red-300">
              <CarWidget carritoCount={props.carritoCount} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
