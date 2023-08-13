import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productosData from "./productos"; // Asegúrate de importar los datos de productos

function ItemListContainer(props) {
    const [productos, setProductos] = useState([]); // Inicializa productos con un arreglo vacío


    useEffect(() => {
       
        setTimeout(() => {
            setProductos(productosData);
        }, 2000);
    }, []);

    return (
        <main>
            <h2 className="text-[20px] text-center">{props.greeting}</h2>
            <ItemList productos={productos} />
        </main>
    );
}

export default ItemListContainer;
