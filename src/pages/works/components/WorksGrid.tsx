import { useState } from "react";

import WorkCard from "@/components/feature/WorkCard";
import WorkDetailModal from "@/components/feature/WorkDetailModal";
import { workCategories, works, type Work } from "@/mocks/works";

export default function WorksGrid() {
  const [active, setActive] = useState("すべて");
  const [selected, setSelected] = useState<Work | null>(null);

  const filtered =
    active === "すべて" ? works : works.filter((work) => work.category === active);

  return (
    <section className="min-h-screen bg-gray-950 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/60">
          実案件は守秘義務のため一部のみ公開しています。以下には実案件・自社開発と、制作品質をご覧いただくためのデモサイトを掲載しています。
        </p>

        <div className="mb-10 flex flex-wrap gap-2" aria-label="制作実績カテゴリ">
          {workCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`min-h-11 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transition-none ${
                active === category
                  ? "bg-amber-400 text-gray-950"
                  : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <WorkCard key={work.id} work={work} onOpen={setSelected} showDescription />
          ))}
        </div>
      </div>

      {selected ? (
        <WorkDetailModal key={selected.id} work={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
