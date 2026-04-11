import StartupNavbar from "./components/StartupNavbar";
import StartupHero from "./components/StartupHero";
import StartupFeatures from "./components/StartupFeatures";
import StartupPricing from "./components/StartupPricing";
import StartupCases from "./components/StartupCases";
import StartupCta from "./components/StartupCta";

export default function StartupPage() {
  return (
    <div className="bg-white min-h-screen">
      <StartupNavbar />
      <StartupHero />
      <StartupFeatures />
      <StartupPricing />
      <StartupCases />
      <StartupCta />
      <footer className="bg-gray-950 py-8 text-center">
        <p className="text-xs text-white/20">&copy; 2024 flowAI. All rights reserved. &nbsp;|&nbsp; <span className="text-amber-500/60">Developed by Freelance.</span></p>
      </footer>
    </div>
  );
}
