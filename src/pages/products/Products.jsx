import { useLoaderData, useParams } from "react-router-dom";
import Product from "../product/Product";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const Products = () => {
  const loadedDatas = useLoaderData();
  const { brandName } = useParams();
  const [brand, setBrand] = useState([]);
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <button
  //     {...props}
  //     className={
  //       "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === 0 ? true : false}
  //     type="button"
  //   >
  //     Previous
  //   </button>
  // );
  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  //   <button
  //     {...props}
  //     className={
  //       "slick-next slick-arrow" +
  //       (currentSlide === slideCount - 1 ? " slick-disabled" : "")
  //     }
  //     style={{ color: "red", background: "black" }}
  //     aria-disabled={currentSlide === slideCount - 1 ? true : false}
  //   ></button>
  // );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2300,
    // nextArrow: <SlickArrowRight />,
    // prevArrow: <SlickArrowLeft />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchBrands = async () => {
      fetch(`https://brand-server-iota.vercel.app/brands/${brandName}`)
        .then((res) => res.json())
        .then((data) => {
          setBrand(data);
        });
    };
    fetchBrands();
  }, []);

  return (
    <>
      <div className="px-10 2xl:px-0">
        <Slider {...settings} prevArrow={<GrPrevious />} nextArrow={<GrNext />}>
          {loadedDatas.length
            ? brand[0]?.advertise?.map((data, index) => (
                <div
                  key={index}
                  className="overflow-hidden h-[200px] xl:h-[700px]"
                >
                  <img
                    src={data}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            : ""}
        </Slider>
      </div>
      {loadedDatas.length ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-4  gap-5 px-10 2xl:px-0 mt-10">
          {loadedDatas.length &&
            loadedDatas.map((data) => <Product key={data._id} data={data} />)}
        </div>
      ) : (
        <div className="h-[70vh] w-full flex flex-col gap-10 items-center justify-center">
          <h2 className="text-6xl">
            No data found 😓
            <br />
          </h2>
          <h2 className="text-lg">
            Add a product of this brand to see <strong>advertisements</strong>{" "}
            and <strong>products</strong>.
          </h2>
        </div>
      )}
    </>
  );
};

export default Products;
