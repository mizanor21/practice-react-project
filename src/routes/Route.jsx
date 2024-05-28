import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/HomePages/Home";
import About from "../components/OthersPages/About";
import Contact from "../components/OthersPages/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import PrivetRoute from "./PrivetRoute";
import ProductDetails from "../components/HomePages/ProductDetails";
import AllProduct from "../components/Dashboard/AllProduct";
import DashHome from "../components/Dashboard/DashHome";
import AddProduct from "../components/Dashboard/AddProduct";
import EditProduct from "../components/Dashboard/EditProduct";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/products"),
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/all-product",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <EditProduct></EditProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
