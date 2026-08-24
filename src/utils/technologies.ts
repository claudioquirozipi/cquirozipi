import { technologies } from "../data/technologies";

function normalizeTechName(name: string) {
  return name
    .toLowerCase()
    .replace(/\.js$/, "")
    .replace(/[^a-z0-9]/g, "");
}

export function findTechnologyImage(name: string) {
  const target = normalizeTechName(name);
  return technologies.find((t) => normalizeTechName(t.title) === target)
    ?.technologyImage;
}
