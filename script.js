let count = 0;
let tasbih = 0;
let goal = 0;
const maxCount = 100;   
const tasbihPerGoal = 10;

const countDisplay = document.getElementById('count');
const tasbihDisplay = document.getElementById('tasbih');
const goalDisplay = document.getElementById('goal');
const countBtn = document.getElementById('countBtn');
const resetBtn = document.getElementById('resetBtn');

countBtn.addEventListener('click', () => {
  count++;
  if (count >= maxCount) {
    count = 0;
    tasbih++;
    if (tasbih % tasbihPerGoal === 0) {
      goal++;
    }
  }
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  tasbih = 0;
  goal = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
  tasbihDisplay.textContent = tasbih;
  goalDisplay.textContent = goal;
}
