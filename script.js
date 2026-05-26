let time = 60;
let timerId = null;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let minutes = String(Math.floor(time / 60)).padStart(2, "0");
  let seconds = String(time % 60).padStart(2, "0");

  timer.textContent = `${minutes}:${seconds}`;
}

updateDisplay();

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    time--;

    updateDisplay();

    if (time <= 0) {
      clearInterval(timerId);
      timerId = null;
      alert("時間終了！");
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  time = 60;
  updateDisplay();
});