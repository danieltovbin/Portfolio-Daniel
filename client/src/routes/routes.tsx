import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <PageNotFound /> },
]);
