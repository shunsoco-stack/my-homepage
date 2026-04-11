import WorksNavbar from "./components/WorksNavbar";
import WorksHero from "./components/WorksHero";
import WorksGrid from "./components/WorksGrid";

export default function WorksPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <WorksNavbar />
      <WorksHero />
      <WorksGrid />
      <footer className="bg-gray-900 border-t border-white/5 py-8 text-center">
        <p className="text-xs text-white/30">&copy; 2024 Freelance. All rights reserved.</p>
      </footer>
    </div>
  );
}
