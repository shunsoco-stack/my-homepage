const navItems = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
  { label: "プロフィール", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-amber-50 border-t border-amber-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="text-xl font-black text-gray-900 mb-3">
              Freelance<span className="text-amber-500">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              ホームページ・LP制作から業務効率化システムまで、
              ビジネスの成長を技術でサポートします。
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://github.com" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer">
                <i className="ri-github-line text-sm"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-sm"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-sm"></i>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-widest mb-4">MENU</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white max-w-xs">
            <p className="text-sm font-bold mb-2">まずは無料相談から</p>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              お気軽にご連絡ください。
              <br />
              24時間以内にご返信します。
            </p>
            <button
              onClick={() => handleNav("#contact")}
              className="w-full py-2.5 rounded-full bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              お問い合わせ
              <i className="ri-arrow-right-line ml-1"></i>
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">&copy; 2024 Freelance. All rights reserved.</p>
          <p className="text-xs text-gray-400">東京都 / フリーランス Webエンジニア・デザイナー</p>
        </div>
      </div>
    </footer>
  );
}
