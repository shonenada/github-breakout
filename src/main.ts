import { Ball } from "./ball";
import { Breakout } from "./breakout";

function main() {
  const svg = document.querySelector<SVGElement>(".js-calendar-graph-svg");
  if (!svg) return;
  svg.setAttribute("height", "200");
  new Breakout(svg);
}

main();
