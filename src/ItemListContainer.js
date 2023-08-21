
      import React, { useState, useEffect } from "react";
      import ItemList from "./ItemList";
      import productosData from "./Productos";
      import { BeatLoader } from "react-spinners";
      import { NavLink } from "react-router-dom";
      import CarWidget from "./CarWidget";

      function obtenerProductos() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(productosData);
          }, 2000);
        });
        }

    function ItemListContainer(props) {
      const [productos, setProductos] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        obtenerProductos().then((productosObtenidos) => {
          setProductos(productosObtenidos);
          setLoading(false);
        });
      }, []);
      return (
        <main>
          <h2 className="text-[20px] text-center">{props.greeting}</h2>
          <div className="flex justify-center">
            <NavLink to="/producto-aleatorio" className="producto-aleatorio">
             ¿Qué moto te depara el destino?
            </NavLink>
          </div>
        </main>
      );
    }

    export default ItemListContainer;
