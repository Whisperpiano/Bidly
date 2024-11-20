import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Explore from "../pages/Explore";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/Error";
import SingleItem from "../pages/SingleItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/listing/:name",
        element: <SingleItem />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
