import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";

const Testimonial = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="container mx-auto pt-14 mb-24">
      <h2 className="text-center mt-20 font-bold text-4xl md:text-5xl">
        Our Happy Clients
      </h2>
      <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full py-20">
          <div
            className={`card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 ${
              theme === "light" ? "bg-white" : "bg-gray-700"
            } drop-shadow-[0px_0px_30px_rgba(0,0,0,0.3)]`}
          >
            <figure className="w-full h-full md:w-[300px]">
              <img
                src="https://i.ibb.co/QQyvTZS/client1.jpg"
                className="rounded-lg h-full"
                alt=""
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Muhammad Rukon</h2>

              <p>
                I recently had the pleasure of making a purchase from this food
                and beverage website, and I am absolutely thrilled with my
                experience! From start to finish, it was a culinary delight.
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide4"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❮
            </a>
            <a
              href="#slide2"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full py-20">
          <div
            className={`card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 ${
              theme === "light" ? "bg-white" : "bg-gray-700"
            } drop-shadow-[0px_0px_30px_rgba(0,0,0,0.3)]`}
          >
            <figure className="w-full h-full  md:w-[300px]">
              <img
                src="https://i.ibb.co/bR4fWwR/client2.jpg"
                className="rounded-lg h-full"
                alt=""
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Anwar hossain</h2>

              <p>
                I recently had the pleasure of making a purchase from this food
                and beverage website, and I am absolutely thrilled with my
                experience! From start to finish, it was a culinary delight.
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide1"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❮
            </a>
            <a
              href="#slide3"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full py-20">
          className=
          {`btn btn-circle bg-white border-neutral ${
            theme === "light" ? "bg-white" : "bg-gray-700"
          }`}
          <div
            className={`card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 ${
              theme === "light" ? "bg-white" : "bg-gray-700"
            } drop-shadow-[0px_0px_30px_rgba(0,0,0,0.3)]`}
          >
            <figure className="w-full h-full md:w-[300px]">
              <img
                src="https://i.ibb.co/tPpbnX3/client3.jpg"
                className="rounded-lg h-full"
                alt=""
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Muhammad Rukon</h2>

              <p>
                I recently had the pleasure of making a purchase from this food
                and beverage website, and I am absolutely thrilled with my
                experience! From start to finish, it was a culinary delight.
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide2"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❮
            </a>
            <a
              href="#slide4"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full  py-20">
          <div
            className={`card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 ${
              theme === "light" ? "bg-white" : "bg-gray-700"
            } drop-shadow-[0px_0px_30px_rgba(0,0,0,0.3)]`}
          >
            <figure className="w-full h-full md:w-[300px]">
              <img
                src="https://i.ibb.co/f23hvF7/client4.jpg"
                className="rounded-lg h-full"
                alt="Movie"
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Muhammad Rukon</h2>

              <p>
                I recently had the pleasure of making a purchase from this food
                and beverage website, and I am absolutely thrilled with my
                experience! From start to finish, it was a culinary delight.
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide3"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❮
            </a>
            <a
              href="#slide1"
              className={`btn btn-circle bg-white border-neutral ${
                theme === "light" ? "bg-white" : "bg-gray-700"
              }`}
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
