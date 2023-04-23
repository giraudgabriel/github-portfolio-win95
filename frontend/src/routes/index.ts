import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import React from "react";

const routes = [
  {
    path: "/",
    element: Home,
  }
];

const brownserRoutes = routes.map((route) => ({
  ...route,
  element: React.createElement(route.element),
}));

export default createBrowserRouter(brownserRoutes);