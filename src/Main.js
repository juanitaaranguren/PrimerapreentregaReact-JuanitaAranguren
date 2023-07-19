import Cards from './Cards'
import React from "react";
import Contador from "./Contador";


function Main (){

    return (
        <main>
        <h2>Te damos la bienvenida a tu tienda de motos</h2>
        <section id='catalogo'>
     
        <Cards title='Moto 1' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' />
        <Contador />
        <button>Ver detalle</button>
        <Cards title='Moto 2' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' />
        <Contador />
        <button>Ver detalle</button>
        <Cards title='Moto 3' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' />
        <Contador />
        <button>Ver detalle</button>
        <Cards title='Moto 4' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' />
        <Contador />
        <button>Ver detalle</button>
        <Cards title='Moto 5' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' />
        <Contador />
        <button>Ver detalle</button>
        </section>
     
     </main>


    )
}

export default Main