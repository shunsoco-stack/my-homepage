const cases = [
  {
    company: "株式会社テックベンチャー",
    industry: "SaaS・IT",
    result: "月間40時間/人の業務削減",
    quote: "flowAIを導入してから、毎週の報告書作成が10分で終わるようになりました。浮いた時間を新機能開発に充てられています。",
    person: "CTO 鈴木 健太",
    image: "https://readdy.ai/api/search-image?query=modern%20tech%20startup%20office%2C%20young%20Japanese%20professionals%20working%20on%20laptops%2C%20collaborative%20workspace%2C%20bright%20open%20office%2C%20innovative%20company%20culture%2C%20high%20quality%20business%20photography&width=500&height=350&seq=startup-case1&orientation=landscape",
  },
  {
    company: "グローバルコンサルティング株式会社",
    industry: "コンサルティング",
    result: "提案書作成時間を75%削減",
    quote: "AIが提案書の骨格を作ってくれるので、コンサルタントが本来の思考に集中できるようになりました。クライアント満足度も向上しています。",
    person: "マネージャー 中村 美咲",
    image: "https://readdy.ai/api/search-image?query=Japanese%20consulting%20firm%20office%2C%20professional%20team%20meeting%2C%20business%20strategy%20discussion%2C%20modern%20conference%20room%2C%20corporate%20environment%2C%20high%20quality%20business%20photography&width=500&height=350&seq=startup-case2&orientation=landscape",
  },
  {
    company: "ネクストリテール株式会社",
    industry: "小売・EC",
    result: "ユーザー登録率 目標の150%達成",
    quote: "カスタマーサポートの自動化で、問い合わせ対応時間が80%削減。スタッフが顧客体験の向上に集中できるようになりました。",
    person: "COO 佐々木 拓也",
    image: "https://readdy.ai/api/search-image?query=Japanese%20retail%20company%20office%2C%20e-commerce%20team%20working%2C%20modern%20workspace%20with%20monitors%20showing%20data%2C%20professional%20business%20environment%2C%20high%20quality%20photography&width=500&height=350&seq=startup-case3&orientation=landscape",
  },
];

export default function StartupCases() {
  return (
    <section id="cases" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-indigo-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Case Studies</p>
          <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">導入事例</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">2,400以上のチームがflowAIで生産性を変えています。</p>
        </div>
        <div className="space-y-8">
          {cases.map((c, i) => (
            <div key={c.company} className={`rounded-2xl overflow-hidden border border-gray-100 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-2/5 h-56 lg:h-auto overflow-hidden shrink-0">
                <img src={c.image} alt={c.company} className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-semibold">{c.industry}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold">{c.result}</span>
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-4">{c.company}</h3>
                <blockquote className="text-gray-500 text-sm leading-relaxed mb-5 border-l-2 border-indigo-200 pl-4 italic">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <p className="text-gray-400 text-xs font-semibold">{c.person}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
