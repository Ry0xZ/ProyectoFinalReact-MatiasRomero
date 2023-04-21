import { Link } from "react-router-dom";

const ItemError = () => {
  return (
    <div className="item">
      <h1 className="item__title">El producto solicitado no existe</h1>
      <Link to="/shop" className="item__btn">
        Volver a la Tienda
      </Link>
    </div>
  );
};

export default ItemError;
