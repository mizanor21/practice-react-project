import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { image_url, name, description, price, stock_quantity } = product;
  console.log(product);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="">
        <img className="w-[500px]" src={image_url} alt="" />
        <h2>
          {name} ({stock_quantity})
        </h2>
        <h4 className="text-2xl font-serif">{price} $</h4>
      </div>
    </div>
  );
};

export default ProductDetails;
