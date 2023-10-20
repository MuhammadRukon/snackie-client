import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";
const ProductDetails = () => {
  const [cartItems, setCartItems] = useState(null);
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://brand-server-iota.vercel.app/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.log(error.message));
    };
    fetchData();
  }, []);

  const data = loadedData[0];

  const handleAddToCart = () => {
    for (const item of cartItems) {
      const productIds = item.productId;
      const exists = productIds.find((id) => id === data._id);
      if (exists) {
        toast.error("already added", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      } else {
        fetch(`https://brand-server-iota.vercel.app/cart/${user.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ productIds: data._id }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            fetch(`https://brand-server-iota.vercel.app/users/${user.email}`)
              .then((res) => res.json())
              .then((data) => setCartItems(data))
              .catch((error) => console.log(error.message));
            toast.success("Successfully added to cart", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })

          .catch((error) => console.log(error.message));
      }
    }
  };
  return (
    <div className="hero xl:h-[70vh] bg-gray-100">
      <div className="hero-content w-full justify-start gap-20 flex-col lg:flex-row">
        <img src={data.photo} className="max-w-sm rounded-lg" />
        <div className="space-y-3 ">
          <h1 className="text-5xl font-bold mb-2">Product Name: {data.name}</h1>
          <p className="font-semibold text-xl  inline-block text-center">
            Brand Name:{" "}
            <span className="bg-gray-300 px-2 rounded-md">
              {data.brandName}
            </span>
          </p>
          <p className="font-semibold text-lg">Type: {data.type}</p>

          <p className="font-bold">
            Price: {data.price}
            <span className="font-bold text-2xl">৳</span>
          </p>

          <div className="flex items-center mt-2 font-bold">
            <p>Rating: {data.rating}</p>
            <div className="text-yellow-500">
              <AiFillStar />
            </div>
          </div>

          <p className="pb-2 italic">{data.description}</p>
          <button onClick={handleAddToCart} className="btn btn-neutral">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
