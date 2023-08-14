import CarWidget from "./CarWidget"
import { NavLink } from "react-router-dom"

function NavBar (){
    return (
        <header className="flex p-2 justify-between bg-black text-white shadow">
            <h1 className="text-[40px]"id="titulo">Tienda de motos</h1>
            <nav className="flex gap-4">
            <NavLink to= '/'>Home</NavLink>
            <NavLink to= '/'>Royal Enfield</NavLink>
            <NavLink to= '/'>Harley Davidson</NavLink>
            <NavLink to= '/'>Triumph</NavLink>
            </nav>
            <CarWidget />
        </header>
        
    )
}

export default NavBar
