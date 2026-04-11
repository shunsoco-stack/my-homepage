const cases = [
  {
    company: "株式会社アーバンホーム",
    area: "東京都・神奈川県",
    staff: "スタッフ12名",
    before: "物件更新に1件あたり平均45分かかっていた。手作業でのExcel管理でミスも多発。",
    after: "更新作業が平均8分に短縮。ミスゼロを達成し、浮いた時間を営業活動に充てられるようになった。",
    reduction: "82%",
    label: "作業時間削減",
    image: "https://readdy.ai/api/search-image?query=professional%20Japanese%20real%20estate%20office%20team%2C%20modern%20workspace%2C%20business%20people%20working%20on%20computers%2C%20bright%20clean%20office%20environment%2C%20corporate%20photography%20style%2C%20natural%20lighting&width=500&height=350&seq=case1&orientation=landscape",
  },
  {
    company: "みらい不動産株式会社",
    area: "大阪府・兵庫県",
    staff: "スタッフ8名",
    before: "問い合わせ管理がバラバラで、対応漏れが月に数件発生。顧客からのクレームも多かった。",
    after: "問い合わせの自動取り込みで対応漏れがゼロに。顧客満足度スコアが1.8倍に向上した。",
    reduction: "0件",
    label: "対応漏れ",
    image: "https://readdy.ai/api/search-image?query=Japanese%20real%20estate%20agent%20showing%20property%20to%20clients%2C%20professional%20consultation%2C%20modern%20office%20setting%2C%20business%20meeting%2C%20warm%20professional%20atmosphere%2C%20high%20quality%20photography&width=500&height=350&seq=case2&orientation=landscape",
  },
  {
    company: "サンライズ不動産",
    area: "愛知県・岐阜県",
    staff: "スタッフ5名",
    before: "自社サイトの更新を外注していたため、反映まで数日かかることも。機会損失が大きかった。",
    after: "管理画面から即時公開できるようになり、新着物件の問い合わせ数が2.4倍に増加した。",
    reduction: "2.4倍",
    label: "問い合わせ増加",
    image: "https://readdy.ai/api/search-image?query=small%20real%20estate%20business%20office%2C%20Japanese%20property%20agency%2C%20team%20collaboration%2C%20modern%20interior%2C%20professional%20work%20environment%2C%20business%20success%20concept%2C%20clean%20photography&width=500&height=350&seq=case3&orientation=landscape",
  },
];

export default function RealEstateResults() {
  return (
    <section id="results" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Case Studies</p>
          <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-4">導入事例</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            全国150社以上の不動産会社に導入いただいています。
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <div key={c.company} className={`bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-2/5 h-56 lg:h-auto overflow-hidden shrink-0">
                <img
                  src={c.image}
                  alt={c.company}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">{c.area}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">{c.staff}</span>
                </div>
                <h3 className="text-slate-900 font-black text-xl mb-5">{c.company}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-400 mb-2">導入前の課題</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.before}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-emerald-600 mb-2">導入後の変化</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.after}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-emerald-600">{c.reduction}</span>
                  <span className="text-slate-400 text-sm">{c.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
