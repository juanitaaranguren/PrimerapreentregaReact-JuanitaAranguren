import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Carrito from "./pages/Carrito";
import CustomProvider from "./CustomProvider";






function App() {
  return ( 
    <BrowserRouter>
    <CustomProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:id" element={<Categorias />} />
          <Route path="/productos"/>
        </Routes>
      </main>
      <Footer />
      </CustomProvider>
      </BrowserRouter>
    
  );
}

export default App;
