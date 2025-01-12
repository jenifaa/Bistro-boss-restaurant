import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/OrderFood/Order";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import DashBoard from "../Main/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/DashBoard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
