import React, { useState } from "react";
import { guardarOrden } from "../utils"; 



const productosDelCarrito =
([
    {
        id: 1,
        title: 'Meteor 350',
        image: ('../img/electra.jpg'),
        maxStock: 5,
        descripcion: "Disfruta del viaje nostálgico con la elegante Meteor 350, que combina el encanto vintage con tecnología moderna.",
        precio: 8000,
        marca: "Royal Enfield"
      },
      {
        id: 2,
        title: 'Classic 500',
        image: ('../img/classic500.jpg'),
        maxStock: 5,
        descripcion: "Explora terrenos accidentados con confianza junto a la versátil Classic 500, diseñada para aventuras todoterreno.",
        precio: 5000,
        marca: "Royal Enfield"
      },
      {
        id: 3,
        title: 'Himalayan',
        image: ('../img/himalayan.png'),
        maxStock: 5,
        descripcion: "Conquista caminos accidentados con facilidad gracias a la robusta Himalayan, la moto perfecta para aventuras todoterreno.",
        precio: 12000,
        marca: "Royal Enfield"
      },
])

function Carrito() {

    const [ticket, setTicket] = useState("")

    const handleClick = () => {
        let ordenDeCompra = {
            productos : productosDelCarrito,
            usuario : {
                nombre : "juana" ,
                email : "juana@gmail.com",
            },
        }

        guardarOrden(ordenDeCompra)
            .then(resultado => {
                setTicket(resultado.id)
            })
            .catch(error => {
                console.log(error)
            })
    }

    if(ticket) {
        return (
            <p>Gracias por su compra</p>
        )
    }

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {productosDelCarrito.map((producto) => {
                    return (
                        <li key={producto.id}>
                            <p>{producto.nombre}</p>
                            Cantidad : {producto.title} x{producto.cantidad}  - ${producto.precio}
                        </li>
                    )
                })}
            </ul>
            <div className="flex gap-8">
                <button className="p-2 bg-green-300 rounded shadow-xl" onClick={handleClick} >Comprar</button>
            </div>
        </div>
    )
}
export default Carrito;