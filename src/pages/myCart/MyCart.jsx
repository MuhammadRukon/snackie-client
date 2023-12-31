import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import CartProduct from "../../components/CartProduct";
import Loading from "../../components/Loading";

const MyCart = () => {
  const cartProducts = [];
  const [effect, setEffect] = useState(true);

  const loadedData = useLoaderData();
  const [cartProductId, setCartProductId] = useState(null);
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://brand-server-iota.vercel.app/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCartProductId(data[0]?.productId))
        .catch((error) => console.log(error.message));
    };
    fetchData();
  }, [user.email, effect]);
  if (cartProductId) {
    for (const id of cartProductId) {
      const product = loadedData.find((data) => data._id === id);
      cartProducts.push(product);
    }
  }
  return (
    <div className="px-10 lg:px-0">
      <h2 className="text-center mt-10 mb-10 lg:mb-20 lg:mt-20 font-bold text-4xl md:text-5xl">
        My Cart
      </h2>
      {loading ? (
        <Loading />
      ) : cartProducts.length ? (
        cartProducts.map((product, index) => (
          <CartProduct
            key={index}
            handleCartUpdate={setEffect}
            data={product}
          />
        ))
      ) : (
        <div className=" h-[70vh] w-full flex flex-col gap-5 items-center justify-center">
          <h2 className="text-3xl font-bold">Cart Empty!</h2>
          <Link className="btn btn-neutral" to="/">
            Add Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCart;
