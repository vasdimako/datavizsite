$(function() {
    const svg = document.querySelectorAll("svg");
    console.log(svg);
    for (i=0; i < svg.length; i++) {
        svg[i].addEventListener('click', function() {
            if (this.animationsPaused()) {
                this.unpauseAnimations();
              }
              else {
                this.pauseAnimations();
        }
    })
    }
})