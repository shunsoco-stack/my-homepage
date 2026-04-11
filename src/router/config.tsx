import { RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/page";
import WorksPage from "@/pages/works/page";
import RestaurantPage from "@/pages/works/restaurant/page";
import RealEstatePage from "@/pages/works/realestate/page";
import SalonPage from "@/pages/works/salon/page";
import EcPage from "@/pages/works/ec/page";
import LawFirmPage from "@/pages/works/lawfirm/page";
import StartupPage from "@/pages/works/startup/page";
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
    path: "/works/restaurant",
    element: <RestaurantPage />,
  },
  {
    path: "/works/realestate",
    element: <RealEstatePage />,
  },
  {
    path: "/works/salon",
    element: <SalonPage />,
  },
  {
    path: "/works/ec",
    element: <EcPage />,
  },
  {
    path: "/works/lawfirm",
    element: <LawFirmPage />,
  },
  {
    path: "/works/startup",
    element: <StartupPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
