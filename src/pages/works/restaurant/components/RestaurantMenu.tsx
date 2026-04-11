import { useState } from "react";

const categories = ["おすすめ", "定食", "一品料理", "季節限定"];

const menuItems = [
  {
    id: 1,
    category: "おすすめ",
    name: "うまみ特選定食",
    desc: "本日の鮮魚の塩焼き・小鉢3種・味噌汁・ご飯のセット。毎日変わる旬の味をお楽しみください。",
    price: "1,480",
    tag: "人気No.1",
    image: "https://readdy.ai/api/search-image?query=Japanese%20set%20meal%20teishoku%20with%20grilled%20fish%2C%20rice%2C%20miso%20soup%2C%20small%20side%20dishes%2C%20elegant%20white%20ceramic%20plates%2C%20overhead%20shot%2C%20clean%20minimal%20food%20photography%2C%20warm%20natural%20lighting&width=400&height=300&seq=menu1&orientation=landscape",
  },
  {
    id: 2,
    category: "おすすめ",
    name: "黒毛和牛すき焼き",
    desc: "A5ランクの黒毛和牛を使用した贅沢なすき焼き。甘辛いタレと卵でお召し上がりください。",
    price: "3,200",
    tag: "プレミアム",
    image: "https://readdy.ai/api/search-image?query=Japanese%20sukiyaki%20hot%20pot%20with%20wagyu%20beef%2C%20vegetables%2C%20tofu%2C%20in%20traditional%20iron%20pot%2C%20steam%20rising%2C%20dark%20wooden%20table%2C%20elegant%20food%20photography%2C%20warm%20amber%20tones&width=400&height=300&seq=menu2&orientation=landscape",
  },
  {
    id: 3,
    category: "定食",
    name: "鯖の味噌煮定食",
    desc: "脂ののった真鯖を甘辛い味噌でじっくり煮込みました。ご飯が進む定番の一品。",
    price: "1,180",
    tag: "",
    image: "https://readdy.ai/api/search-image?query=Japanese%20saba%20miso%20mackerel%20fish%20stew%20in%20ceramic%20bowl%2C%20traditional%20Japanese%20food%2C%20rice%20and%20miso%20soup%20on%20wooden%20tray%2C%20warm%20cozy%20restaurant%20setting%2C%20authentic%20home%20cooking%20style&width=400&height=300&seq=menu3&orientation=landscape",
  },
  {
    id: 4,
    category: "定食",
    name: "鶏の唐揚げ定食",
    desc: "国産鶏もも肉を特製タレに漬け込み、カラッと揚げました。レモンを絞ってどうぞ。",
    price: "980",
    tag: "定番人気",
    image: "https://readdy.ai/api/search-image?query=Japanese%20karaage%20fried%20chicken%20set%20meal%2C%20golden%20crispy%20chicken%20pieces%20with%20lemon%2C%20rice%20and%20miso%20soup%2C%20white%20plate%2C%20clean%20food%20photography%2C%20bright%20natural%20light&width=400&height=300&seq=menu4&orientation=landscape",
  },
  {
    id: 5,
    category: "一品料理",
    name: "だし巻き玉子",
    desc: "職人が丁寧に巻き上げた、ふわとろのだし巻き玉子。大根おろしと共にどうぞ。",
    price: "580",
    tag: "",
    image: "https://readdy.ai/api/search-image?query=Japanese%20tamagoyaki%20rolled%20omelette%2C%20fluffy%20golden%20egg%20roll%20with%20grated%20daikon%20radish%2C%20elegant%20ceramic%20plate%2C%20soft%20natural%20lighting%2C%20traditional%20Japanese%20appetizer&width=400&height=300&seq=menu5&orientation=landscape",
  },
  {
    id: 6,
    category: "季節限定",
    name: "松茸の土瓶蒸し",
    desc: "秋の味覚・松茸をふんだんに使った贅沢な土瓶蒸し。香り豊かな出汁をお楽しみください。",
    price: "2,800",
    tag: "秋限定",
    image: "https://readdy.ai/api/search-image?query=Japanese%20matsutake%20mushroom%20dobinmushi%20steam%20pot%2C%20traditional%20ceramic%20teapot%20with%20autumn%20mushrooms%2C%20elegant%20Japanese%20restaurant%20presentation%2C%20warm%20golden%20lighting%2C%20seasonal%20delicacy&width=400&height=300&seq=menu6&orientation=landscape",
  },
];

export default function RestaurantMenu() {
  const [active, setActive] = useState("おすすめ");

  const filtered = menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">Menu</p>
          <h2 className="text-stone-900 font-black text-4xl md:text-5xl">こだわりのメニュー</h2>
          <p className="text-stone-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            旬の食材を活かした季節のメニューから、定番の人気料理まで。
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                active === cat
                  ? "bg-red-600 text-white"
                  : "border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="group rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 transition-all">
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {item.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-stone-900 font-bold text-base mb-2">{item.name}</h3>
                <p className="text-stone-400 text-xs leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-stone-900 font-black text-lg">
                    &yen;{item.price}
                    <span className="text-stone-400 text-xs font-normal ml-1">（税込）</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
