import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productosData from "./productos"; 
import Loader from "./Loader";


function ItemListContainer(props) {
    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState (true)

    useEffect(() => {
       
        setTimeout(() => {
            setProductos(productosData);
            setLoading (false);
        }, 2000);
    }, []);

    if (loading) {
      return (
        <Loader/>
      )
    } else {

      return (
        <main>
            <h2 className="text-[20px] text-center">{props.greeting}</h2>
            <ItemList productos={productos} />
        </main>)
    }
}
export default ItemListContainer;
