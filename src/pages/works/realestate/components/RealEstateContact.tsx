import { useState, FormEvent } from "react";

export default function RealEstateContact() {
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
      await fetch("https://readdy.ai/api/form/d7ctt07sch5bvrijf93g", {
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
    <section id="contact" className="bg-slate-900 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="text-white font-black text-4xl md:text-5xl mb-4">無料デモ・お問い合わせ</h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            30日間の無料トライアルをご用意しています。<br />
            まずはお気軽にお問い合わせください。
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-5">
              <i className="ri-check-line text-3xl"></i>
            </div>
            <h3 className="text-white font-bold text-xl mb-3">お問い合わせを受け付けました</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              担当者より1営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form data-readdy-form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5">
                  会社名 <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="株式会社〇〇不動産"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5">
                  お名前 <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5">
                  メールアドレス <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="yamada@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-1.5">電話番号</label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="03-0000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-1.5">
                ご興味のある内容
              </label>
              <select
                name="interest"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
              >
                <option value="demo" className="text-slate-900">無料デモを見たい</option>
                <option value="trial" className="text-slate-900">30日間トライアルを試したい</option>
                <option value="pricing" className="text-slate-900">料金について聞きたい</option>
                <option value="custom" className="text-slate-900">カスタム開発について相談したい</option>
                <option value="other" className="text-slate-900">その他</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-1.5">
                ご質問・ご要望
                <span className="text-white/30 font-normal ml-2">({charCount}/500文字)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={500}
                onChange={(e) => setCharCount(e.target.value.length)}
                placeholder="現在の課題や気になる点をお気軽にご記入ください"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-loader-4-line animate-spin"></i>送信中...
                </span>
              ) : (
                <>
                  <i className="ri-send-plane-line mr-2"></i>送信する
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
