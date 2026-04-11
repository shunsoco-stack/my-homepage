import EcNavbar from "./components/EcNavbar";
import EcHero from "./components/EcHero";
import EcFeatures from "./components/EcFeatures";
import EcPricingContact from "./components/EcPricingContact";

export default function EcPage() {
  return (
    <div className="bg-white min-h-screen">
      <EcNavbar />
      <EcHero />
      <EcFeatures />
      <EcPricingContact />
      <footer className="bg-gray-950 py-8 text-center">
        <p className="text-xs text-white/20">&copy; 2024 StockSync. All rights reserved. &nbsp;|&nbsp; <span className="text-amber-500/60">Developed by Freelance.</span></p>
      </footer>
    </div>
  );
}
