import React from "react";
import { BrowserRouter } from "react-router-dom"; // Asegúrate de importar BrowserRouter

import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";

function App() {
    return (
        <BrowserRouter>
                <NavBar />
                <ItemListContainer greeting="Las motos son lo más cercano a volar estando en la tierra" />
                <Footer />
        </BrowserRouter>
    );
}

export default App;
