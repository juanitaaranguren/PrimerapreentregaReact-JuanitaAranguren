import CarWidget from "./CarWidget"

function NavBar (){
    return (
        <header className="flex p-2 justify-between bg-black text-white shadow">
            <h1 className="text-[40px]"id="titulo">Tienda de motos</h1>
            <nav className="flex gap-4">
                <a href="http://">Royal Enfield</a>
                <a href="http://">Ducati</a>
                <a href="http://">Yamaha</a>
            </nav>
            <CarWidget />
        </header>
        
    )
}

export default NavBar
