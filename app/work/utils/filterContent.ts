import { WorkContentJsonValues } from "../types";

function filterEmptyValues(c: WorkContentJsonValues) {
  return c.map((i) => ({
    ...i,
    content: i.content.filter((f) => f.value !== ""),
  }));
}

export default function cleanContent(content: WorkContentJsonValues) {
  return filterEmptyValues(content).filter((item) => item.content.length !== 0);
}

// varrer todos os items do content json e dentro do content
// json varrer todos os content e verificar se o value e vazio
// ou nao se for vazio remove do array se nao mantem
