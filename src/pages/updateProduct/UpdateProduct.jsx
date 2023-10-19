import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  const data = loadedData[0];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const brandName = e.target.brandName.value;
    const type = e.target.type.value;
    const price = Number(e.target.price.value);
    const rating = Number(e.target.rating.value);
    const updateInfo = { photo, name, rating, price, type, brandName };
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
                defaultValue={data.name}
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select
              defaultValue={data.brandName}
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
                defaultValue={data.price}
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
                defaultValue={data.type}
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
                defaultValue={data.photo}
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
                defaultValue={data.rating}
                className="input input-bordered w-full focus:outline-none"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="btn btn-neutral mt-7 w-full"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
