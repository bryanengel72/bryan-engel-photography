/**
 * Reads every image in /public/images/portfolio at build time, so the gallery
 * shows whatever you drop in that folder — ANY filename, any count. No need to
 * match names like image-01.jpg anymore.
 *
 * Files are shown in natural sorted order (photo-01, photo-02, … or whatever you
 * name them). The FIRST image is used as the homepage hero + social preview, so
 * give your strongest shot a name that sorts first (e.g. a "00-" or "01-" prefix).
 *
 * Want custom alt text / captions for a specific photo? Add an entry to the
 * OVERRIDES map below, keyed by filename.
 */
import fs from "fs";
import path from "path";
import { site } from "./site";

export type Photo = { src: string; alt: string };

// Rotating, SEO-friendly descriptions used when no override is set.
const DESCRIPTORS = [
  "Physique competitor photographed in dramatic golden-hour light",
  "Bodybuilding stage-conditioning portrait",
  "Bikini competitor posing outdoors",
  "Figure competitor showing muscle symmetry and conditioning",
  "Men's physique athlete in low-key studio light",
  "Fitness competitor in an industrial setting",
  "Competitor posing portrait emphasizing definition",
  "Physique portrait highlighting stage-ready conditioning",
];

// Optional per-file overrides: { "photo-01.jpg": { alt: "custom alt text" } }
const OVERRIDES: Record<string, Partial<Photo>> = {};

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

export function getPhotos(): Photo[] {
  const dir = path.join(process.cwd(), "public", "images", "portfolio");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE_RE.test(f));
  } catch {
    files = [];
  }
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return files.map((file, i) => {
    const o = OVERRIDES[file] ?? {};
    return {
      src: `/images/portfolio/${file}`,
      alt:
        o.alt ??
        `${DESCRIPTORS[i % DESCRIPTORS.length]} — ${site.name}, ${site.location.city} ${site.location.region}`,
    };
  });
}
