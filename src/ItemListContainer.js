import Cards from './Cards'
import React from "react";
import Contador from "./Contador";


function ItemListContainer (){

    return (
        <main className="grow p-2">
        <h2 className="text-[20px] text-center">¿Qué quieres ver hoy?</h2>
       
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id='catalogo'>
     
            <Cards title= 'Meteor 350' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' className="w-full max-h-[200px] object-cover" />
            <Cards title='Classic 500' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Himalayan' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' className="w-full max-h-[200px] object-cover"/>
            <Cards title='Scramble' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png' className="w-full max-h-[200px] object-cover"/>
            <Cards title='Thunderbird' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Continental GT 650' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Interceptor 650' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Classic 350 Redditch' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Classic 500 Pegasus Edition' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Bullet Electra' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Thunderbird X' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />
            <Cards title='Bullet Trials' image='https://royalenfieldmx.com/motos/Interceptor/P3F_GTred_003.png'className="w-full max-h-[200px] object-cover" />

       
       
       
        </section>
     
     </main>


    )
}

export default ItemListContainer