import React, { useContext } from "react";
import { cartContext } from "./CustomProvider";

function Item(props) {

const valorDelContexto = useContext (cartContext);

return (
<div> 
       <main className="border p-4">
         <article>
               <h3 className="text-lg font-bold">{props.title}</h3>
              <img
                   className="w-full h-[150px] object-contain mt-2"
                src={props.image}
                alt=""
               />
              <p className="mt-2">{props.descripcion}</p>
              <p className="mt-2">${props.precio}</p>
               <p className="mt-2">{props.marca}</p>
               {/* <button className="mt-2 boton-ver-detalle" onClick={toggleDetalle}>
                Ver detalle
               </button>
               {showDetalle && <DetalleMoto producto={props} onClose={toggleDetalle} />} */}
              <p>Cantidad : {valorDelContexto.cantidad}</p>
          <button
            onClick={() =>
              valorDelContexto.setCantidad(valorDelContexto.cantidad + 1) // Incrementa la cantidad correctamente
            }
          >
            sumar
          </button>
             </article>
             
           </main>
</div>
)
}
export default Item;



// import React, { useState } from "react";
// import DetalleMoto from "./DetalleMoto"

// import DetalleMoto from "./DetalleMoto";

// function Item(props) {
//   const [showDetalle, setShowDetalle] = useState(false);
//   const { agregarAlCarrito } = useState(); // Usa el hook para acceder al contexto

//   const toggleDetalle = () => {
//     setShowDetalle(!showDetalle);
//   };

//   const handleAgregarAlCarrito = (producto) => {
//     agregarAlCarrito(producto); // Agrega el producto al carrito a través del contexto
//     props.setCarritoCount((prevCount) => prevCount + 1); // Actualiza el contador en el NavBar
//   };

//   return (
//     <main className="border p-4">
//       <article>
//             <h3 className="text-lg font-bold">{props.title}</h3>
//            <img
//                 className="w-full h-[150px] object-contain mt-2"
//              src={props.image}
//              alt=""
//             />
//            <p className="mt-2">{props.descripcion}</p>
//            <p className="mt-2">${props.precio}</p>
//             <p className="mt-2">{props.marca}</p>
//             <button className="mt-2 boton-ver-detalle" onClick={toggleDetalle}>
//              Ver detalle
//             </button>
//           </article>
//            <button className="mt-2 boton-agregar-carrito" onClick={handleAgregarAlCarrito}>
//         Agregar al carrito
//           </button>
//           {showDetalle && <DetalleMoto producto={props} onClose={toggleDetalle} />}
//         </main>
//       );
//     }

//     export default Item;
    