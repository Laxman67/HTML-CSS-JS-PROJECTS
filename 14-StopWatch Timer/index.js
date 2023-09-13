const timerEl = document.getElementById("timer");
const startEL = document.getElementById("start");
const stopEL = document.getElementById("stop");
const resetEL = document.getElementById("reset");

//

let startTime = 0;
let elapseTime = 0;

let timerInterval;

function startTimer() {
  startTime = Date.now() - elapseTime;

  timerInterval = setInterval(() => {
    elapseTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapseTime);
  }, 10);

  startEL.disabled = true;
  stopEL.disabled = false;
}

function formatTime(elapseTime) {
  const miliseconds = Math.floor((elapseTime % 1000) / 10);
  const seconds = Math.floor((elapseTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapseTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapseTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    ":" +
    (miliseconds > 9 ? miliseconds : "0" + miliseconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
  startEL.disabled = false;
  stopEL.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);
  elapseTime = 0;

  startEL.disabled = false;
  stopEL.disabled = true;
  timerEl.innerText = "00:00:00:00";
}

startEL.addEventListener("click", startTimer);

stopEL.addEventListener("click", stopTimer);
resetEL.addEventListener("click", resetTimer);
