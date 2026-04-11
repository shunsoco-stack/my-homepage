import { useState, FormEvent } from "react";

export default function StartupCta() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
    try {
      await fetch("https://readdy.ai/api/form/d7cu2qvsch5bvrijf96g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="bg-gray-950 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="text-indigo-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">Get Started</p>
        <h2 className="text-white font-black text-4xl md:text-6xl leading-tight mb-6">
          今すぐ、<br />
          <span className="text-indigo-400">生産性を変えよう。</span>
        </h2>
        <p className="text-white/50 text-base leading-relaxed mb-12 max-w-xl mx-auto">
          14日間の無料トライアル。クレジットカード不要。<br />
          セットアップは3分で完了します。
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
              <i className="ri-check-line text-3xl"></i>
            </div>
            <h3 className="text-white font-bold text-xl">登録完了！</h3>
            <p className="text-white/50 text-sm">確認メールをお送りしました。</p>
          </div>
        ) : (
          <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="メールアドレスを入力"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-colors"
            />
            <button type="submit" disabled={loading} className="px-6 py-3.5 rounded-xl bg-indigo-500 text-white font-bold text-sm hover:bg-indigo-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60">
              {loading ? <i className="ri-loader-4-line animate-spin"></i> : "無料で始める"}
            </button>
          </form>
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {["クレジットカード不要", "14日間無料", "いつでもキャンセル可"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/40 text-xs">
              <i className="ri-check-line text-indigo-400"></i>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
