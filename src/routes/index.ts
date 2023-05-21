import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";

const path = import.meta.env.BASE_URL;

const routes: RouteObject[] = [
  {
    path,
    Component: Home,
  }
];

export default createBrowserRouter(routes);