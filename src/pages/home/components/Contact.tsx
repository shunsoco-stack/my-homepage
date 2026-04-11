import { useState, FormEvent } from "react";

const FORM_URL = "https://readdy.ai/api/form/d7brgi8fgr5j5eoavcq0";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const message = data.get("message") as string;
    if (message && message.length > 500) {
      alert("メッセージは500文字以内で入力してください。");
      return;
    }

    setStatus("sending");

    const body = new URLSearchParams();
    data.forEach((value, key) => {
      body.append(key, value as string);
    });

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setCharCount(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold mb-3">
              <i className="ri-mail-line"></i>
              <span>Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">お問い合わせ</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              ご依頼・ご相談はお気軽にどうぞ。
              <br />
              初回相談は無料です。まずはお話を聞かせてください。
            </p>

            <div className="space-y-5">
              {[
                { icon: "ri-time-line", label: "返信時間", value: "通常24時間以内にご返信します" },
                { icon: "ri-chat-check-line", label: "初回相談", value: "無料でご相談いただけます" },
                { icon: "ri-shield-check-line", label: "秘密保持", value: "NDA締結も対応可能です" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50 text-amber-500 flex-shrink-0">
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold">{item.label}</p>
                    <p className="text-sm text-gray-700 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                  <i className="ri-check-line text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">送信完了しました！</h3>
                <p className="text-gray-500 text-sm">
                  お問い合わせありがとうございます。
                  <br />
                  24時間以内にご返信いたします。
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2 rounded-full border border-gray-200 text-gray-500 text-sm hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  別のお問い合わせをする
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-readdy-form
                id="contact-form"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="山田 太郎"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    会社名・屋号
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="株式会社〇〇 / 個人の場合は不要"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    ご相談内容 <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    <option value="ホームページ制作">ホームページ制作</option>
                    <option value="LP制作">LP制作</option>
                    <option value="業務効率化システム">業務効率化システム</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    メッセージ <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    placeholder="ご依頼の概要・ご要望などをお聞かせください"
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition resize-none"
                  />
                  <p className="text-right text-xs text-gray-400 mt-1">{charCount} / 500</p>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-full bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {status === "sending" ? "送信中..." : "送信する"}
                  {status !== "sending" && <i className="ri-send-plane-line ml-2"></i>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
