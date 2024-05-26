import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { id, name, image_url, description, price, stock_quantity } = product;
  console.log(product);
  return (
    <Link to={`/products/${id}`} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[400px]" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{stock_quantity}</div>
        </h2>
        <p>{description}</p>
        <h4 className="text-2xl font-serif text-green-800">{price} $</h4>
      </div>
    </Link>
  );
};

export default Product;
