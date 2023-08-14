import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Categorias from "./pages/Categorias";
import Carrito from "./pages/Carrito";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/categoria/:id" element={<Categorias />} />
                    {/* ... otras rutas */}
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
