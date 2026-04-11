const plans = [
  {
    name: "スターター",
    price: "無料",
    unit: "",
    desc: "個人・小規模チーム向け。まず試してみたい方に。",
    features: ["ユーザー：5名まで", "ワークフロー：3つまで", "AI文書生成：月10回", "基本連携（Slack・Google）", "コミュニティサポート"],
    highlight: false,
    cta: "無料で始める",
  },
  {
    name: "プロ",
    price: "4,980",
    unit: "/人/月",
    desc: "成長中のチーム向け。最も人気のプランです。",
    features: ["ユーザー：無制限", "ワークフロー：無制限", "AI文書生成：無制限", "全連携（100+ツール）", "優先サポート", "高度な分析"],
    highlight: true,
    cta: "14日間無料で試す",
  },
  {
    name: "エンタープライズ",
    price: "要相談",
    unit: "",
    desc: "大規模組織向けカスタムプラン。",
    features: ["全プロ機能", "SSO・SAML対応", "専任カスタマーサクセス", "SLA保証（99.9%）", "カスタム連携開発", "監査ログ"],
    highlight: false,
    cta: "お問い合わせ",
  },
];

export default function StartupPricing() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-indigo-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Pricing</p>
          <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">シンプルな料金体系</h2>
          <p className="text-gray-400 text-sm">まずは無料プランから。いつでもアップグレード可能。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.highlight ? "bg-indigo-500 ring-2 ring-indigo-500 ring-offset-4" : "bg-white border border-gray-100"}`}>
              {plan.highlight && <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 w-fit">人気No.1</span>}
              <h3 className={`font-black text-xl mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.desc}</p>
              <div className="mb-8">
                <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                {plan.unit && <span className={`text-sm ml-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.unit}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <i className={`ri-check-line mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-indigo-500"}`}></i>
                    <span className={plan.highlight ? "text-white/90" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleNav("#cta")} className={`w-full py-3 rounded-xl font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${plan.highlight ? "bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-500 text-white hover:bg-indigo-600"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
