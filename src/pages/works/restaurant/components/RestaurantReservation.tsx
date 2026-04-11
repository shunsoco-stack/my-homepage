import { useState, FormEvent } from "react";

const stores = [
  "新宿本店", "渋谷店", "銀座店", "梅田店", "名古屋栄店", "福岡天神店",
  "札幌大通店", "仙台一番町店", "横浜みなとみらい店", "京都四条店",
  "神戸三宮店", "広島紙屋町店", "高松丸亀町店", "那覇国際通り店", "金沢香林坊店",
];

export default function RestaurantReservation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.querySelector("textarea");
    if (textarea && textarea.value.length > 500) {
      alert("ご要望は500文字以内でご入力ください。");
      return;
    }
    setLoading(true);
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      await fetch("https://readdy.ai/api/form/d7ctt07sch5bvrijf93g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservation" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Reservation</p>
          <h2 className="text-stone-900 font-black text-4xl md:text-5xl">ご予約</h2>
          <p className="text-stone-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            お電話またはWebフォームからご予約いただけます。<br />
            2名様以上の場合はWebフォームをご利用ください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="text-stone-900 font-bold text-sm mb-4">
                <i className="ri-phone-line text-red-600 mr-2"></i>
                お電話でのご予約
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed mb-3">
                各店舗に直接お電話ください。<br />
                営業時間内にて承っております。
              </p>
              <p className="text-stone-900 font-black text-xl">03-1234-5678</p>
              <p className="text-stone-400 text-xs mt-1">（新宿本店代表）</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="text-stone-900 font-bold text-sm mb-4">
                <i className="ri-information-line text-red-600 mr-2"></i>
                ご予約について
              </h3>
              <ul className="space-y-2 text-xs text-stone-500 leading-relaxed">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-red-500 mt-0.5 shrink-0"></i>
                  <span>ご予約は3日前までにお願いします</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-red-500 mt-0.5 shrink-0"></i>
                  <span>キャンセルは前日17時までにご連絡ください</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-red-500 mt-0.5 shrink-0"></i>
                  <span>コース料理は4名様以上から承ります</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-red-500 mt-0.5 shrink-0"></i>
                  <span>アレルギーのある方はお申し付けください</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-red-600 mb-5">
                  <i className="ri-check-line text-3xl"></i>
                </div>
                <h3 className="text-stone-900 font-bold text-xl mb-3">ご予約を受け付けました</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  確認メールをお送りしました。<br />
                  24時間以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form
                data-readdy-form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="山田 太郎"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      required
                      placeholder="090-0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-red-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      ご希望店舗 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="store"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-red-400 transition-colors bg-white cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      {stores.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      人数 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="guests"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-red-400 transition-colors bg-white cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      {[2,3,4,5,6,7,8,9,10].map((n) => (
                        <option key={n} value={`${n}名`}>{n}名</option>
                      ))}
                      <option value="11名以上">11名以上</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      ご希望日 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                      ご希望時間 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="time"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-red-400 transition-colors bg-white cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      {["11:00","11:30","12:00","12:30","13:00","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                    ご要望・アレルギー等
                    <span className="text-stone-400 font-normal ml-2">({charCount}/500文字)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    maxLength={500}
                    onChange={(e) => setCharCount(e.target.value.length)}
                    placeholder="アレルギーや席のご希望などがあればご記入ください"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-red-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                      送信中...
                    </span>
                  ) : (
                    <>
                      <i className="ri-calendar-check-line mr-2"></i>
                      予約リクエストを送る
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
