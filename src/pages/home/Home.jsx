import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Brands from "../../components/Brands";
import Testimonial from "../../components/Testimonial";
import GetInTouch from "../../components/GetInTouch";

const Home = () => {
  const loadedDatas = useLoaderData();
  return (
    <>
      <Banner />
      <Brands datas={loadedDatas} />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default Home;
