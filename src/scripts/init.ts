import { runAnimate } from "./animate.ts";
import { bindScrollButtons, subscribeScroll } from "./scroll.ts";
import { applyStoredTheme, bindThemeButtons, subscribeSystemTheme } from "./theme.ts";

function init() {
  applyStoredTheme();
  subscribeSystemTheme();
  subscribeScroll();
  bindThemeButtons();
  bindScrollButtons();
  runAnimate();
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("astro:after-swap", init);
