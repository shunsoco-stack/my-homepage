export default function SalonHero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=luxury%20beauty%20salon%20interior%20with%20elegant%20pink%20and%20white%20decor%2C%20soft%20natural%20lighting%2C%20modern%20styling%20chairs%2C%20floral%20arrangements%2C%20sophisticated%20feminine%20aesthetic%2C%20high-end%20hair%20salon%20atmosphere%2C%20warm%20bokeh%20background%2C%20professional%20interior%20photography&width=1600&height=900&seq=salon-hero1&orientation=landscape"
        alt="FLEUR Beauty Salon"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-rose-300 text-xs font-bold tracking-[0.5em] uppercase mb-6">
          Beauty &amp; Hair Salon
        </p>
        <h1 className="text-white font-black text-6xl md:text-8xl tracking-[0.15em] mb-4">
          FLEUR
        </h1>
        <p className="text-white/70 text-sm md:text-base tracking-widest mb-8">
          ― あなたの美しさを、もっと輝かせる ―
        </p>
        <p className="text-white/60 text-sm max-w-md leading-relaxed mb-10">
          表参道の隠れ家サロン。<br />
          一人ひとりの個性を活かしたスタイル提案で、<br />
          あなただけの美しさを引き出します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleNav("#reservation")}
            className="px-8 py-3.5 rounded-full bg-rose-400 text-white font-bold text-sm hover:bg-rose-500 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-calendar-line mr-2"></i>
            今すぐ予約する
          </button>
          <button
            onClick={() => handleNav("#services")}
            className="px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:bg-white/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-scissors-line mr-2"></i>
            メニューを見る
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-14">
          {[
            { icon: "ri-map-pin-line", text: "表参道駅 徒歩3分" },
            { icon: "ri-time-line", text: "10:00〜20:00" },
            { icon: "ri-star-fill", text: "Google評価 4.9" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/60 text-xs">
              <i className={`${item.icon} text-rose-300`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
