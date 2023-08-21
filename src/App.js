import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Categorias from "./pages/Categorias";
import Carrito from "./pages/Carrito";

function App() {
  const [carritoCount, setCarritoCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar carritoCount={carritoCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categoria/:id" element={<Categorias />} />
          <Route
            path="/productos"
            element={<ItemListContainer setCarritoCount={setCarritoCount} />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
