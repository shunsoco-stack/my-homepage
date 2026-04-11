import { useState, FormEvent } from "react";

const stylists = ["田中 由紀（トップスタイリスト）", "木村 翔（スタイリスト）", "佐藤 澪（スタイリスト）", "指名なし（おまかせ）"];
const menuOptions = ["カット", "カット＋シャンプー", "カット＋トリートメント", "ワンカラー", "ハイライト", "バレイヤージュ", "ベーシックTR", "プレミアムTR", "集中ケアTR", "その他"];
const timeSlots = ["10:00", "10:30", "11:00", "11:30", "12:00", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"];

export default function SalonReservation() {
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
      await fetch("https://readdy.ai/api/form/d7ctv0s5q56ra7tufcgg", {
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
    <section id="reservation" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-rose-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">Reservation</p>
          <h2 className="text-stone-800 font-black text-4xl md:text-5xl mb-4">ご予約</h2>
          <p className="text-stone-400 text-sm max-w-sm mx-auto leading-relaxed">
            初回限定20%OFFキャンペーン実施中。<br />
            お気軽にご予約ください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="text-stone-800 font-bold text-sm mb-4">
                <i className="ri-map-pin-line text-rose-400 mr-2"></i>
                アクセス
              </h3>
              <p className="text-stone-600 text-sm font-semibold mb-1">FLEUR 表参道店</p>
              <p className="text-stone-400 text-xs leading-relaxed">
                東京都渋谷区神宮前5-1-1<br />
                表参道ヒルズ近く<br />
                東京メトロ表参道駅 A5出口 徒歩3分
              </p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="text-stone-800 font-bold text-sm mb-4">
                <i className="ri-time-line text-rose-400 mr-2"></i>
                営業時間
              </h3>
              <ul className="space-y-2 text-xs text-stone-500">
                <li className="flex justify-between">
                  <span>月〜金</span><span className="font-semibold text-stone-700">10:00〜20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>土・日・祝</span><span className="font-semibold text-stone-700">9:00〜19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>定休日</span><span className="font-semibold text-stone-700">火曜日</span>
                </li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="text-stone-800 font-bold text-sm mb-3">
                <i className="ri-gift-line text-rose-400 mr-2"></i>
                初回限定特典
              </h3>
              <p className="text-rose-500 font-black text-2xl mb-1">20% OFF</p>
              <p className="text-stone-400 text-xs leading-relaxed">
                初めてご来店のお客様に全メニュー20%OFFをご提供しています。
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-50 text-rose-400 mb-5">
                  <i className="ri-check-line text-3xl"></i>
                </div>
                <h3 className="text-stone-800 font-bold text-xl mb-3">ご予約を受け付けました</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  確認メールをお送りしました。<br />
                  当日のご来店をお待ちしております。
                </p>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                      お名前 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="山田 花子"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                      電話番号 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      required
                      placeholder="090-0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-300 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                    メールアドレス <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-300 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                    ご希望メニュー <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="menu"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-rose-300 transition-colors bg-white cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    {menuOptions.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                    担当スタイリスト
                  </label>
                  <select
                    name="stylist"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-rose-300 transition-colors bg-white cursor-pointer"
                  >
                    {stylists.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                      ご希望日 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-rose-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                      ご希望時間 <span className="text-rose-400">*</span>
                    </label>
                    <select
                      name="time"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-rose-300 transition-colors bg-white cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                    ご要望・アレルギー等
                    <span className="text-stone-300 font-normal ml-2">({charCount}/500文字)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    maxLength={500}
                    onChange={(e) => setCharCount(e.target.value.length)}
                    placeholder="髪の状態やご希望のスタイルなどをお気軽にご記入ください"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-rose-300 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-rose-400 text-white font-bold text-sm hover:bg-rose-500 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin"></i>送信中...
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
