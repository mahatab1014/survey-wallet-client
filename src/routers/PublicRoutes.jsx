import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/ErrorPage/PageNotFound";
import SurveysDetails from "../pages/Surveys/SurveysDetails";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import AuthLayout from "../layouts/AuthLayout";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "survey/:id",
        element: <SurveysDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default PublicRoutes;
