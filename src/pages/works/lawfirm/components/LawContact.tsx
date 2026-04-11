import { useState, FormEvent } from "react";

export default function LawContact() {
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
      await fetch("https://readdy.ai/api/form/d7cu2qvsch5bvrijf960", {
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
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Free Consultation</p>
          <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">無料相談のご予約</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            初回相談は30分無料です。お気軽にご連絡ください。<br />
            秘密厳守・24時間以内にご返答します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-gray-900 font-bold text-sm mb-4"><i className="ri-phone-line text-amber-600 mr-2"></i>お電話でのご相談</h3>
              <p className="text-gray-900 font-black text-2xl mb-1">03-3456-7890</p>
              <p className="text-gray-400 text-xs">平日 9:00〜18:00</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-gray-900 font-bold text-sm mb-4"><i className="ri-map-pin-line text-amber-600 mr-2"></i>事務所所在地</h3>
              <p className="text-gray-700 text-sm font-semibold mb-1">東京本部</p>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">東京都千代田区丸の内1-1-1<br />丸の内ビルディング15F</p>
              <p className="text-gray-700 text-sm font-semibold mb-1">大阪支部</p>
              <p className="text-gray-400 text-xs leading-relaxed">大阪府大阪市北区梅田2-2-2<br />梅田スカイビル8F</p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-gray-900 font-bold text-sm mb-2"><i className="ri-shield-check-line text-amber-600 mr-2"></i>初回相談無料</h3>
              <p className="text-gray-500 text-xs leading-relaxed">初回30分の相談は無料です。まずはお気軽にご連絡ください。</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-50 text-amber-600 mb-5">
                  <i className="ri-check-line text-3xl"></i>
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">お問い合わせを受け付けました</h3>
                <p className="text-gray-400 text-sm leading-relaxed">24時間以内に担当弁護士よりご連絡いたします。</p>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">お名前 <span className="text-amber-600">*</span></label>
                    <input type="text" name="name" required placeholder="山田 太郎" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">電話番号 <span className="text-amber-600">*</span></label>
                    <input type="tel" name="tel" required placeholder="090-0000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">メールアドレス <span className="text-amber-600">*</span></label>
                  <input type="email" name="email" required placeholder="yamada@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">ご相談の種類 <span className="text-amber-600">*</span></label>
                  <select name="category" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-amber-400 transition-colors bg-white cursor-pointer">
                    <option value="">選択してください</option>
                    {["企業法務", "相続・遺言", "労働問題", "交通事故", "離婚・親権", "債務整理", "刑事弁護", "その他"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    ご相談内容 <span className="text-amber-600">*</span>
                    <span className="text-gray-300 font-normal ml-2">({charCount}/500文字)</span>
                  </label>
                  <textarea name="message" rows={4} required maxLength={500} onChange={(e) => setCharCount(e.target.value.length)} placeholder="ご相談の概要をご記入ください（秘密厳守）" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60">
                  {loading ? <span className="flex items-center justify-center gap-2"><i className="ri-loader-4-line animate-spin"></i>送信中...</span> : <><i className="ri-calendar-check-line mr-2"></i>無料相談を予約する</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
