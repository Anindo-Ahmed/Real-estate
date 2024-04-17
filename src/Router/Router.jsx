import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import Faq from "../Pages/FAQ/Faq";
import UpdateProfile from "../Pages/Updateprofile/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('residential.json')
        },
        {
            path: "/profile",
            element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
        },
        {
            path: "/home/:id",
            element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/faq",
          element: <PrivateRoutes><Faq></Faq></PrivateRoutes>
        }

      ]
    }
  ]);

export default router;