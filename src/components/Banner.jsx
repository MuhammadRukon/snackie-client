import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(https://i.ibb.co/3fC64KV/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-48 text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-6xl font-bold ">Satisfy Cravings</h1>
          <p className="mb-5 text-lg w-[70%] mx-auto">
            Discover a world of flavors and refreshment on our food and beverage
            website, where every sip and bite is a delightful experience.
          </p>
          {!user && (
            <Link to="/register" className="btn btn-neutral">
              Register Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
