import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandCard = ({ data }) => {
  return (
    <div className="card bg-base-100 drop-shadow-[0_0_30px_rgba(0,0,0,0.24)]">
      <figure className="p-28 h-64">
        <img
          src={data.brandImage}
          alt="Shoes"
          className="rounded-xl object-cover w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl capitalize mb-3">
          {data.brandName}
        </h2>
        <div className="card-actions">
          <Link to={`/products/${data.brandName}`} className="btn btn-neutral">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};
BrandCard.propTypes = {
  data: PropTypes.object,
};
export default BrandCard;
