import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

const Brands = ({ datas }) => {
  return (
    <>
      <h2 className="text-center mt-20 font-bold text-4xl md:text-5xl">
        Our Brands
      </h2>
      <div className="grid gap-14 px-10 lg:px-0 mt-20 lg:grid-cols-3">
        {datas.map((data) => (
          <BrandCard key={data._id} data={data} />
        ))}
      </div>
    </>
  );
};
Brands.propTypes = {
  datas: PropTypes.array,
};
export default Brands;
