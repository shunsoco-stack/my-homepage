const stores = [
  {
    id: 1,
    name: "新宿本店",
    address: "東京都新宿区西新宿1-1-1 新宿タワー2F",
    hours: "11:00〜23:00（L.O. 22:30）",
    tel: "03-1234-5678",
    access: "JR新宿駅 西口より徒歩3分",
    seats: 80,
    image: "https://readdy.ai/api/search-image?query=modern%20Japanese%20restaurant%20exterior%20in%20Shinjuku%20Tokyo%2C%20warm%20evening%20lighting%2C%20elegant%20signage%2C%20urban%20city%20background%2C%20inviting%20entrance%2C%20high%20quality%20architectural%20photography&width=600&height=400&seq=store1&orientation=landscape",
  },
  {
    id: 2,
    name: "渋谷店",
    address: "東京都渋谷区道玄坂2-10-7 渋谷ビル1F",
    hours: "11:30〜23:00（L.O. 22:30）",
    tel: "03-2345-6789",
    access: "JR渋谷駅 ハチ公口より徒歩5分",
    seats: 60,
    image: "https://readdy.ai/api/search-image?query=Japanese%20restaurant%20storefront%20in%20Shibuya%20Tokyo%2C%20contemporary%20design%2C%20warm%20interior%20visible%20through%20glass%2C%20evening%20atmosphere%2C%20city%20street%2C%20professional%20photography&width=600&height=400&seq=store2&orientation=landscape",
  },
  {
    id: 3,
    name: "銀座店",
    address: "東京都中央区銀座4-5-6 銀座プレイス3F",
    hours: "11:30〜22:30（L.O. 22:00）",
    tel: "03-3456-7890",
    access: "東京メトロ銀座駅 A9出口より徒歩1分",
    seats: 70,
    image: "https://readdy.ai/api/search-image?query=upscale%20Japanese%20restaurant%20in%20Ginza%20Tokyo%2C%20luxury%20interior%20design%2C%20sophisticated%20ambiance%2C%20warm%20golden%20lighting%2C%20premium%20dining%20establishment%2C%20elegant%20architecture&width=600&height=400&seq=store3&orientation=landscape",
  },
  {
    id: 4,
    name: "梅田店",
    address: "大阪府大阪市北区梅田1-13-13 阪急三番街B2F",
    hours: "11:00〜22:30（L.O. 22:00）",
    tel: "06-1234-5678",
    access: "阪急梅田駅 直結",
    seats: 90,
    image: "https://readdy.ai/api/search-image?query=Japanese%20restaurant%20in%20Osaka%20Umeda%20shopping%20mall%2C%20bright%20interior%2C%20modern%20Japanese%20design%2C%20busy%20lunch%20atmosphere%2C%20clean%20minimal%20decor%2C%20professional%20food%20establishment&width=600&height=400&seq=store4&orientation=landscape",
  },
  {
    id: 5,
    name: "名古屋栄店",
    address: "愛知県名古屋市中区栄3-15-1 栄センタービル4F",
    hours: "11:00〜22:00（L.O. 21:30）",
    tel: "052-123-4567",
    access: "地下鉄栄駅 8番出口より徒歩2分",
    seats: 65,
    image: "https://readdy.ai/api/search-image?query=Japanese%20restaurant%20interior%20in%20Nagoya%2C%20traditional%20wooden%20elements%2C%20modern%20minimalist%20design%2C%20warm%20lighting%2C%20comfortable%20dining%20space%2C%20authentic%20atmosphere&width=600&height=400&seq=store5&orientation=landscape",
  },
  {
    id: 6,
    name: "福岡天神店",
    address: "福岡県福岡市中央区天神2-11-3 天神ビル5F",
    hours: "11:30〜22:00（L.O. 21:30）",
    tel: "092-123-4567",
    access: "西鉄天神駅 南口より徒歩3分",
    seats: 55,
    image: "https://readdy.ai/api/search-image?query=Japanese%20restaurant%20in%20Fukuoka%20Tenjin%2C%20cozy%20intimate%20dining%20room%2C%20wooden%20interior%2C%20soft%20warm%20lighting%2C%20traditional%20Japanese%20aesthetic%20with%20modern%20touch%2C%20inviting%20atmosphere&width=600&height=400&seq=store6&orientation=landscape",
  },
];

export default function RestaurantStores() {
  return (
    <section id="stores" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Locations</p>
          <h2 className="text-stone-900 font-black text-4xl md:text-5xl">店舗一覧</h2>
          <p className="text-stone-400 text-sm mt-4">全国15店舗展開中。お近くの店舗をお探しください。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 group">
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-stone-900 font-bold text-base mb-3">
                  <i className="ri-map-pin-line text-red-500 mr-1.5"></i>
                  {store.name}
                </h3>
                <ul className="space-y-2 text-xs text-stone-500">
                  <li className="flex items-start gap-2">
                    <i className="ri-building-line mt-0.5 shrink-0"></i>
                    <span>{store.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-time-line shrink-0"></i>
                    <span>{store.hours}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-train-line shrink-0"></i>
                    <span>{store.access}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-phone-line shrink-0"></i>
                    <a href={`tel:${store.tel}`} className="hover:text-red-600 transition-colors cursor-pointer">
                      {store.tel}
                    </a>
                  </li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-stone-400">
                    <i className="ri-user-line mr-1"></i>
                    {store.seats}席
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(store.address)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-xs text-red-600 font-semibold hover:text-red-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    地図を見る
                    <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
