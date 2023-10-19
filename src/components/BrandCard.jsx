import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandCard = ({ data }) => {
  return (
    <Link
      to={`/products/${data.brandName}`}
      className="card bg-base-100 hover:scale-[1.02] transition-all drop-shadow-[0_0_15px_rgba(0,0,0,0.24)]"
    >
      <figure className=" p-20 lg:h-64">
        <img
          src={data.brandImage}
          alt="Shoes"
          className="rounded-xl  w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl capitalize mb-3">
          {data.brandName}
        </h2>
      </div>
    </Link>
  );
};
BrandCard.propTypes = {
  data: PropTypes.object,
};
export default BrandCard;
