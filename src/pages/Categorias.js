import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList"; // Asegúrate de importar correctamente el componente ItemList
import productosData from "../Productos"; // Asegúrate de importar correctamente tus datos de productos



function Categorias() {
    
    const { id } = useParams();

    // Filtrar los productos por la marca seleccionada
    const productosPorMarca = productosData.filter(producto => producto.marca === id);

    return (
        <div>
            <h2>Categoría: {id}</h2>
            <ItemList productos={productosPorMarca} />
        </div>
    );
}

export default Categorias;
