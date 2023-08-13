import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productosData from "./productos";
import { BeatLoader } from "react-spinners"; 
import "./ItemListContainer.scss"; 

function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProductos(productosData);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <main>
            <h2 className="text-[20px] text-center">{props.greeting}</h2>
            {loading ? (
                <div className="loader-container">
                    <BeatLoader color={"#123abc"} loading={loading} size={20} />
                </div>
            ) : (
                <ItemList productos={productos} />
            )}
        </main>
    );
}

export default ItemListContainer;
