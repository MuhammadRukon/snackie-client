import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

const Brands = ({ datas }) => {
  return (
    <div className="grid gap-14 mt-20 md:grid-cols-3">
      {datas.map((data) => (
        <BrandCard key={data._id} data={data} />
      ))}
    </div>
  );
};
Brands.propTypes = {
  datas: PropTypes.array,
};
export default Brands;
