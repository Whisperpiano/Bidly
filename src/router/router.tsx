import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/Error";
import SingleItem from "../pages/SingleItem";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import SearchListings from "../components/search/SearchListings";
import SearchUsers from "../components/search/SearchUsers";
import { ProtectedRoute } from "./ProtectedRoute";

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
        element: <ProtectedRoute element={<Create />} redirectTo="/home" />,
      },
      {
        path: "/listing/:name",
        element: <SingleItem />,
      },
      {
        path: "/profile/:username",
        element: <ProtectedRoute element={<Profile />} redirectTo="/home" />,
      },

      {
        path: "/search",
        element: <Search />,
        children: [
          {
            path: "/search",
            element: <Navigate to="/search/listings/all" replace />,
          },
          {
            path: "listings",
            element: <Navigate to="/search/listings/all" replace />,
          },
          {
            path: "users",
            element: <Navigate to="/search/users/all" replace />,
          },
          {
            path: "listings/:query?",
            element: <SearchListings />,
          },
          {
            path: "users/:query?",
            element: <SearchUsers />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
