import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function WorksNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link
          to="/"
          className={`font-bold text-lg tracking-tight cursor-pointer whitespace-nowrap ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Freelance<span className="text-amber-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/#services"
            className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
            }`}
          >
            サービス
          </Link>
          <Link
            to="/works"
            className={`text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              scrolled ? "text-amber-500" : "text-amber-400"
            }`}
          >
            実績
          </Link>
          <Link
            to="/#profile"
            className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
            }`}
          >
            プロフィール
          </Link>
          <Link
            to="/#contact"
            className="ml-2 px-5 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            相談する
          </Link>
        </nav>

        <Link
          to="/"
          className={`md:hidden flex items-center gap-1.5 text-sm font-medium cursor-pointer whitespace-nowrap ${
            scrolled ? "text-gray-600" : "text-white/80"
          }`}
        >
          <i className="ri-arrow-left-line"></i>
          戻る
        </Link>
      </div>
    </header>
  );
}
