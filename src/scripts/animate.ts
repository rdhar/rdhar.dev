export function runAnimate() {
  document.querySelectorAll(".animate").forEach((element, index) => {
    setTimeout(() => element.classList.add("show"), index * 150);
  });
}
