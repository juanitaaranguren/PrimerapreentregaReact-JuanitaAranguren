import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { NavLink } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosCollection = collection(db, "productos");
      const productosSnapshot = await getDocs(productosCollection);
      const productosData = productosSnapshot.docs.map((doc) => doc.data());
      setProductos(productosData);
      setLoading(false);
    };

    obtenerProductos();
  }, []);

  return (
    <main>
      <h2 className="text-[20px] text-center">{props.greeting}</h2>
      <div className="flex justify-center">
      </div>
      <div>
        <ItemList productos={productos} />
      </div>
    </main>
  );
}

export default ItemListContainer;
