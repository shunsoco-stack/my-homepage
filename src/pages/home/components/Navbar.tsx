import { useState, useEffect } from "react";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
  { label: "プロフィール", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
        scrolled ? "bg-white border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a
          href="#"
          className={`font-bold text-lg tracking-tight cursor-pointer ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          Freelance<span className="text-amber-500">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="ml-2 px-5 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            相談する
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-gray-700 font-medium text-sm cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 px-5 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold cursor-pointer whitespace-nowrap"
          >
            相談する
          </button>
        </div>
      )}
    </header>
  );
}
