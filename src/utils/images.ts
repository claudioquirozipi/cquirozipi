import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/img/**/*.{jpeg,jpg,png,svg,webp}",
  { eager: true }
);

export function getImage(path: string): ImageMetadata {
  const key = `/src/assets/img/${path}`;
  const mod = images[key];
  if (!mod) {
    throw new Error(`Image not found: ${path}`);
  }
  return mod.default;
}
