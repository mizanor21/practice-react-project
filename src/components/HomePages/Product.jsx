import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const { product_id, name, image_url, description, price } = product;
  console.log(product);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{price} $</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={product_id} className="btn btn-info">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
