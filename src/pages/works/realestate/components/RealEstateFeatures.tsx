const features = [
  {
    icon: "ri-database-2-line",
    title: "物件情報の一元管理",
    desc: "登録・更新・削除・公開設定をひとつの画面で完結。複数担当者でのリアルタイム共同編集にも対応しています。",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: "ri-global-line",
    title: "自動Web公開",
    desc: "管理画面で登録した物件情報を自社サイトへ自動反映。手動でのHTML編集は一切不要です。",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: "ri-user-search-line",
    title: "顧客・問い合わせ管理",
    desc: "Webからの問い合わせを自動取り込み。顧客ごとの対応履歴・ステータスを一覧で管理できます。",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: "ri-bar-chart-2-line",
    title: "アクセス解析ダッシュボード",
    desc: "物件ごとのPV数・問い合わせ率・成約率をリアルタイムで可視化。データドリブンな営業活動を支援します。",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: "ri-file-list-3-line",
    title: "帳票・書類の自動生成",
    desc: "物件概要書・重要事項説明書のひな形を自動生成。印刷・PDF出力まで数クリックで完了します。",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: "ri-smartphone-line",
    title: "スマホ対応",
    desc: "外出先からもスマートフォンで物件情報の確認・更新が可能。現地内見中の情報入力にも対応しています。",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function RealEstateFeatures() {
  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Features</p>
          <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-4">主な機能</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            不動産業務のあらゆる場面をカバーする機能を搭載。
            導入初日から業務効率化を実感できます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f) => (
            <div key={f.title} className="p-7 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all group">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${f.color}`}>
                <i className={`${f.icon} text-xl`}></i>
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-100">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20real%20estate%20property%20management%20software%20dashboard%20UI%2C%20clean%20data%20visualization%20with%20charts%20graphs%20and%20property%20listings%2C%20professional%20admin%20panel%20interface%2C%20emerald%20green%20and%20white%20color%20scheme%2C%20desktop%20computer%20screen%20mockup%2C%20high%20quality%20UI%20design&width=1200&height=600&seq=realestate-dashboard1&orientation=landscape"
            alt="PropBase ダッシュボード画面"
            className="w-full h-72 md:h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
            <div>
              <p className="text-white font-bold text-lg mb-1">直感的なダッシュボード</p>
              <p className="text-white/60 text-sm">物件数・問い合わせ数・成約率をひと目で把握</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
