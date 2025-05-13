const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const colorEl = document.getElementById('color');
const toggleBtn = document.getElementById('toggle');
const restartBtn = document.getElementById('restart');

const texts = ['We Love Programming!', 'Let’s build something great.', 'JavaScript is awesome!'];
let idx = 1;
let charIndex = 0;
let speed = 300 / speedEl.value;
let isPaused = false;

function writeText() {
  if (isPaused) return;

  textEl.innerText = texts[idx].slice(0, charIndex);
  charIndex++;

  if (charIndex > texts[idx].length) {
    idx = (idx + 1) % texts.length;
    charIndex = 0;
    setTimeout(() => writeText(), 1000); // pause between phrases
  } else {
    setTimeout(writeText, speed);
  }
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});

colorEl.addEventListener('input', (e) => {
  textEl.style.color = e.target.value;
  document.querySelector('.cursor').style.color = e.target.value;
});

toggleBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  toggleBtn.textContent = isPaused ? 'Resume' : 'Pause';
  if (!isPaused) writeText();
});

restartBtn.addEventListener('click', () => {
  idx = 0;
  charIndex = 0;
  textEl.innerText = '';
  isPaused = false;
  toggleBtn.textContent = 'Pause';
  writeText();
});

// Start typing
writeText();
