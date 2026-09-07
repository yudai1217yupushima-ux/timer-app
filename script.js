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
const popupMessage = document.getElementById("popupMessage");
const restBtn = document.getElementById("rest");
const finishBtn = document.getElementById("finish");

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


function startTimer() {
timerId = setInterval(() => {
    time--;
    if (time <= 0) {
     if (mode === "work") {
          popupMessage.textContent = "作業時間終了！";
          restBtn.style.display = "inline-block";  
        } else {
           popupMessage.textContent = "休憩時間終了！";
           restBtn.style.display = "none";  
          }

          popUp.style.display = "block";
      clearInterval(timerId);
      timerId = null;
  }
    updateDisplay();
  }, 1000);
}

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;

  popUp.style.display = "none";
  mode = "work";
    startTimer();
});

restBtn.addEventListener("click", () => {
  popUp.style.display = "none";
  mode = "break";
  time = breakTime;

  startTimer();

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

finishBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  popUp.style.display = "none";

  mode = "work";
  time = workTime;

  updateDisplay();
});