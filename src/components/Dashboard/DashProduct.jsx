import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DashProduct = ({ product, onDelete }) => {
  const { id, name, image_url, description, price, stock_quantity } = product;
  //   console.log(product);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/products/${id}`}>
        <figure>
          <img className="w-full h-[400px]" src={image_url} alt={name} />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{stock_quantity}</div>
        </h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-serif text-green-800">{price} $</h4>
          <div className="flex gap-2">
            <button className="btn">Edit</button>
            <button className="btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProduct;
