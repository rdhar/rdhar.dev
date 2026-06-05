function onScroll() {
  document.documentElement.classList.toggle("scrolled", window.scrollY > 0);
}

let scrollListenerBound = false;
export function subscribeScroll() {
  onScroll();
  if (scrollListenerBound) return;
  scrollListenerBound = true;
  document.addEventListener("scroll", onScroll, { passive: true });
}

export function bindScrollButtons() {
  const backToTop = document.getElementById("back-to-top");
  if (backToTop && backToTop.dataset.scrollBound !== "true") {
    backToTop.dataset.scrollBound = "true";
    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const backToPrev = document.getElementById("back-to-prev");
  if (backToPrev && backToPrev.dataset.scrollBound !== "true") {
    backToPrev.dataset.scrollBound = "true";
    backToPrev.addEventListener("click", () => window.history.back());
  }
}
