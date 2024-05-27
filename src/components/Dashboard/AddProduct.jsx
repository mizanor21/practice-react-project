import axios from "axios";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const uniqueId = uuidv4();
    const formData = { id: uniqueId, ...data };
    try {
      await axios.post("http://localhost:3000/products", formData);
      alert("Successfully added data!");

      // Clear all input fields
      reset();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="mb-5 text-3xl font-serif">Add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Product name"
            className="input input-bordered lg:w-[600px] "
          />
          {errors.name && <i className="text-red-600">{errors.name.message}</i>}
        </div>
        <div>
          <input
            {...register("description", {
              required: "Description is required",
            })}
            type="text"
            placeholder="description"
            className="input input-bordered lg:w-[600px]"
          />
          {errors.description && (
            <i className="text-red-600">{errors.description.message}</i>
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
            type="text"
            placeholder="image url"
            className="input input-bordered lg:w-[600px]"
          />
          {errors.image_url && (
            <i className="text-red-600">{errors.image_url.message}</i>
          )}
        </div>
        <div>
          <select
            {...register("category", { required: "Category is required" })}
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
            <i className="text-red-600">{errors.category.message}</i>
          )}
        </div>
        <div>
          <input
            {...register("price", { required: "Price is required" })}
            type="number"
            placeholder="price"
            className="input input-bordered lg:w-[600px]"
          />
          {errors.price && (
            <i className="text-red-600">{errors.price.message}</i>
          )}
        </div>
        <div>
          <input
            {...register("stock_quantity", {
              required: "Stock quantity is required",
            })}
            type="number"
            placeholder="stock quantity"
            className="input input-bordered lg:w-[600px]"
          />
          {errors.stock_quantity && (
            <i className="text-red-600">{errors.stock_quantity.message}</i>
          )}
        </div>
        <input type="submit" value={"Add Product"} className="btn"></input>
      </form>
    </div>
  );
};

export default AddProduct;
