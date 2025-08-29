const btn = document.getElementById('cycle-btn');
const svgEl = document.querySelector('svg');
let isAnimating = false;

// Start with everything paused so nothing moves on load
svgEl.pauseAnimations();

btn.addEventListener('click', () => {
  if (!isAnimating) {
    // Resume playback from current point
    svgEl.unpauseAnimations();
    btn.textContent = 'PAUSE';
    btn.style.backgroundColor = '#f44336'; // green while running
  } else {
    // Pause in place
    svgEl.pauseAnimations();
    btn.textContent = 'RESUME';
    btn.style.backgroundColor = '#7acc7dff'; // red while paused
  }
  isAnimating = !isAnimating;
});
