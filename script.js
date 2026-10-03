let workTime ;
let breakTime ;
const time25Btn = document.getElementById("time25");
const time50Btn = document.getElementById("time50");
const timeSelect = document.getElementById("timeSelect");

const set1Btn = document.getElementById("set1");
const set2Btn = document.getElementById("set2");
const set3Btn = document.getElementById("set3");
const set4Btn = document.getElementById("set4");
const set5Btn = document.getElementById("set5");
const set6Btn = document.getElementById("set6");
const set7Btn = document.getElementById("set7");
const set8Btn = document.getElementById("set8");
const set9Btn = document.getElementById("set9");
let totalSets;
let currentSet = 0;

set1Btn.addEventListener("click", () => {
  totalSets = 1;
  timeSelect.style.display = "none";
});

set2Btn.addEventListener("click", () => {
  totalSets = 2;
  timeSelect.style.display = "none";
});

set3Btn.addEventListener("click", () => {
  totalSets = 3;
  timeSelect.style.display = "none";
});

set4Btn.addEventListener("click", () => {
  totalSets = 4;
  timeSelect.style.display = "none";
});

set5Btn.addEventListener("click", () => {
  totalSets = 5;
  timeSelect.style.display = "none";
});

set6Btn.addEventListener("click", () => {
  totalSets = 6;
  timeSelect.style.display = "none";
});

set7Btn.addEventListener("click", () => {
  totalSets = 7;
  timeSelect.style.display = "none";
});

set8Btn.addEventListener("click", () => {
  totalSets = 8;
  timeSelect.style.display = "none";
});

set9Btn.addEventListener("click", () => {
  totalSets = 9;
  timeSelect.style.display = "none";
});

time25Btn.addEventListener("click", () => {
  workTime = 25 * 60;
  breakTime = 5 * 60;
  time = workTime;
  updateDisplay();
  timeSelect.style.display = "none";
});

time50Btn.addEventListener("click", () => {
  workTime = 50 * 60;
  breakTime = 10 * 60;
  time = workTime;
  updateDisplay();
  timeSelect.style.display = "none";
});

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
        modeDisplay.textContent = "集中";
      } else {
         modeDisplay.textContent = "relax";
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

                 if (currentSet < totalSets) {
                      mode = "work";
                       time = workTime;
                       popupMessage.textContent = `${currentSet}セット目開始！`;
                        startTimer();
                      } else {
                    popupMessage.textContent = "全セット終了！";
                        }

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
  if (time <= 0) time = workTime;
  mode = "work";
  currentSet = 1;
    startTimer();
});

restBtn.addEventListener("click", () => {
  popUp.style.display = "none";
  mode = "break";
  time = breakTime;
  currentSet++;

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
  timeSelect.style.display = "block";
});

finishBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  popUp.style.display = "none";

  mode = "work";
  time = workTime;

  updateDisplay();
  timeSelect.style.display = "block";
});