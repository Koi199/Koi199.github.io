const btn = document.getElementById('cycle-btn');
const svgEl = document.querySelector('svg');
let isAnimating = false;

// Start with everything paused so nothing moves on load
svgEl.pauseAnimations();

btn.addEventListener('click', () => {
  if (!isAnimating) {
    // Resume playback from current point
    svgEl.unpauseAnimations();
    btn.textContent = 'Pause';
    btn.style.backgroundColor = '#f44336'; // green while running
  } else {
    // Pause in place
    svgEl.pauseAnimations();
    btn.textContent = 'Resume';
    btn.style.backgroundColor = '#4CAF50'; // red while paused
  }
  isAnimating = !isAnimating;
});
