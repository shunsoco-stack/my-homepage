import LawNavbar from "./components/LawNavbar";
import LawHero from "./components/LawHero";
import LawServices from "./components/LawServices";
import LawAttorneys from "./components/LawAttorneys";
import LawResults from "./components/LawResults";
import LawContact from "./components/LawContact";

export default function LawFirmPage() {
  return (
    <div className="bg-white min-h-screen">
      <LawNavbar />
      <LawHero />
      <LawServices />
      <LawAttorneys />
      <LawResults />
      <LawContact />
      <footer className="bg-gray-950 py-8 text-center">
        <p className="text-xs text-white/20">&copy; 2024 宮本法律事務所. All rights reserved. &nbsp;|&nbsp; <span className="text-amber-500/60">Developed by Freelance.</span></p>
      </footer>
    </div>
  );
}
