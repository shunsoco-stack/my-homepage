import { RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/page";
import WorksPage from "@/pages/works/page";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/works",
    element: <WorksPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
