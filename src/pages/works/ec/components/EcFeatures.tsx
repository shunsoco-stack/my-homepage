const features = [
  { icon: "ri-refresh-line", title: "リアルタイム在庫同期", desc: "Amazon・楽天・Yahoo!・Qoo10など主要モールの在庫数をリアルタイムで双方向同期。1件売れたら全モールに即反映。", color: "bg-orange-50 text-orange-500" },
  { icon: "ri-alarm-warning-line", title: "在庫アラート", desc: "設定した閾値を下回ると即座にSlack・メールで通知。在庫切れによる機会損失をゼロに。", color: "bg-red-50 text-red-500" },
  { icon: "ri-bar-chart-box-line", title: "売上・在庫分析", desc: "モール別・商品別の売上推移・在庫回転率を自動集計。過剰在庫の削減にも貢献します。", color: "bg-sky-50 text-sky-500" },
  { icon: "ri-robot-line", title: "自動発注提案", desc: "過去の販売データとリードタイムから最適な発注タイミング・数量をAIが自動提案します。", color: "bg-violet-50 text-violet-500" },
  { icon: "ri-file-excel-2-line", title: "CSV一括インポート", desc: "既存の商品データをCSVで一括登録。初期設定は最短3分で完了します。", color: "bg-emerald-50 text-emerald-500" },
  { icon: "ri-shield-check-line", title: "セキュリティ対応", desc: "ISO 27001準拠のセキュリティ体制。大切な在庫・売上データを安全に管理します。", color: "bg-amber-50 text-amber-500" },
];

const malls = [
  { name: "Amazon", icon: "ri-amazon-line" },
  { name: "楽天市場", icon: "ri-store-2-line" },
  { name: "Yahoo!ショッピング", icon: "ri-shopping-bag-line" },
  { name: "Qoo10", icon: "ri-global-line" },
  { name: "au PAY", icon: "ri-smartphone-line" },
  { name: "ZOZOTOWN", icon: "ri-t-shirt-line" },
  { name: "BASE", icon: "ri-box-3-line" },
  { name: "Shopify", icon: "ri-shopping-cart-line" },
];

export default function EcFeatures() {
  return (
    <>
      <section id="features" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Features</p>
            <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">主な機能</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">在庫管理にまつわるすべての手間を自動化します。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((f) => (
              <div key={f.title} className="p-7 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${f.color}`}>
                  <i className={`${f.icon} text-xl`}></i>
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Integrations</p>
            <h2 className="text-gray-900 font-black text-3xl md:text-4xl mb-4">対応モール・カート</h2>
            <p className="text-gray-400 text-sm">主要8モール・カートに対応。随時拡大中。</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {malls.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <i className={`${m.icon} text-2xl`}></i>
                </div>
                <p className="text-gray-700 font-semibold text-sm text-center">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
