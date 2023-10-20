import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { auth } from "../firebase/firebase.config";
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser(auth)
      .then(() => console.log("logged out succesfully with toast"))
      .catch((error) => console.log(error.message));
  };
  const [toggle, setToggle] = useState(true);
  let theme;
  if (toggle) {
    theme = "light";
  } else {
    theme = "dark";
  }

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar py-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center normal-case text-3xl italic font-bold"
        >
          <div className="w-[40px]">
            <img
              className=""
              src="https://i.ibb.co/4sqQkb2/pngegg.png"
              alt=""
            />
          </div>
          <span className="hidden md:inline-block">Snackie</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="navbar-end w-full md:w-[50%] gap-2">
        <span className=" text-lg">{user ? user.displayName : "user"}</span>
        <div className=" w-[45px] h-[45px] rounded-full overflow-hidden">
          <img
            src={
              user ? user.photoURL : "https://i.ibb.co/n7d6gxh/pngwing-com.png"
            }
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {user ? (
          <button onClick={handleLogout} className="btn">
            logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            login
          </Link>
        )}
        <button
          title={theme === "light" ? "switch to dark" : "switch to light"}
          onClick={() => {
            setToggle(!toggle);
          }}
          className="text-4xl mb-1"
        >
          {theme === "light" ? "🌚" : "🌞"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
