import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import OwnerDashboard from "../Pages/OwnerDashboard/OwnerDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "owner_dashboard",
        element: <OwnerDashboard />,
      },
    ],
  },
]);

export default router;
