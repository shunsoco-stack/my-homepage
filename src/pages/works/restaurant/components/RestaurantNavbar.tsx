import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "コンセプト", href: "#concept" },
  { label: "メニュー", href: "#menu" },
  { label: "店舗一覧", href: "#stores" },
  { label: "ご予約", href: "#reservation" },
];

export default function RestaurantNavbar() {
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
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-stone-100" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 flex items-center justify-between h-18 py-4">
        <Link
          to="/works"
          className={`flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
            scrolled ? "text-stone-400 hover:text-stone-600" : "text-white/60 hover:text-white"
          }`}
        >
          <i className="ri-arrow-left-line"></i>
          実績一覧へ
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className={`font-black text-xl tracking-widest cursor-pointer whitespace-nowrap transition-colors ${
              scrolled ? "text-stone-900" : "text-white"
            }`}
          >
            UMAMI<span className={scrolled ? "text-red-600" : "text-red-400"}>.</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                scrolled ? "text-stone-600 hover:text-stone-900" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#reservation")}
            className={`ml-2 px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              scrolled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            予約する
          </button>
        </nav>

        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${
            scrolled ? "text-stone-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-stone-700 font-medium text-sm cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#reservation")}
            className="mt-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-bold cursor-pointer whitespace-nowrap"
          >
            予約する
          </button>
        </div>
      )}
    </header>
  );
}
