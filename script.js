const workTime = 1500;
const breakTime = 300 ;
let mode = "work"; 
let time = workTime ;
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
      if (mode === "work") {
        // ここに「作業→休憩」の処理

    } else {
        // ここに「休憩→作業」の処理
    }

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