import SalonNavbar from "./components/SalonNavbar";
import SalonHero from "./components/SalonHero";
import SalonServices from "./components/SalonServices";
import SalonStylists from "./components/SalonStylists";
import SalonReviews from "./components/SalonReviews";
import SalonReservation from "./components/SalonReservation";
import SalonFooter from "./components/SalonFooter";

export default function SalonPage() {
  return (
    <div className="bg-white min-h-screen">
      <SalonNavbar />
      <SalonHero />
      <SalonServices />
      <SalonStylists />
      <SalonReviews />
      <SalonReservation />
      <SalonFooter />
    </div>
  );
}
