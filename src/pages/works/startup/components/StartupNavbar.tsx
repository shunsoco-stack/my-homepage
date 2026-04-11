import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "機能", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "導入事例", href: "#cases" },
  { label: "始める", href: "#cta" },
];

export default function StartupNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100" : "bg-transparent"}`}>
      <div className="px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/works" className={`flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${scrolled ? "text-gray-400 hover:text-gray-600" : "text-white/50 hover:text-white"}`}>
          <i className="ri-arrow-left-line"></i>実績一覧へ
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className={`font-black text-xl tracking-tight whitespace-nowrap ${scrolled ? "text-gray-900" : "text-white"}`}>
            flow<span className={scrolled ? "text-indigo-500" : "text-indigo-300"}>AI</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"}`}>{item.label}</button>
          ))}
          <button onClick={() => handleNav("#cta")} className={`ml-2 px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${scrolled ? "bg-indigo-500 text-white hover:bg-indigo-600" : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"}`}>
            無料で始める
          </button>
        </nav>
        <button className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${scrolled ? "text-gray-900" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="text-left text-gray-700 font-medium text-sm cursor-pointer whitespace-nowrap">{item.label}</button>
          ))}
          <button onClick={() => handleNav("#cta")} className="mt-2 px-5 py-2.5 rounded-lg bg-indigo-500 text-white text-sm font-bold cursor-pointer whitespace-nowrap">無料で始める</button>
        </div>
      )}
    </header>
  );
}
