import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "機能紹介", href: "#features" },
  { label: "導入効果", href: "#results" },
  { label: "料金プラン", href: "#pricing" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function RealEstateNavbar() {
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 flex items-center justify-between h-16">
        <Link
          to="/works"
          className={`flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
            scrolled ? "text-slate-400 hover:text-slate-600" : "text-white/60 hover:text-white"
          }`}
        >
          <i className="ri-arrow-left-line"></i>
          実績一覧へ
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className={`w-7 h-7 flex items-center justify-center rounded-lg ${scrolled ? "bg-emerald-600" : "bg-white/20"}`}>
            <i className={`ri-building-2-line text-sm ${scrolled ? "text-white" : "text-white"}`}></i>
          </div>
          <span className={`font-black text-lg tracking-tight whitespace-nowrap ${scrolled ? "text-slate-900" : "text-white"}`}>
            PropBase
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className={`ml-2 px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              scrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            無料デモを見る
          </button>
        </nav>

        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-slate-700 font-medium text-sm cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-bold cursor-pointer whitespace-nowrap"
          >
            無料デモを見る
          </button>
        </div>
      )}
    </header>
  );
}
