"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { Photo } from "@/lib/getPhotos";
import Reveal from "@/components/Reveal";
import FadeImage from "@/components/FadeImage";

const LIGHTBOX_CLOSE_MS = 200;

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setClosing(true);
    closeTimeout.current = setTimeout(() => {
      setActive(null);
      setClosing(false);
    }, LIGHTBOX_CLOSE_MS);
  }, []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 6) * 60}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-lg img-fallback focus:outline-none focus:ring-2 focus:ring-amber"
              aria-label={`Open photo ${i + 1} full screen`}
            >
              <FadeImage
                src={p.src}
                alt={p.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority={i < 3}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 ${
            closing ? "animate-lightbox-out" : "animate-lightbox-in"
          }`}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 text-4xl leading-none text-bone/70 transition-colors hover:text-bone"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 px-4 text-5xl text-bone/60 transition-colors hover:text-bone sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <figure
            key={active}
            className="animate-lightbox-image max-h-[88vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <FadeImage
              src={photos[active].src}
              alt={photos[active].alt}
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
          </figure>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 text-5xl text-bone/60 transition-colors hover:text-bone sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
