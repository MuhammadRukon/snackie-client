import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";

const CartProduct = ({ data, handleCartUpdate }) => {
  const { user } = useContext(AuthContext);
  const handleDelete = () => {
    fetch(`http://localhost:5000/cart/delete/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productIds: data._id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleCartUpdate((prevVal) => !prevVal);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero xl:w-[60vw] 2xl:w-[50vw] px-5 lg:px-10 bg-gray-100 mb-8">
      <div className="hero-content w-full justify-start gap-20 flex-col lg:flex-row">
        <img src={data.photo} className="max-w-xs h-[200px] rounded-lg" />
        <div className="space-y-2 ">
          <h1 className="text-3xl font-bold mb-2">Product Name: {data.name}</h1>
          <p className="font-semibold text-lg  inline-block lg:text-center">
            Brand Name:{" "}
            <span className="bg-gray-300 px-2 rounded-md">
              {data.brandName}
            </span>
          </p>
          <p className="font-semibold text-lg">Type: {data.type}</p>

          <p className="font-bold">
            Price: {data.price}
            <span className="font-bold text-2xl">৳</span>
          </p>

          <div className="flex items-center mt-2 font-bold">
            <p>Rating: {data.rating}</p>
            <div className="text-yellow-500">
              <AiFillStar />
            </div>
          </div>

          <p className="pb-2 italic">{data.description}</p>
        </div>
        <div className="flex-1 text-right">
          <button onClick={handleDelete} className="btn btn-neutral">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
CartProduct.propTypes = {
  data: PropTypes.object,
  handleCartUpdate: PropTypes.func,
};
export default CartProduct;
