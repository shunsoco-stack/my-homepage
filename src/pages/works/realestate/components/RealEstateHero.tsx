export default function RealEstateHero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      <img
        src="https://readdy.ai/api/search-image?query=modern%20real%20estate%20office%20interior%20with%20large%20windows%2C%20city%20skyline%20view%2C%20sleek%20contemporary%20workspace%20with%20computers%20showing%20property%20listings%2C%20professional%20business%20environment%2C%20dark%20navy%20and%20emerald%20green%20tones%2C%20cinematic%20wide%20angle%20shot%2C%20high%20quality%20architectural%20photography&width=1600&height=900&seq=realestate-hero1&orientation=landscape"
        alt="PropBase 不動産管理システム"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-8">
            <i className="ri-shield-check-line"></i>
            不動産会社向け 物件管理SaaS
          </div>
          <h1 className="text-white font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            物件管理を、<br />
            <span className="text-emerald-400">もっとスマートに。</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            PropBaseは不動産会社の物件情報管理・公開・顧客対応を一元化するクラウドシステムです。
            導入企業のスタッフ作業時間を平均<strong className="text-white">70%削減</strong>しました。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleNav("#features")}
              className="px-8 py-3.5 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-play-circle-line mr-2"></i>
              機能を見る
            </button>
            <button
              onClick={() => handleNav("#contact")}
              className="px-8 py-3.5 rounded-lg bg-white/15 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:bg-white/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-line mr-2"></i>
              無料デモを申し込む
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-14">
            {[
              { num: "70%", label: "作業時間削減" },
              { num: "150+", label: "導入企業数" },
              { num: "99.9%", label: "稼働率" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-black text-3xl">{stat.num}</p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
