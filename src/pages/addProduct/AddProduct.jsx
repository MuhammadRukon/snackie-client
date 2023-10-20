const AddProduct = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const brandName = e.target.brandName.value;
    const type = e.target.type.value;
    const price = Number(e.target.price.value);
    const rating = Number(e.target.rating.value);
    const description = e.target.description.value;
    if (brandName === "- Select Brand Name -") {
      console.log("please change brand");
      return;
    }
    const product = {
      photo,
      name,
      brandName,
      type,
      price,
      rating,
      description,
    };
    console.log(product);

    fetch("https://brand-server-iota.vercel.app/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // add a toast
        console.log("add a success toast");
        e.target.reset();
      });
  };
  return (
    <div className="p-20 pt-0">
      <div className="text-3xl font-extrabold text-center pt-5 pb-10">
        Add a Product
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                required
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select
              required
              defaultValue={"- Select Brand Name -"}
              name="brandName"
              className="select select-bordered focus:outline-none w-full "
            >
              <option disabled value={"- Select Brand Name -"}>
                - Select Brand Name -
              </option>
              <option value={"Akij Food & Beverage Ltd"}>
                Akij Food & Beverage Ltd
              </option>
              <option value={"Pran Foods"}>Pran Foods</option>
              <option value={"Pepsico"}>Pepsico</option>
              <option value={"The Cocacola Company"}>
                The Cocacola Company
              </option>
              <option value={"Ahmed Food Products Ltd"}>
                Ahmed Food Products Ltd
              </option>
              <option value={"Igloo bd"}>Igloo bd</option>
            </select>
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
                required
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
                required
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
              <span className="label-text">Photo URL</span>
            </label>
            <label>
              <input
                name="photo"
                type="text"
                required
                placeholder="Photo URL"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label>
              <input
                type="text"
                required
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
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
              required
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
