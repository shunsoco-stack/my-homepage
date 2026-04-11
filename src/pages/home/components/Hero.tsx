export default function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://public.readdy.ai/ai/img_res/edited_ac6da986a269f077ad37e25eb61805bb_301fea8d.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">現在、新規案件受付中</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Web制作・システム開発で
            <br />
            <span className="text-amber-400">ビジネスを加速</span>させる
          </h1>

          {/* Sub */}
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            ホームページ・LP制作から業務効率化システムまで、
            <br className="hidden md:block" />
            あなたのビジネス課題を技術で解決します。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleNav("#contact")}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              無料相談する
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
            <button
              onClick={() => handleNav("#works")}
              className="px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
            >
              実績を見る
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-6">
          {[
            { num: "50+", label: "プロジェクト完了" },
            { num: "98%", label: "クライアント満足度" },
            { num: "5年+", label: "フリーランス経験" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4"
            >
              <div className="text-2xl font-black text-white">{stat.num}</div>
              <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-line animate-bounce"></i>
      </div>
    </section>
  );
}
