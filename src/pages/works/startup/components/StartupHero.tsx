export default function StartupHero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-gray-950">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20technology%20background%20with%20flowing%20data%20streams%2C%20neural%20network%20visualization%2C%20glowing%20indigo%20and%20violet%20light%20trails%20on%20dark%20background%2C%20futuristic%20AI%20concept%20art%2C%20digital%20transformation%2C%20cinematic%20sci-fi%20aesthetic%2C%20ultra%20wide&width=1600&height=900&seq=startup-hero1&orientation=landscape"
          alt="flowAI"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-indigo-950/60 to-gray-950/80"></div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold mb-8">
          <i className="ri-sparkling-line"></i>
          AIで業務フローを自動化するSaaS
        </div>
        <h1 className="text-white font-black text-5xl md:text-7xl leading-tight mb-6">
          チームの生産性を、<br />
          <span className="text-indigo-400">AIが10倍にする。</span>
        </h1>
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          flowAIは繰り返しの業務フローをAIが自動化するSaaSプロダクトです。
          導入企業の平均ユーザー登録率は目標の150%を達成しています。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => handleNav("#cta")} className="px-8 py-3.5 rounded-lg bg-indigo-500 text-white font-bold text-sm hover:bg-indigo-600 transition-all cursor-pointer whitespace-nowrap">
            <i className="ri-rocket-line mr-2"></i>無料で始める
          </button>
          <button onClick={() => handleNav("#features")} className="px-8 py-3.5 rounded-lg bg-white/10 backdrop-blur-sm text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap">
            <i className="ri-play-circle-line mr-2"></i>デモを見る
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-16">
          {[{ num: "150%", label: "目標登録率達成" }, { num: "2,400+", label: "導入チーム数" }, { num: "40h", label: "月間削減時間/人" }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-black text-3xl">{s.num}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
