const services = [
  {
    icon: "ri-global-line",
    title: "ホームページ制作",
    description:
      "企業・店舗・個人のホームページをゼロから制作。レスポンシブ対応・SEO最適化・高速表示を標準装備。集客につながるサイトを構築します。",
    tags: ["React", "Next.js", "TailwindCSS", "SEO"],
    accent: "bg-gray-900",
    textColor: "text-white",
    tagColor: "bg-white/10 text-white/70",
  },
  {
    icon: "ri-layout-line",
    title: "LP制作",
    description:
      "コンバージョン率を最大化するランディングページを制作。ユーザー心理に基づいた設計で、問い合わせ・購入・登録を促進します。",
    tags: ["HTML/CSS", "JavaScript", "CRO", "A/Bテスト"],
    accent: "bg-amber-50",
    textColor: "text-gray-900",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: "ri-settings-3-line",
    title: "業務効率化システム",
    description:
      "繰り返し作業の自動化・管理システム・API連携など、業務の無駄を削減するシステムを開発。現場の課題をヒアリングして最適解を提案します。",
    tags: ["Python", "Node.js", "PostgreSQL", "API連携"],
    accent: "bg-white border border-gray-200",
    textColor: "text-gray-900",
    tagColor: "bg-gray-100 text-gray-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold mb-3">
            <i className="ri-service-line"></i>
            <span>Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">提供サービス</h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl">
            ビジネスの成長に必要なWeb制作・システム開発を、ワンストップで対応します。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`rounded-2xl p-8 flex flex-col gap-5 ${svc.accent}`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                  svc.accent === "bg-gray-900"
                    ? "bg-white/10"
                    : "bg-gray-900"
                }`}
              >
                <i
                  className={`${svc.icon} text-xl ${
                    svc.accent === "bg-gray-900" ? "text-white" : "text-white"
                  }`}
                ></i>
              </div>

              <div>
                <h3 className={`text-xl font-bold mb-2 ${svc.textColor}`}>{svc.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    svc.accent === "bg-gray-900" ? "text-white/65" : "text-gray-500"
                  }`}
                >
                  {svc.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1 rounded-full font-medium ${svc.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flow */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-lg font-bold text-gray-900 mb-8 text-center">ご依頼の流れ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "ri-chat-3-line", label: "無料相談", desc: "ヒアリング・要件整理" },
              { step: "02", icon: "ri-file-list-3-line", label: "お見積り", desc: "費用・スケジュール提示" },
              { step: "03", icon: "ri-code-s-slash-line", label: "制作・開発", desc: "定期的に進捗共有" },
              { step: "04", icon: "ri-rocket-line", label: "納品・公開", desc: "アフターサポートあり" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500 text-white">
                  <i className={`${item.icon} text-lg`}></i>
                </div>
                <span className="text-xs text-amber-500 font-bold">{item.step}</span>
                <span className="text-sm font-bold text-gray-900">{item.label}</span>
                <span className="text-xs text-gray-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
