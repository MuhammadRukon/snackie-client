import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Brands from "../../components/Brands";

const Home = () => {
  const loadedDatas = useLoaderData();
  return (
    <>
      <Banner />
      <Brands datas={loadedDatas} />
    </>
  );
};

export default Home;
