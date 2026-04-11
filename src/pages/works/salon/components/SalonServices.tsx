const services = [
  {
    category: "カット",
    items: [
      { name: "カット", price: "6,600", time: "60分" },
      { name: "カット＋シャンプー", price: "8,800", time: "75分" },
      { name: "カット＋トリートメント", price: "11,000", time: "90分" },
    ],
    image: "https://readdy.ai/api/search-image?query=professional%20hair%20cutting%20at%20luxury%20salon%2C%20elegant%20stylist%20working%20on%20client%20hair%2C%20soft%20pink%20and%20white%20salon%20interior%2C%20close-up%20of%20scissors%20and%20beautiful%20hair%2C%20warm%20natural%20lighting%2C%20high%20quality%20beauty%20photography&width=500&height=400&seq=salon-cut1&orientation=landscape",
    icon: "ri-scissors-line",
  },
  {
    category: "カラー",
    items: [
      { name: "ワンカラー", price: "9,900", time: "90分" },
      { name: "ハイライト", price: "16,500", time: "120分" },
      { name: "バレイヤージュ", price: "22,000", time: "150分" },
    ],
    image: "https://readdy.ai/api/search-image?query=hair%20coloring%20treatment%20at%20upscale%20beauty%20salon%2C%20professional%20colorist%20applying%20color%2C%20elegant%20salon%20setting%2C%20beautiful%20hair%20transformation%2C%20soft%20feminine%20aesthetic%2C%20warm%20lighting%2C%20professional%20beauty%20photography&width=500&height=400&seq=salon-color1&orientation=landscape",
    icon: "ri-palette-line",
  },
  {
    category: "トリートメント",
    items: [
      { name: "ベーシックTR", price: "4,400", time: "30分" },
      { name: "プレミアムTR", price: "8,800", time: "45分" },
      { name: "集中ケアTR", price: "13,200", time: "60分" },
    ],
    image: "https://readdy.ai/api/search-image?query=luxury%20hair%20treatment%20at%20beauty%20salon%2C%20client%20relaxing%20during%20hair%20care%2C%20elegant%20spa-like%20atmosphere%2C%20soft%20pink%20tones%2C%20professional%20hair%20care%20products%2C%20serene%20and%20peaceful%20salon%20environment&width=500&height=400&seq=salon-treatment1&orientation=landscape",
    icon: "ri-drop-line",
  },
];

export default function SalonServices() {
  return (
    <section id="services" className="bg-rose-50/50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-rose-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">Services</p>
          <h2 className="text-stone-800 font-black text-4xl md:text-5xl mb-4">メニュー</h2>
          <p className="text-stone-400 text-sm max-w-sm mx-auto leading-relaxed">
            すべてのメニューに、丁寧なカウンセリングが含まれています。
          </p>
        </div>

        <div className="space-y-10">
          {services.map((service, i) => (
            <div
              key={service.category}
              className={`bg-white rounded-2xl overflow-hidden flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className="lg:w-2/5 h-56 lg:h-auto overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-50 text-rose-400">
                    <i className={`${service.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-stone-800 font-black text-2xl">{service.category}</h3>
                </div>
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0">
                      <div>
                        <p className="text-stone-700 font-semibold text-sm">{item.name}</p>
                        <p className="text-stone-400 text-xs mt-0.5">
                          <i className="ri-time-line mr-1"></i>{item.time}
                        </p>
                      </div>
                      <p className="text-stone-800 font-black text-lg">
                        &yen;{item.price}
                        <span className="text-stone-400 text-xs font-normal ml-1">〜</span>
                      </p>
                    </div>
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
