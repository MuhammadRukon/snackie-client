import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-5 pt-5 h-[350px]">
        <img
          src={data.photo}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-2 pb-8 items-center text-center">
        <h2 className="card-title text-2xl font-bold">{data.name}</h2>
        <div className="space-y-2">
          <p className="bg-gray-300 px-2 rounded-md font-bold">
            {data.brandName}
          </p>
          <p className="bg-gray-300 px-2 rounded-md">{data.type}</p>
        </div>
        <div className="space-y-1">
          <p className="font-bold">
            {data.price}
            <span className="font-bold text-2xl">৳</span>
          </p>
          <div>
            <div className="flex items-center font-bold">
              <p>{data.rating}</p>

              <div className="text-yellow-500">
                <AiFillStar />
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/details/${data._id}`} className="btn btn-neutral">
            Details
          </Link>
          <Link to={`/update/${data._id}`} className="btn btn-neutral">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  data: PropTypes.object,
};
export default Product;
