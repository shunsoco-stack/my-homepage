const stylists = [
  {
    name: "Yuki Tanaka",
    nameJp: "田中 由紀",
    role: "トップスタイリスト / ディレクター",
    exp: "経験15年",
    specialty: "カラーリング・ハイライト",
    desc: "パリ・ロンドンでの修行経験を持つカラーのスペシャリスト。自然な立体感を生み出すバレイヤージュが得意。",
    image: "https://readdy.ai/api/search-image?query=professional%20Japanese%20female%20hair%20stylist%20portrait%2C%20elegant%20and%20confident%2C%20wearing%20stylish%20salon%20uniform%2C%20soft%20studio%20lighting%2C%20clean%20white%20background%2C%20beauty%20industry%20professional%2C%20warm%20smile%2C%20high%20quality%20portrait%20photography&width=400&height=500&seq=stylist1&orientation=portrait",
  },
  {
    name: "Sho Kimura",
    nameJp: "木村 翔",
    role: "スタイリスト",
    exp: "経験10年",
    specialty: "カット・パーマ",
    desc: "骨格診断に基づいたカットが得意。一人ひとりの顔立ちに合わせた、似合わせカットに定評があります。",
    image: "https://readdy.ai/api/search-image?query=professional%20Japanese%20male%20hair%20stylist%20portrait%2C%20stylish%20and%20modern%20appearance%2C%20salon%20professional%20attire%2C%20clean%20studio%20background%2C%20confident%20expression%2C%20beauty%20industry%20expert%2C%20high%20quality%20portrait%20photography&width=400&height=500&seq=stylist2&orientation=portrait",
  },
  {
    name: "Mio Sato",
    nameJp: "佐藤 澪",
    role: "スタイリスト",
    exp: "経験7年",
    specialty: "トリートメント・ヘアケア",
    desc: "髪質改善のスペシャリスト。ダメージヘアの修復から、サラサラ・ツヤツヤの美髪づくりまでお任せください。",
    image: "https://readdy.ai/api/search-image?query=professional%20Japanese%20female%20hair%20stylist%20portrait%2C%20gentle%20and%20approachable%2C%20elegant%20salon%20uniform%2C%20soft%20natural%20lighting%2C%20beauty%20professional%2C%20warm%20and%20friendly%20expression%2C%20high%20quality%20portrait%20photography&width=400&height=500&seq=stylist3&orientation=portrait",
  },
];

export default function SalonStylists() {
  return (
    <section id="stylists" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-rose-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">Stylists</p>
          <h2 className="text-stone-800 font-black text-4xl md:text-5xl mb-4">スタイリスト</h2>
          <p className="text-stone-400 text-sm max-w-sm mx-auto leading-relaxed">
            経験豊富なスタイリストが、あなたの理想のスタイルを実現します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((s) => (
            <div key={s.name} className="group text-center">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6">
                <img
                  src={s.image}
                  alt={s.nameJp}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-white text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-400 text-xs font-semibold mb-3">
                <i className="ri-award-line"></i>
                {s.exp}
              </div>
              <h3 className="text-stone-800 font-black text-lg mb-1">{s.nameJp}</h3>
              <p className="text-stone-400 text-xs mb-2">{s.name}</p>
              <p className="text-stone-500 text-xs font-semibold mb-1">{s.role}</p>
              <p className="text-rose-400 text-xs">得意：{s.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
