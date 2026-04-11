const values = [
  {
    icon: "ri-leaf-line",
    title: "産地直送の素材",
    desc: "全国の契約農家・漁師から毎朝届く新鮮な食材のみを使用。素材本来の旨みを大切にしています。",
  },
  {
    icon: "ri-fire-line",
    title: "職人の技",
    desc: "各店舗に配置された熟練の料理人が、伝統の技法と現代の感性を融合させた料理を提供します。",
  },
  {
    icon: "ri-heart-line",
    title: "おもてなしの心",
    desc: "日本の「おもてなし」文化を大切に、お客様一人ひとりに寄り添ったサービスを心がけています。",
  },
];

export default function RestaurantConcept() {
  return (
    <section id="concept" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Concept</p>
            <h2 className="text-stone-900 font-black text-4xl md:text-5xl leading-tight mb-6">
              素材と向き合い、<br />
              <span className="text-red-600">旨みを極める。</span>
            </h2>
            <p className="text-stone-500 text-base leading-relaxed mb-8">
              うまみ食堂は2008年の創業以来、「本物の味」を追求し続けてきました。
              全国15店舗を展開する今も、創業当時の精神は変わりません。
              毎日の食事が、特別な時間になるように。
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-black text-stone-900">15</p>
                <p className="text-xs text-stone-400 mt-1">全国店舗数</p>
              </div>
              <div className="w-px h-12 bg-stone-200"></div>
              <div className="text-center">
                <p className="text-4xl font-black text-stone-900">16</p>
                <p className="text-xs text-stone-400 mt-1">創業年数</p>
              </div>
              <div className="w-px h-12 bg-stone-200"></div>
              <div className="text-center">
                <p className="text-4xl font-black text-stone-900">98<span className="text-xl">%</span></p>
                <p className="text-xs text-stone-400 mt-1">顧客満足度</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden w-full h-80 md:h-96">
              <img
                src="https://readdy.ai/api/search-image?query=Japanese%20chef%20preparing%20traditional%20food%20in%20professional%20kitchen%2C%20close-up%20of%20skilled%20hands%2C%20fresh%20ingredients%2C%20warm%20kitchen%20lighting%2C%20authentic%20culinary%20craft%2C%20high%20quality%20food%20photography&width=700&height=500&seq=restaurant-concept1&orientation=landscape"
                alt="職人の技"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600">
                  <i className="ri-award-line text-lg"></i>
                </div>
                <div>
                  <p className="text-stone-900 font-bold text-sm">食べログ 3.8以上</p>
                  <p className="text-stone-400 text-xs">全店舗平均評価</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-7 border border-stone-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-5">
                <i className={`${v.icon} text-xl`}></i>
              </div>
              <h3 className="text-stone-900 font-bold text-base mb-3">{v.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
