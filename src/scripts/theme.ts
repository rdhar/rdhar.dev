type ThemeChoice = "light" | "dark" | "system";

function applyTheme(dark: boolean) {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `* {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }`,
    ),
  );
  document.head.appendChild(css);

  document.documentElement.classList.toggle("dark", dark);

  void window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyStoredTheme() {
  const stored = localStorage.theme as ThemeChoice | undefined;
  applyTheme(stored === "dark" || (stored !== "light" && prefersDark()));
}

function bindThemeButton(id: string, choice: ThemeChoice) {
  const button = document.getElementById(id);
  if (!button || button.dataset.themeBound === "true") return;
  button.dataset.themeBound = "true";
  button.addEventListener("click", () => {
    localStorage.theme = choice;
    applyTheme(choice === "dark" || (choice === "system" && prefersDark()));
  });
}

export function bindThemeButtons() {
  bindThemeButton("light-theme-button", "light");
  bindThemeButton("dark-theme-button", "dark");
  bindThemeButton("system-theme-button", "system");
}

let systemListenerBound = false;
export function subscribeSystemTheme() {
  if (systemListenerBound) return;
  systemListenerBound = true;
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!localStorage.theme || localStorage.theme === "system") {
      applyTheme(event.matches);
    }
  });
}
