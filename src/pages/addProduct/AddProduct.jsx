const AddProduct = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;
    const product = {
      photo,
      name,
      type,
      price,
      description,
      rating,
    };
    console.log(product);
  };
  return (
    <div className="bg-[#F4F3F0] p-20 pt-0">
      <div className="text-3xl font-extrabold text-center pt-5 pb-10">
        Add a Product
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">product name</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Product Type"
                name="type"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2"></div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control md:w-full ">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-28 resize-none focus:outline-none"
              name="description"
              type="text"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-neutral mt-7 w-full"
        />
      </form>
    </div>
  );
};

export default AddProduct;
