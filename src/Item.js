
const Item = ({ product }) => {
    return (
      <div className="item">
        <h3>{product.name}</h3>
        <p>Precio: {product.price} $</p>
        <p>Cilindraje:{product.cilindraje} </p>
        <p>Km:{product.cilindraje} </p>
      </div>
    );
  };
  
  export default Item;