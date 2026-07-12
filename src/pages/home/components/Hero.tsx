import { works } from "@/mocks/works";
import { resolvePublicUrl } from "@/utils/resolvePublicUrl";

const collageWorks = works.slice(0, 3);

export default function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-950">
      <style>{`
        @keyframes work-collage-float-a {
          0%, 100% { transform: translateY(-16px); }
          50% { transform: translateY(18px); }
        }
        @keyframes work-collage-float-b {
          0%, 100% { transform: translateY(14px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes work-collage-float-c {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(12px); }
        }
        .work-collage-float-a { animation: work-collage-float-a 12s ease-in-out infinite; }
        .work-collage-float-b { animation: work-collage-float-b 15s ease-in-out infinite; }
        .work-collage-float-c { animation: work-collage-float-c 13s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .work-collage-float-a, .work-collage-float-b, .work-collage-float-c { animation: none; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_15%_85%,rgba(120,53,15,0.42),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,7,18,0.98)_0%,rgba(3,7,18,0.9)_43%,rgba(3,7,18,0.42)_100%)]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        {collageWorks.map((work, index) => {
          const positions = [
            "right-[7%] top-[13%] -rotate-6",
            "right-[30%] top-[36%] rotate-3",
            "right-[-2%] top-[57%] -rotate-3",
          ];
          const animations = ["work-collage-float-a", "work-collage-float-b", "work-collage-float-c"];

          return (
            <figure key={work.id} className={`absolute w-[25rem] xl:w-[29rem] ${positions[index]}`}>
              <div className={`overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl shadow-black/50 ${animations[index]}`}>
                <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-white/10 px-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 h-4 flex-1 rounded-full bg-black/25" />
                </div>
                <img
                  src={resolvePublicUrl(work.image)}
                  alt={work.title}
                  width={800}
                  height={450}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              </div>
            </figure>
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span className="text-sm font-medium text-white/90">現在、新規案件受付中</span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Web制作・システム開発で
            <br />
            <span className="text-amber-400">ビジネスを加速</span>させる
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            ホームページ・LP制作から業務効率化システムまで、
            <br className="hidden md:block" />
            あなたのビジネス課題を技術で解決します。
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => handleNav("#contact")}
              className="cursor-pointer whitespace-nowrap rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-amber-600"
            >
              無料相談する
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
            <button
              onClick={() => handleNav("#works")}
              className="cursor-pointer whitespace-nowrap rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              実績を見る
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-6">
          {[
            { num: "50+", label: "プロジェクト完了" },
            { num: "98%", label: "クライアント満足度" },
            { num: "5年+", label: "エンジニア経験" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
              <div className="text-2xl font-black text-white">{stat.num}</div>
              <div className="mt-0.5 text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-line animate-bounce"></i>
      </div>
    </section>
  );
}
