import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import CartProduct from "../../components/CartProduct";

const MyCart = () => {
  const cartProducts = [];
  const [effect, setEffect] = useState(true);

  const loadedData = useLoaderData();
  const [cartProductId, setCartProductId] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:5000/users/${user.email}`)
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
    <div>
      {cartProducts.length ? (
        cartProducts.map((product) => (
          <CartProduct
            key={product._id}
            handleCartUpdate={setEffect}
            data={product}
          />
        ))
      ) : (
        <div className="h-[70vh] w-full flex flex-col gap-5 items-center justify-center">
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
