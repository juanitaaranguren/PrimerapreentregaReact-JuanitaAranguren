import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList"; 
import productosData from "../Productos";



function Categorias() {
    
    const { id } = useParams();
    const productosPorMarca = productosData.filter(producto => producto.marca === id);

    return (
        <div>
            <h2>Categoría: {id}</h2>
            <ItemList productos={productosPorMarca} />
        </div>
    );
}

export default Categorias;
