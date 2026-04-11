const attorneys = [
  {
    name: "宮本 健一郎",
    nameEn: "Kenichiro Miyamoto",
    role: "代表弁護士・所長",
    exp: "弁護士歴28年",
    bar: "東京弁護士会",
    specialty: "企業法務・M&A",
    desc: "東京大学法学部卒業後、大手渉外法律事務所を経て独立。企業法務・M&Aを中心に、国内外の複雑な案件を多数手がける。",
    image: "https://readdy.ai/api/search-image?query=senior%20Japanese%20male%20lawyer%20portrait%2C%20distinguished%20and%20authoritative%2C%20wearing%20dark%20suit%2C%20professional%20headshot%2C%20law%20office%20background%20with%20bookshelves%2C%20trustworthy%20expression%2C%20high%20quality%20portrait%20photography&width=400&height=500&seq=attorney1&orientation=portrait",
  },
  {
    name: "田村 さやか",
    nameEn: "Sayaka Tamura",
    role: "パートナー弁護士",
    exp: "弁護士歴15年",
    bar: "第二東京弁護士会",
    specialty: "相続・家事事件",
    desc: "相続・離婚・親権など家事事件のスペシャリスト。依頼者に寄り添った丁寧なサポートで、複雑な家族問題を解決に導く。",
    image: "https://readdy.ai/api/search-image?query=professional%20Japanese%20female%20lawyer%20portrait%2C%20confident%20and%20approachable%2C%20wearing%20formal%20business%20attire%2C%20law%20office%20setting%2C%20warm%20professional%20expression%2C%20high%20quality%20portrait%20photography&width=400&height=500&seq=attorney2&orientation=portrait",
  },
  {
    name: "松本 大輔",
    nameEn: "Daisuke Matsumoto",
    role: "アソシエイト弁護士",
    exp: "弁護士歴8年",
    bar: "東京弁護士会",
    specialty: "労働問題・刑事",
    desc: "労働審判・不当解雇・残業代請求を得意とする。刑事弁護にも精通し、依頼者の権利を守るために迅速に行動する。",
    image: "https://readdy.ai/api/search-image?query=young%20Japanese%20male%20lawyer%20portrait%2C%20energetic%20and%20professional%2C%20dark%20suit%2C%20modern%20law%20office%20background%2C%20determined%20expression%2C%20high%20quality%20professional%20portrait%20photography&width=400&height=500&seq=attorney3&orientation=portrait",
  },
];

export default function LawAttorneys() {
  return (
    <section id="attorneys" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Attorneys</p>
          <h2 className="text-gray-900 font-black text-4xl md:text-5xl mb-4">弁護士紹介</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">経験豊富な弁護士チームが、あなたの問題を解決します。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((a) => (
            <div key={a.name} className="group">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent flex items-end p-5">
                  <div>
                    <p className="text-amber-400 text-xs font-bold mb-1">{a.specialty}</p>
                    <p className="text-white font-black text-lg">{a.name}</p>
                  </div>
                </div>
              </div>
              <div className="px-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{a.exp}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-medium">{a.bar}</span>
                </div>
                <p className="text-gray-500 text-xs font-semibold mb-2">{a.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
