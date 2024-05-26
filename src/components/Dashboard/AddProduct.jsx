const AddProduct = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="id"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
