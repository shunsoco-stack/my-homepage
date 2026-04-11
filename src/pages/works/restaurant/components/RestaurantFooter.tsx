const navItems = [
  { label: "コンセプト", href: "#concept" },
  { label: "メニュー", href: "#menu" },
  { label: "店舗一覧", href: "#stores" },
  { label: "ご予約", href: "#reservation" },
];

export default function RestaurantFooter() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black tracking-widest mb-4">
              UMAMI<span className="text-red-500">.</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              素材の旨みを最大限に引き出す、<br />
              日本の食文化を現代に伝える本格和食チェーン。<br />
              全国15店舗展開中。
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer">
                <i className="ri-facebook-line"></i>
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
            <p className="text-xs font-bold text-stone-500 tracking-widest mb-5">CONTACT</p>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-red-500"></i>
                <span>03-1234-5678（代表）</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-red-500"></i>
                <span>info@umami-shokudo.jp</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-time-line text-red-500 mt-0.5"></i>
                <span>11:00〜23:00<br />（店舗により異なります）</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">&copy; 2024 UMAMI うまみ食堂. All rights reserved.</p>
          <p className="text-xs text-stone-600">
            <span className="text-stone-500">Designed &amp; Developed by </span>
            <span className="text-amber-500">Freelance.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
