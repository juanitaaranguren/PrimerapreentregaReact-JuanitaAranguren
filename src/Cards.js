import Contador from "./Contador"

function Cards (props) {
    return (

    <main>
        <article>
        <h3 className="text-[25px] font-bold">{props.title}</h3>
        <img src={props.image} alt="" />
        <p>Lorem ipsum dolor.</p>
        <button>Ver detalle</button>
        <Contador/>
        </article>
    </main>
    )
}

export default Cards