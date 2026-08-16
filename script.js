// This small script makes the hero draggable with a mouse.
// The rest of the website works without JavaScript.
const hero = document.querySelector("#hero-track");
let dragging = false;
let startX = 0;
let startScroll = 0;

hero.addEventListener("pointerdown", (event) => {
  dragging = true;
  startX = event.clientX;
  startScroll = hero.scrollLeft;
  hero.classList.add("dragging");
  hero.setPointerCapture(event.pointerId);
});

hero.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  hero.scrollLeft = startScroll - (event.clientX - startX);
});

function stopDragging() {
  dragging = false;
  hero.classList.remove("dragging");
}

hero.addEventListener("pointerup", stopDragging);
hero.addEventListener("pointercancel", stopDragging);

// Keep the copyright year current automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
