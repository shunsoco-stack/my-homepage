import { RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/page";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
