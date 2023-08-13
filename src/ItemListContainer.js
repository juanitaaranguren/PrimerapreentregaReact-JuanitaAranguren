
import React from "react";
import Contador from "./ItemCount";
import ItemList from './ItemList'
import productos from './productos'

function ItemListContainer (props){

    const Productos = useState ([
        {
            title: 'Meteor 350',
            image: ('../img/electra.jpg'),
            maxStock: 5
          },
          {
            title: 'Classic 500',
            image: ('../img/classic500.jpg'),
            maxStock: 5
          },
          {
            title: 'Himalayan',
            image: ('../img/himalayan.png'),
            maxStock: 5
          },
          {
            title: 'Scramble',
            image: ('../img/scramble.jpg'),
            maxStock: 5
          },
          {
            title: 'Thunderbird',
            image: ('../img/thunder.jpg'),
            maxStock: 5
          },
          {
            title: 'Continental GT 650',
            image: ('../img/continental.jpg'),
            maxStock: 5
          },
          {
            title: 'Interceptor 650',
            image: ('../img/interceptor.png'),
            maxStock: 5
          },
          {
            title: 'Classic 350 Redditch',
            image: ('../img/redditch.jpg'),
            maxStock: 5
          },
          {
            title: 'Classic 500 Pegasus Edition',
            image: ('../img/pegasus.jpg'),
            maxStock: 5
          },
          {
            title: 'Bullet Electra',
            image: ('../img/electra.jpg'),
            maxStock: 5
          },
          {
            title: 'Thunderbird X',
            image: ('../img/thunderx.jpg'),
            maxStock: 5
          },
          {
            title: 'Bullet Trials',
            image: ('../img/bulletrials.jpg'),
            maxStock: 5
          },
        ])

        useEffect (()=> {

        }, [])
        return (
            <main>
                <h2 className="text-[20px] text-center">{props.greeting}</h2>
                <ItemList productos={productos} />
            </main>
        );
    }
    
    export default ItemListContainer;