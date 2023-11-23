import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Hello Worlds</h1>,
      },
    ],
  },
]);

export default PublicRoutes;
