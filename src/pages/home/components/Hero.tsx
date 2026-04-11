import { useState, useEffect } from "react";

const bgImages = [
  "https://public.readdy.ai/ai/img_res/edited_ac6da986a269f077ad37e25eb61805bb_301fea8d.jpg",
  "https://readdy.ai/api/search-image?query=freelance%20web%20developer%20working%20at%20modern%20desk%20with%20multiple%20monitors%20showing%20code%20and%20design%2C%20clean%20minimal%20workspace%2C%20soft%20warm%20lighting%2C%20professional%20home%20office%20setup%2C%20cinematic%20wide%20shot&width=1600&height=900&seq=hero-bg2&orientation=landscape",
  "https://readdy.ai/api/search-image?query=modern%20digital%20agency%20creative%20workspace%2C%20team%20collaboration%20on%20web%20design%20project%2C%20large%20screens%20with%20beautiful%20UI%20mockups%2C%20contemporary%20office%20interior%2C%20warm%20ambient%20lighting%2C%20wide%20angle%20photography&width=1600&height=900&seq=hero-bg3&orientation=landscape",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % bgImages.length);
        setNext((prev) => (prev + 1) % bgImages.length);
        setTransitioning(false);
      }, 1500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Ken Burns background layers */}
      <style>{`
        @keyframes kenburns-1 {
          0%   { transform: scale(1.08) translate(0%, 0%); }
          100% { transform: scale(1.18) translate(-2%, -1.5%); }
        }
        @keyframes kenburns-2 {
          0%   { transform: scale(1.1) translate(1.5%, 1%); }
          100% { transform: scale(1.2) translate(-1%, -2%); }
        }
        @keyframes kenburns-3 {
          0%   { transform: scale(1.12) translate(-1%, 1.5%); }
          100% { transform: scale(1.22) translate(2%, -1%); }
        }
        .kb-1 { animation: kenburns-1 8s ease-in-out forwards; }
        .kb-2 { animation: kenburns-2 8s ease-in-out forwards; }
        .kb-3 { animation: kenburns-3 8s ease-in-out forwards; }
      `}</style>

      {bgImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{
            opacity: i === current ? (transitioning ? 0 : 1) : i === next && transitioning ? 1 : 0,
            transitionDuration: "1500ms",
            zIndex: i === next && transitioning ? 1 : 0,
          }}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${i === 0 ? "kb-1" : i === 1 ? "kb-2" : "kb-3"}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/40 z-10" />

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setNext((i + 1) % bgImages.length); }}
            className={`transition-all duration-500 rounded-full cursor-pointer ${i === current ? "w-6 h-1.5 bg-amber-400" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"}`}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-20">
        <span className="text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-line animate-bounce"></i>
      </div>
    </section>
  );
}
