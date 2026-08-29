import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import type { Work } from "@/mocks/works";
import { resolvePublicUrl } from "@/utils/resolvePublicUrl";

type WorkDetailModalProps = {
  work: Work;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function WorkDetailModal({ work, onClose }: WorkDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const gallery = work.gallery ?? [];
  const activeImage = gallery[activeImageIndex];
  const primaryCtaLabel = work.ctaLabel ?? "サイトを見る";

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const root = document.getElementById("root");
    const previousOverflow = document.body.style.overflow;
    const previousAriaHidden = root?.getAttribute("aria-hidden") ?? null;
    const previousInert = root?.inert ?? false;

    document.body.style.overflow = "hidden";
    if (root) {
      root.inert = true;
      root.setAttribute("aria-hidden", "true");
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (root) {
        root.inert = previousInert;
        if (previousAriaHidden === null) root.removeAttribute("aria-hidden");
        else root.setAttribute("aria-hidden", previousAriaHidden);
      }
      previousFocus?.focus();
    };
  }, [onClose]);

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + gallery.length) % gallery.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % gallery.length);
  };

  const modal = (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm motion-reduce:backdrop-blur-none"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={`${work.title}の詳細を閉じる`}
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-gray-950/80 text-xl text-white backdrop-blur-md transition-colors hover:bg-gray-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transition-none"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>

        {activeImage ? (
          <section
            aria-label="Production screenshot gallery"
            className="bg-slate-950"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") showPreviousImage();
              if (event.key === "ArrowRight") showNextImage();
            }}
          >
            <a
              href={resolvePublicUrl(activeImage.src)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${activeImage.label}の原寸画像を新しいタブで開く`}
              className="flex min-h-72 items-center justify-center bg-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-amber-300"
            >
              <img
                src={resolvePublicUrl(activeImage.src)}
                alt={activeImage.alt}
                className="max-h-[58vh] w-full object-contain"
              />
            </a>
            <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="前のスクリーンショット"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transition-none"
              >
                <i className="ri-arrow-left-s-line text-xl" aria-hidden="true" />
              </button>
              <div className="min-w-0 flex-1 text-center text-white">
                <p className="truncate text-sm font-semibold">{activeImage.label}</p>
                <p className="text-xs text-white/65" aria-live="polite">
                  {activeImageIndex + 1} / {gallery.length}
                </p>
              </div>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="次のスクリーンショット"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transition-none"
              >
                <i className="ri-arrow-right-s-line text-xl" aria-hidden="true" />
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto px-4 pb-4" aria-label="スクリーンショットを選択">
              {gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`${image.label}を表示`}
                  aria-pressed={index === activeImageIndex}
                  className={`min-h-11 w-28 shrink-0 overflow-hidden rounded-xl border-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 ${
                    index === activeImageIndex ? "border-amber-400" : "border-white/20"
                  }`}
                >
                  <img
                    src={resolvePublicUrl(image.src)}
                    alt=""
                    loading="lazy"
                    className="h-16 w-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </section>
        ) : (
          <div className="h-64 w-full overflow-hidden bg-gray-950">
            <img
              src={resolvePublicUrl(work.image)}
              alt={`${work.title}の画面`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-amber-700">{work.category}</span>
            {work.subcategory ? <span className="text-xs font-medium text-gray-600">{work.subcategory}</span> : null}
            {work.label ? (
              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-xs font-semibold text-violet-700">
                {work.label}
              </span>
            ) : work.demo ? (
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
                デモサイト
              </span>
            ) : null}
            <span className="text-xs text-gray-500">{work.year}</span>
          </div>
          <h2 id={titleId} className="mb-3 text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
            {work.title}
          </h2>
          <p id={descriptionId} className="mb-5 text-sm leading-relaxed text-gray-600">
            {work.description}
          </p>

          {work.badges?.length ? (
            <div className="mb-5 flex flex-wrap gap-2" aria-label="Project status">
              {work.badges.map((badge) => (
                <span key={badge} className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  {badge}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mb-5 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                {tag}
              </span>
            ))}
          </div>

          {work.note ? (
            <p className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs leading-relaxed text-emerald-900">
              <i className="ri-shield-check-line mr-2" aria-hidden="true" />
              {work.note}
            </p>
          ) : null}

          <div className={work.githubUrl ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
            {work.url.startsWith("http") ? (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${work.title}：${primaryCtaLabel}を新しいタブで開く`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
              >
                <i className="ri-external-link-line" aria-hidden="true" />
                {primaryCtaLabel}
              </a>
            ) : (
              <Link
                to={work.url}
                onClick={onClose}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
              >
                <i className="ri-arrow-right-line" aria-hidden="true" />
                {primaryCtaLabel}
              </Link>
            )}
            {work.githubUrl ? (
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${work.title}のGitHubを新しいタブで開く`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
              >
                <i className="ri-github-line" aria-hidden="true" />
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
