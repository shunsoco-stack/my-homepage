import { useState, FormEvent } from "react";

const plans = [
  { name: "ライト", price: "9,800", features: ["対応モール：3つまで", "商品数：500件まで", "ユーザー：2名", "メールサポート"], highlight: false },
  { name: "スタンダード", price: "24,800", features: ["対応モール：8つすべて", "商品数：5,000件まで", "ユーザー：10名", "自動発注提案", "チャット・電話サポート"], highlight: true },
  { name: "エンタープライズ", price: "要相談", features: ["商品数：無制限", "ユーザー：無制限", "専任担当者", "カスタム連携", "SLA保証"], highlight: false },
];

export default function EcPricingContact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.querySelector("textarea");
    if (textarea && textarea.value.length > 500) return;
    setLoading(true);
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      await fetch("https://readdy.ai/api/form/d7cu2qvsch5bvrijf95g", {
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
    <>
      <section id="pricing" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Pricing</p>
            <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">料金プラン</h2>
            <p className="text-gray-400 text-sm">初期費用0円・14日間無料トライアルあり</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.highlight ? "bg-orange-500 text-white ring-2 ring-orange-500 ring-offset-4" : "bg-white border border-gray-100"}`}>
                <h3 className={`font-black text-xl mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <div className="mb-8">
                  {plan.price !== "要相談" ? (
                    <div className="flex items-end gap-1">
                      <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>&yen;{plan.price}</span>
                      <span className={`text-sm mb-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>/月</span>
                    </div>
                  ) : (
                    <span className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <i className={`ri-check-line mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-orange-500"}`}></i>
                      <span className={plan.highlight ? "text-white/90" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all cursor-pointer whitespace-nowrap block ${plan.highlight ? "bg-white text-orange-600 hover:bg-orange-50" : "bg-orange-500 text-white hover:bg-orange-600"}`}>
                  {plan.price === "要相談" ? "お問い合わせ" : "無料で試す"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-950 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Free Trial</p>
            <h2 className="text-white font-black text-4xl md:text-5xl mb-4">14日間無料で試す</h2>
            <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">クレジットカード不要。すぐに始められます。</p>
          </div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mb-5">
                <i className="ri-check-line text-3xl"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">お申し込みを受け付けました！</h3>
              <p className="text-white/50 text-sm">登録メールをご確認ください。</p>
            </div>
          ) : (
            <form data-readdy-form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">会社名 <span className="text-orange-400">*</span></label>
                  <input type="text" name="company" required placeholder="株式会社〇〇" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">お名前 <span className="text-orange-400">*</span></label>
                  <input type="text" name="name" required placeholder="山田 太郎" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">メールアドレス <span className="text-orange-400">*</span></label>
                <input type="email" name="email" required placeholder="yamada@example.com" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">ご利用モール（複数可）</label>
                <input type="text" name="malls" placeholder="例：Amazon、楽天市場、Yahoo!ショッピング" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">ご質問・ご要望 <span className="text-white/30 font-normal ml-1">({charCount}/500)</span></label>
                <textarea name="message" rows={3} maxLength={500} onChange={(e) => setCharCount(e.target.value.length)} placeholder="現在の課題や気になる点をご記入ください" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-400 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60">
                {loading ? <span className="flex items-center justify-center gap-2"><i className="ri-loader-4-line animate-spin"></i>送信中...</span> : <><i className="ri-rocket-line mr-2"></i>無料トライアルを始める</>}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
