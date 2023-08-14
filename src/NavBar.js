import CarWidget from "./CarWidget"
import { NavLink } from "react-router-dom"

function NavBar (){
    return (
        <header className="flex p-2 justify-between bg-black text-white shadow">
            
            <NavLink to="/" className="navbar-logo">
                <h1 className="text-[40px]" id="titulo">Tienda de motos</h1>
            </NavLink>
            <nav className="flex gap-4">
            <NavLink to= '/'>Home</NavLink>
            <NavLink to= "/categoria/Royal%20Enfield">Royal Enfield</NavLink>
            <NavLink to= '/categoria/Harley%20Davidson'>Harley Davidson</NavLink>
            <NavLink to= '/categoria/Triumph'>Triumph</NavLink>
            <NavLink to ="/carrito">
            <CarWidget />
            </NavLink>
           
            </nav>
            
        </header>
        
    )
}

export default NavBar
