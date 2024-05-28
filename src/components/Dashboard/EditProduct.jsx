import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  console.log(product);
  const { id, name, image_url, description, category, price, stock_quantity } =
    product;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, data);
      alert("Product updated successfully!");
      navigate("/dashboard/all-product"); // Redirect to the products list or another page
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="mb-5 text-3xl font-serif">Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            defaultValue={name}
            type="text"
            placeholder="Product name"
            className="input input-bordered lg:w-[600px] "
          />{" "}
          <br />
          {errors.name && (
            <small className="text-red-600">{errors.name.message}</small>
          )}
        </div>
        <div>
          <input
            {...register("description", {
              required: "Description is required",
            })}
            defaultValue={description}
            type="text"
            placeholder="description"
            className="input input-bordered lg:w-[600px]"
          />{" "}
          <br />
          {errors.description && (
            <small className="text-red-600">{errors.description.message}</small>
          )}
        </div>
        <div>
          <input
            {...register("image_url", {
              required: "Image URL is required",
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Please enter a valid URL",
              },
            })}
            defaultValue={image_url}
            type="text"
            placeholder="image url"
            className="input input-bordered lg:w-[600px]"
          />{" "}
          <br />
          {errors.image_url && (
            <small className="text-red-600">{errors.image_url.message}</small>
          )}
        </div>
        <div>
          <select
            {...register("category", { required: "Category is required" })}
            defaultValue={category}
            className="select lg:w-[600px]"
          >
            <option disabled selected>
              Select option
            </option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
            <option value="elderberry">Elderberry</option>
            <option value="fig">Fig</option>
            <option value="grape">Grape</option>
            <option value="honeydew">Honeydew</option>
            <option value="kiwi">Kiwi</option>
            <option value="lemon">Lemon</option>
            <option value="mango">Mango</option>
            <option value="nectarine">Nectarine</option>
            <option value="orange">Orange</option>
            <option value="papaya">Papaya</option>
            <option value="quince">Quince</option>
            <option value="raspberry">Raspberry</option>
            <option value="strawberry">Strawberry</option>
            <option value="tangerine">Tangerine</option>
            <option value="ugli_fruit">Ugli Fruit</option>
            <option value="vanilla">Vanilla</option>
            <option value="watermelon">Watermelon</option>
            <option value="xigua">Xigua</option>
            <option value="yellow_passion_fruit">Yellow Passion Fruit</option>
            <option value="zucchini">Zucchini</option>
            <option value="apricot">Apricot</option>
            <option value="blackberry">Blackberry</option>
            <option value="coconut">Coconut</option>
            <option value="dragonfruit">Dragonfruit</option>
            <option value="elderberry">Elderberry</option>
            <option value="fig">Fig</option>
          </select>
          {errors.category && (
            <small className="text-red-600">{errors.category.message}</small>
          )}
        </div>
        <div>
          <input
            {...register("price", { required: "Price is required" })}
            defaultValue={price}
            // type="number"
            placeholder="price"
            className="input input-bordered lg:w-[600px]"
          />{" "}
          <br />
          {errors.price && (
            <small className="text-red-600">{errors.price.message}</small>
          )}
        </div>
        <div>
          <input
            {...register("stock_quantity", {
              required: "Stock quantity is required",
            })}
            defaultValue={stock_quantity}
            type="number"
            placeholder="stock quantity"
            className="input input-bordered lg:w-[600px]"
          />{" "}
          <br />
          {errors.stock_quantity && (
            <small className="text-red-600">
              {errors.stock_quantity.message}
            </small>
          )}
        </div>
        <input type="submit" value={"Edit Product"} className="btn"></input>
      </form>
    </div>
  );
};

export default EditProduct;
