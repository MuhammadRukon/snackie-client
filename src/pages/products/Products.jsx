import { useLoaderData } from "react-router-dom";
import Product from "../product/Product";

const Products = () => {
  const loadedDatas = useLoaderData();
  console.log(loadedDatas);

  return (
    <div>
      {loadedDatas.map((data) => (
        <Product key={data._id} data={data} />
      ))}
    </div>
  );
};

export default Products;
