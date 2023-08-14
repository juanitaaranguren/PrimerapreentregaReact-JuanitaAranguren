import React from "react";

function DetalleMoto(props) {
    // Usa las propiedades para mostrar los detalles de la moto
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.image} alt="" />
            <p>{props.descripcion}</p>
            <p>${props.precio}</p>
            <p>{props.marca}</p>
        </div>
    );
}

export default DetalleMoto;
