import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCart from "../pages/myCart/MyCart";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>error! oopsie</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/products/:brandName",
        element: <Products />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brandName}`),
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
