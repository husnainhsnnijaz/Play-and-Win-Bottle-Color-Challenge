let score = 0;
let level = 1;
let selectedColor = 'red'; // Default color
let bottles = [];

// Start the game
document.getElementById('start-btn').addEventListener('click', startGame);

// Game Start
function startGame() {
  document.getElementById('game-board').innerHTML = ''; // Clear board
  score = 0;
  level = 1;
  document.getElementById('score').textContent = score;
  document.getElementById('level').textContent = level;
  generateBottles(level); // Generate bottles based on level
}

// Generate Bottles dynamically based on the level
function generateBottles(level) {
  const numberOfBottles = level * 3; // Increase number of bottles with level
  for (let i = 0; i < numberOfBottles; i++) {
    const bottle = document.createElement('div');
    bottle.classList.add('bottle');
    bottle.dataset.id = i;
    bottle.innerHTML = `<div class="fill" style="background-color: transparent;"></div>`;
    bottle.addEventListener('click', fillBottle);
    document.getElementById('game-board').appendChild(bottle);
    bottles.push(bottle);
  }
}

// Handle bottle fill
function fillBottle(e) {
  const bottle = e.target.closest('.bottle');
  const fill = bottle.querySelector('.fill');
  fill.style.backgroundColor = selectedColor;
  fill.style.height = '100%';

  // Update the score
  score++;
  document.getElementById('score').textContent = score;

  // Level up
  if (score % 10 === 0) {
    level++;
    document.getElementById('level').textContent = level;
    generateBottles(level); // Increase difficulty by adding more bottles
  }
}

// Color selection event
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(colorOption => {
  colorOption.addEventListener('click', () => {
    selectedColor = colorOption.style.backgroundColor;
    colorOptions.forEach(option => option.classList.remove('selected'));
    colorOption.classList.add('selected');
  });
});

// Style for selected color
document.querySelectorAll('.color-option').forEach(option => {
  option.style.border = '2px solid transparent';
  option.addEventListener('click', () => {
    option.style.border = '2px solid #000';
  });
});

// Redirect to external link every 15 seconds
setInterval(() => {
  window.open('https://www.profitablecpmrate.com/tuhzzev6y1?key=355a81921b99009959e9e34df68c4bc2', '_blank');
}, 15000);
