const navItems = [
  { label: "サービス", href: "#services" },
  { label: "スタイリスト", href: "#stylists" },
  { label: "お客様の声", href: "#reviews" },
  { label: "ご予約", href: "#reservation" },
];

export default function SalonFooter() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black tracking-[0.2em] mb-4">FLEUR</div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              表参道の隠れ家ヘアサロン。<br />
              あなただけの美しさを引き出す、<br />
              丁寧なスタイル提案をお届けします。
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-700 text-stone-400 hover:text-white hover:bg-rose-400 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-700 text-stone-400 hover:text-white hover:bg-stone-600 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://line.me" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-700 text-stone-400 hover:text-white hover:bg-green-500 transition-colors cursor-pointer">
                <i className="ri-line-line"></i>
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-stone-500 tracking-widest mb-5">MENU</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-sm text-stone-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold text-stone-500 tracking-widest mb-5">SALON INFO</p>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-rose-400 mt-0.5 shrink-0"></i>
                <span>東京都渋谷区神宮前5-1-1<br />表参道駅 A5出口 徒歩3分</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-rose-400 shrink-0"></i>
                <span>03-5678-9012</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-time-line text-rose-400 shrink-0"></i>
                <span>10:00〜20:00（火曜定休）</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">&copy; 2024 FLEUR Beauty Salon. All rights reserved.</p>
          <p className="text-xs text-stone-600">
            <span className="text-stone-500">Designed &amp; Developed by </span>
            <span className="text-amber-500">Freelance.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
