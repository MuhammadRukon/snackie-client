import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const ProductDetails = () => {
  const loadedData = useLoaderData();
  const data = loadedData[0];
  return (
    <div className="hero h-[70vh] bg-gray-100 ">
      <div className="hero-content w-full justify-start gap-20 flex-col lg:flex-row">
        <img src={data.photo} className="max-w-sm rounded-lg" />
        <div className="space-y-3 ">
          <h1 className="text-5xl font-bold mb-2">{data.name}</h1>
          <p className="font-semibold text-xl  inline-block px-2 bg-gray-300 text-center rounded-md">
            {data.brandName}
          </p>
          <p className="font-semibold text-lg ml-1">{data.type}</p>

          <div className="flex items-center gap-4">
            <p className="font-bold">
              {data.price}
              <span className="font-bold text-2xl">৳</span>
            </p>

            <div className="flex items-center mt-2 font-bold">
              <p>{data.rating}</p>
              <div className="text-yellow-500">
                <AiFillStar />
              </div>
            </div>
          </div>
          <p className="pb-2 italic">{data.description}</p>
          <button className="btn btn-neutral">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
