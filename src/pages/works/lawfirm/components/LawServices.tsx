const services = [
  {
    icon: "ri-building-4-line",
    title: "企業法務",
    desc: "契約書レビュー・作成、M&A、コンプライアンス体制の構築など、企業活動に関わるあらゆる法的課題に対応します。",
    items: ["契約書作成・レビュー", "M&A・事業承継", "コンプライアンス", "知的財産権"],
    image: "https://readdy.ai/api/search-image?query=Japanese%20corporate%20law%20meeting%20room%2C%20professional%20lawyers%20reviewing%20documents%2C%20elegant%20conference%20table%2C%20dark%20wood%20interior%2C%20serious%20business%20atmosphere%2C%20high%20quality%20professional%20photography&width=600&height=400&seq=law-corp1&orientation=landscape",
  },
  {
    icon: "ri-home-heart-line",
    title: "相続・遺言",
    desc: "遺産分割協議から遺言書作成まで、相続に関するトラブルを未然に防ぎ、円満な解決をサポートします。",
    items: ["遺産分割協議", "遺言書作成", "相続放棄", "遺留分請求"],
    image: "https://readdy.ai/api/search-image?query=Japanese%20family%20consultation%20with%20lawyer%2C%20warm%20office%20setting%2C%20trust%20and%20care%20atmosphere%2C%20professional%20legal%20advice%2C%20soft%20natural%20lighting%2C%20family%20law%20concept%20photography&width=600&height=400&seq=law-inherit1&orientation=landscape",
  },
  {
    icon: "ri-user-heart-line",
    title: "労働問題",
    desc: "不当解雇・残業代未払い・ハラスメントなど、労働者・使用者双方の立場から迅速に対応します。",
    items: ["不当解雇", "残業代請求", "ハラスメント", "労働審判"],
    image: "https://readdy.ai/api/search-image?query=Japanese%20employment%20law%20consultation%2C%20professional%20lawyer%20advising%20client%2C%20modern%20office%20environment%2C%20supportive%20atmosphere%2C%20labor%20rights%20concept%2C%20high%20quality%20business%20photography&width=600&height=400&seq=law-labor1&orientation=landscape",
  },
  {
    icon: "ri-scales-3-line",
    title: "民事・刑事",
    desc: "交通事故・離婚・債務整理から刑事弁護まで、個人の権利を守るための幅広い法的サービスを提供します。",
    items: ["交通事故", "離婚・親権", "債務整理", "刑事弁護"],
    image: "https://readdy.ai/api/search-image?query=Japanese%20courtroom%20or%20legal%20consultation%2C%20serious%20professional%20atmosphere%2C%20law%20books%20and%20documents%2C%20justice%20concept%2C%20dark%20sophisticated%20interior%2C%20professional%20legal%20photography&width=600&height=400&seq=law-civil1&orientation=landscape",
  },
];

export default function LawServices() {
  return (
    <section id="services" className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Practice Areas</p>
          <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">業務内容</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">企業から個人まで、幅広い法的課題に対応します。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 group">
              <div className="w-full h-48 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-amber-400">
                    <i className={`${s.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-gray-900 font-black text-xl">{s.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
