/* eslint-disable react/prop-types */
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div>
      <div className="flex justify-center mb-3">
        <h2 className="text-center text-3xl font-serif border-b-4">Products</h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
