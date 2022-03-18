// This script is unused.
$(function() {
const svg = document.querySelector("svg");
console.log(svg);
svg.onclick = (evt) => {
  if (svg.animationsPaused()) {
    svg.unpauseAnimations();
  }
  else {
    svg.pauseAnimations();
  }
};
})