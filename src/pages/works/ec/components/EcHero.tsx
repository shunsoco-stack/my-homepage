export default function EcHero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      <img
        src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20warehouse%20with%20organized%20shelves%2C%20inventory%20management%20technology%2C%20barcode%20scanners%2C%20logistics%20operations%2C%20clean%20industrial%20space%20with%20warm%20orange%20accent%20lighting%2C%20professional%20business%20photography%2C%20wide%20angle%20shot&width=1600&height=900&seq=ec-hero1&orientation=landscape"
        alt="StockSync EC在庫管理"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/40"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold mb-8">
            <i className="ri-store-2-line"></i>
            EC事業者向け 在庫管理SaaS
          </div>
          <h1 className="text-white font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            複数モールの在庫、<br />
            <span className="text-orange-400">一括で管理。</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Amazon・楽天・Yahoo!ショッピングなど主要ECモールの在庫を
            リアルタイムで一元管理。在庫切れ・過剰在庫を自動で防ぎます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => handleNav("#contact")} className="px-8 py-3.5 rounded-lg bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-rocket-line mr-2"></i>14日間無料で試す
            </button>
            <button onClick={() => handleNav("#features")} className="px-8 py-3.5 rounded-lg bg-white/15 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:bg-white/25 transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-play-circle-line mr-2"></i>機能を見る
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-8 mt-14">
            {[{ num: "98%", label: "在庫ミス削減率" }, { num: "500+", label: "導入ショップ数" }, { num: "3分", label: "平均セットアップ時間" }].map((s) => (
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
