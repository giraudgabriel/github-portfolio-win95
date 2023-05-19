import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";


const routes: RouteObject[] = [
  {
    path: "/github-portfolio-win95",
    Component: Home,
  }
];

export default createBrowserRouter(routes);