import RestaurantNavbar from "./components/RestaurantNavbar";
import RestaurantHero from "./components/RestaurantHero";
import RestaurantConcept from "./components/RestaurantConcept";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantStores from "./components/RestaurantStores";
import RestaurantReservation from "./components/RestaurantReservation";
import RestaurantFooter from "./components/RestaurantFooter";

export default function RestaurantPage() {
  return (
    <div className="bg-white min-h-screen">
      <RestaurantNavbar />
      <RestaurantHero />
      <RestaurantConcept />
      <RestaurantMenu />
      <RestaurantStores />
      <RestaurantReservation />
      <RestaurantFooter />
    </div>
  );
}
