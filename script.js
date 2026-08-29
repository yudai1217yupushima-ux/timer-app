const workTime = 10;
const breakTime = 5 ;
let mode = "work" ; 
let time = workTime ;
let timerId = null;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const modeDisplay = document.getElementById("mode");
const popUp = document.getElementById("popup");

function updateDisplay() {
  let minutes = String(Math.floor(time / 60)).padStart(2, "0");
  let seconds = String(time % 60).padStart(2, "0");
   if (mode === "work") {
        modeDisplay.textContent = "作業中";
      } else {
         modeDisplay.textContent = "休憩中";
    }

  timer.textContent = `${minutes}:${seconds}`;
}

updateDisplay();

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    time--;
    if (time <= 0) {
      popUp.style.display = "block";
      clearInterval(timerId);
      timerId = null;
   if (mode === "work") {
    mode = "break";
    time = breakTime;
  } else {
    mode = "work";
    time = workTime;
    }
  }
    updateDisplay();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  time = workTime;
  mode = "work";
 
  updateDisplay();
});