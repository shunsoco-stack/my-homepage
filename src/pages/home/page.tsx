import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Works />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
