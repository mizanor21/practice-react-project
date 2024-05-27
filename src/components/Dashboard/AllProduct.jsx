import { useLoaderData } from "react-router-dom";
import DashProduct from "./DashProduct";
import { useState } from "react";
import axios from "axios";

const AllProduct = () => {
  const productss = useLoaderData();
  const [products, setProducts] = useState(productss);
  // console.log(products);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      alert("Product deleted successfully!");
      // Update the product list by removing the deleted product
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting the product:", error);
      alert("Failed to delete the product.");
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-3">
        <h2 className="text-center text-3xl font-serif border-b-4">Products</h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <DashProduct
            key={product.id}
            product={product}
            onDelete={handleDelete}
          ></DashProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
