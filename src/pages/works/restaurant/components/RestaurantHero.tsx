export default function RestaurantHero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=upscale%20Japanese%20restaurant%20interior%20with%20warm%20ambient%20lighting%2C%20wooden%20tables%2C%20elegant%20minimalist%20decor%2C%20soft%20bokeh%20background%2C%20premium%20dining%20atmosphere%2C%20dark%20moody%20tones%20with%20golden%20accents%2C%20high-end%20food%20photography%20style%2C%20cinematic%20wide%20shot&width=1600&height=900&seq=restaurant-hero1&orientation=landscape"
        alt="UMAMI レストランメインビジュアル"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-red-400 text-xs font-bold tracking-[0.4em] uppercase mb-6 animate-pulse">
          Since 2008 &nbsp;·&nbsp; 全国15店舗展開
        </p>
        <h1 className="text-white font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6">
          UMAMI
          <span className="block text-2xl md:text-3xl font-light tracking-[0.3em] mt-3 text-white/80">
            うまみ食堂
          </span>
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          素材の旨みを最大限に引き出す、<br className="hidden md:block" />
          日本の食文化を現代に伝える本格和食チェーン。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleNav("#reservation")}
            className="px-8 py-3.5 rounded-full bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-calendar-line mr-2"></i>
            ご予約はこちら
          </button>
          <button
            onClick={() => handleNav("#menu")}
            className="px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:bg-white/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-restaurant-line mr-2"></i>
            メニューを見る
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
}
