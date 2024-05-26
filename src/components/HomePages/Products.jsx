/* eslint-disable react/prop-types */
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div>
      <h2 className="text-center text-3xl font-serif">Products</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
