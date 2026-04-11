const reviews = [
  {
    name: "M.K さん",
    age: "30代・会社員",
    rating: 5,
    text: "田中さんにバレイヤージュをお願いしました。希望通りの自然なグラデーションに仕上げていただき、大満足です！周りからも「髪きれいだね」と言われるようになりました。",
    service: "バレイヤージュ",
    image: "https://readdy.ai/api/search-image?query=happy%20Japanese%20woman%20with%20beautiful%20highlighted%20hair%2C%20natural%20smile%2C%20casual%20elegant%20style%2C%20soft%20portrait%20photography%2C%20warm%20lighting%2C%20beauty%20result%20after%20salon%20visit&width=200&height=200&seq=review1&orientation=squarish",
  },
  {
    name: "A.T さん",
    age: "20代・学生",
    rating: 5,
    text: "初めて来店しましたが、カウンセリングがとても丁寧で安心できました。木村さんのカットで、ずっと悩んでいた広がりが解消されました。また来ます！",
    service: "カット＋トリートメント",
    image: "https://readdy.ai/api/search-image?query=young%20Japanese%20woman%20with%20stylish%20haircut%2C%20happy%20expression%2C%20casual%20fashion%2C%20soft%20natural%20lighting%2C%20beauty%20portrait%2C%20after%20hair%20salon%20treatment&width=200&height=200&seq=review2&orientation=squarish",
  },
  {
    name: "Y.N さん",
    age: "40代・主婦",
    rating: 5,
    text: "佐藤さんのトリートメントを受けてから、毎朝のスタイリングが楽になりました。髪のツヤが全然違います。少し遠いですが、通う価値があるサロンです。",
    service: "集中ケアトリートメント",
    image: "https://readdy.ai/api/search-image?query=elegant%20Japanese%20woman%20in%20her%2040s%20with%20beautiful%20shiny%20hair%2C%20sophisticated%20style%2C%20warm%20smile%2C%20soft%20portrait%20photography%2C%20beauty%20and%20wellness%20concept&width=200&height=200&seq=review3&orientation=squarish",
  },
  {
    name: "R.S さん",
    age: "20代・OL",
    rating: 5,
    text: "インスタで見て気になっていたサロン。念願の初来店でしたが、雰囲気も施術も最高でした。田中さんのカラーセンスが素晴らしく、理想以上の仕上がりに感動！",
    service: "ハイライト＋カット",
    image: "https://readdy.ai/api/search-image?query=stylish%20young%20Japanese%20woman%20with%20highlighted%20hair%2C%20fashionable%20appearance%2C%20bright%20smile%2C%20modern%20portrait%20photography%2C%20beauty%20lifestyle%2C%20after%20hair%20salon&width=200&height=200&seq=review4&orientation=squarish",
  },
];

export default function SalonReviews() {
  return (
    <section id="reviews" className="bg-rose-50/40 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-rose-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">Reviews</p>
          <h2 className="text-stone-800 font-black text-4xl md:text-5xl mb-4">お客様の声</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1,2,3,4,5].map((s) => (
                <i key={s} className="ri-star-fill text-amber-400 text-lg"></i>
              ))}
            </div>
            <span className="text-stone-700 font-black text-xl">4.9</span>
            <span className="text-stone-400 text-sm">/ 5.0（Google 口コミ 238件）</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-7">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-stone-800 font-bold text-sm">{r.name}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{r.age}</p>
                  <div className="flex mt-1.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400 text-xs"></i>
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs px-3 py-1 rounded-full bg-rose-50 text-rose-400 font-semibold whitespace-nowrap">
                  {r.service}
                </span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
