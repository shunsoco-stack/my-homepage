import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "スタイリスト", href: "#stylists" },
  { label: "お客様の声", href: "#reviews" },
  { label: "ご予約", href: "#reservation" },
];

export default function SalonNavbar() {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-rose-50" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 flex items-center justify-between h-16">
        <Link
          to="/works"
          className={`flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
            scrolled ? "text-rose-300 hover:text-rose-500" : "text-white/50 hover:text-white"
          }`}
        >
          <i className="ri-arrow-left-line"></i>
          実績一覧へ
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className={`font-black text-xl tracking-[0.2em] cursor-pointer whitespace-nowrap transition-colors ${
              scrolled ? "text-stone-800" : "text-white"
            }`}
          >
            FLEUR
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                scrolled ? "text-stone-500 hover:text-stone-800" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#reservation")}
            className={`ml-2 px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              scrolled
                ? "bg-rose-400 text-white hover:bg-rose-500"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            予約する
          </button>
        </nav>

        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${
            scrolled ? "text-stone-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-rose-50 px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-stone-600 font-medium text-sm cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#reservation")}
            className="mt-2 px-5 py-2.5 rounded-full bg-rose-400 text-white text-sm font-bold cursor-pointer whitespace-nowrap"
          >
            予約する
          </button>
        </div>
      )}
    </header>
  );
}
