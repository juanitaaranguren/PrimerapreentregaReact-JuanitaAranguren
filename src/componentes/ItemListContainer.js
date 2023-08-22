import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { traerProductos, traerProductosPorCategoria } from "../utils"; // Importa tus funciones de utilidad
import { useParams } from "react-router-dom";
import Loader from "./Loader"

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let pedido;

    if (params.id) {
      pedido = traerProductosPorCategoria(params.id);
    } else {
      pedido = traerProductos();
    }

    pedido
      .then((resultado) => {
        setProductos(resultado);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error al obtener los productos:", error);
      });
  }, [params.id]);

  if (loading) {
    return <Loader />;
  } else {
    return <ItemList productos={productos} />;
  }
}

export default ItemListContainer;
