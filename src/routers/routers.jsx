import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout/Layout";
import Home from "../pages/Home/Home";
import ListProducts from "../components/Products/ListProducts";
import Login from "../pages/Login/Login";
import Cart from "../components/Layout/Cart/Cart";
import Order from "../components/Layout/Cart/Order/Order";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Detail from "../pages/ProductDetail/Detail";
import PrivateRouter from "./PrivateRouter";
import Heart from "../pages/Heart/Heart";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/Blog";
import DetailBog from "../pages/Blog/DetailBog";
import BlogAoutlet from "../pages/Blog/BlogAoutlet";
import ChangePasswordPage from "../pages/Login/ChangePasswordPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <ListProducts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/change-password",
        element: <ChangePasswordPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog",
        element: <BlogAoutlet />,
        children: [
          {
            path: ":id",
            element: <DetailBog />,
          },
        ],
      },

      {
        path: "/heart",
        element: <PrivateRouter></PrivateRouter>,
        children: [
          {
            path: "",
            element: <Heart />,
          },
        ],
      },

      {
        path: "/cart",
        element: <PrivateRouter></PrivateRouter>,
        children: [
          {
            path: "",
            element: <Cart />,
          },
        ],
      },

      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/detail",
        element: <Detail />,
        children: [
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
