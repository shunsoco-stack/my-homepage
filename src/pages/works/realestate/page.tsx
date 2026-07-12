import RealEstateNavbar from "./components/RealEstateNavbar";
import RealEstateHero from "./components/RealEstateHero";
import RealEstateFeatures from "./components/RealEstateFeatures";
import RealEstateResults from "./components/RealEstateResults";
import RealEstatePricing from "./components/RealEstatePricing";
import RealEstateContact from "./components/RealEstateContact";

export default function RealEstatePage() {
  return (
    <div className="bg-white min-h-screen">
      <RealEstateNavbar />
      <RealEstateHero />
      <RealEstateFeatures />
      <RealEstateResults />
      <RealEstatePricing />
      <RealEstateContact />
      <footer className="bg-slate-950 py-8 text-center">
        <p className="text-xs text-white/20">&copy; 2024 PropBase. All rights reserved. &nbsp;|&nbsp; <span className="text-amber-500/60">Developed by Freelance.</span> &nbsp;|&nbsp; ※本サイトはポートフォリオ用のデモです</p>
      </footer>
    </div>
  );
}
