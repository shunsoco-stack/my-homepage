export default function LawHero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      <img
        src="https://readdy.ai/api/search-image?query=prestigious%20Japanese%20law%20firm%20office%20interior%2C%20elegant%20dark%20wood%20paneling%2C%20bookshelves%20with%20law%20books%2C%20sophisticated%20conference%20room%2C%20professional%20and%20trustworthy%20atmosphere%2C%20dark%20navy%20and%20gold%20tones%2C%20cinematic%20wide%20angle%20photography%2C%20high-end%20corporate%20environment&width=1600&height=900&seq=law-hero1&orientation=landscape"
        alt="宮本法律事務所"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/92 via-gray-950/75 to-gray-950/30"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-px h-10 bg-amber-500"></div>
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">Since 1998 &nbsp;·&nbsp; 東京・大阪</p>
          </div>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-6">
            あなたの権利を、<br />
            <span className="text-amber-400">全力で守ります。</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            宮本法律事務所は創業26年、企業法務・相続・労働問題など
            幅広い分野で3,000件以上の解決実績を持つ総合法律事務所です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => handleNav("#contact")} className="px-8 py-3.5 rounded bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>無料相談を予約する
            </button>
            <button onClick={() => handleNav("#services")} className="px-8 py-3.5 rounded bg-white/15 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:bg-white/25 transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-file-list-3-line mr-2"></i>業務内容を見る
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-8 mt-14">
            {[{ num: "3,000+", label: "解決実績" }, { num: "26年", label: "創業年数" }, { num: "98%", label: "顧客満足度" }].map((s) => (
              <div key={s.label}>
                <p className="text-white font-black text-3xl">{s.num}</p>
                <p className="text-white/50 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
