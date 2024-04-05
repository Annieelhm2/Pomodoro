const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const themeButtons = document.querySelectorAll('.theme-btn');

let timer = 25 * 60; // 25 minutes in seconds
let interval;
let isPaused = true;

function updateDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        interval = setInterval(() => {
            if (timer > 0) {
                timer--;
                updateDisplay();
            } else {
                clearInterval(interval);
                // Handle completion here (e.g., start break)
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    isPaused = true;
}

function resetTimer() {
    clearInterval(interval);
    timer = 25 * 60; // Reset to 25 minutes
    updateDisplay();
    isPaused = true;
}

function changeTheme(theme) {
    document.body.className = theme;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
themeButtons.forEach(btn => {
    btn.addEventListener('click', () => changeTheme(btn.dataset.theme));
});

updateDisplay();
