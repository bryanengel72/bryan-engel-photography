"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import type { Photo } from "@/lib/getPhotos";

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );

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
          <button
            key={p.src}
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-lg img-fallback focus:outline-none focus:ring-2 focus:ring-amber"
            aria-label={`Open image: ${p.caption}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-display text-xl text-bone">{p.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
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
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              width={0}
              height={0}
              sizes="100vw"
              className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
              priority
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-2xl text-bone">{photos[active].caption}</p>
            </figcaption>
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
