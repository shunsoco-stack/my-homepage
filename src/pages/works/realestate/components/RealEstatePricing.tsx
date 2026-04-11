const plans = [
  {
    name: "スターター",
    price: "29,800",
    unit: "月",
    desc: "小規模不動産会社向け。まずは試してみたい方に。",
    features: [
      "物件登録数：最大100件",
      "ユーザー数：3名まで",
      "自動Web公開",
      "問い合わせ管理",
      "メールサポート",
    ],
    highlight: false,
    cta: "このプランで始める",
  },
  {
    name: "スタンダード",
    price: "59,800",
    unit: "月",
    desc: "中規模不動産会社向け。最も人気のプランです。",
    features: [
      "物件登録数：最大500件",
      "ユーザー数：10名まで",
      "自動Web公開",
      "問い合わせ管理",
      "アクセス解析ダッシュボード",
      "帳票自動生成",
      "電話・チャットサポート",
    ],
    highlight: true,
    cta: "無料デモを申し込む",
  },
  {
    name: "エンタープライズ",
    price: "要相談",
    unit: "",
    desc: "大規模・複数拠点の不動産会社向けカスタムプラン。",
    features: [
      "物件登録数：無制限",
      "ユーザー数：無制限",
      "全機能利用可能",
      "専任サポート担当",
      "カスタム開発対応",
      "SLA保証",
    ],
    highlight: false,
    cta: "お問い合わせ",
  },
];

export default function RealEstatePricing() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Pricing</p>
          <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-4">料金プラン</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            初期費用0円。月額料金のみでご利用いただけます。<br />
            30日間の無料トライアルも実施中。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-emerald-600 text-white ring-2 ring-emerald-600 ring-offset-4"
                  : "bg-white border border-slate-100"
              }`}
            >
              <div className="mb-6">
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3">
                    人気No.1
                  </span>
                )}
                <h3 className={`font-black text-xl mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-slate-400"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                {plan.unit ? (
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      &yen;{plan.price}
                    </span>
                    <span className={`text-sm mb-1 ${plan.highlight ? "text-white/70" : "text-slate-400"}`}>
                      /{plan.unit}
                    </span>
                  </div>
                ) : (
                  <span className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <i className={`ri-check-line mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-emerald-500"}`}></i>
                    <span className={plan.highlight ? "text-white/90" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleNav("#contact")}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${
                  plan.highlight
                    ? "bg-white text-emerald-700 hover:bg-emerald-50"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
