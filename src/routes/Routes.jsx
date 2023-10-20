import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCart from "../pages/myCart/MyCart";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/productDetails/ProductDetails";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import Error from "../pages/error/Error";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://brand-server-iota.vercel.app/brands"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brandName",
        element: <Products />,
        loader: ({ params }) =>
          fetch(
            `https://brand-server-iota.vercel.app/products/${params.brandName}`
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-server-iota.vercel.app/allproducts"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-server-iota.vercel.app/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-server-iota.vercel.app/details/${params.id}`),
      },
    ],
  },
]);
