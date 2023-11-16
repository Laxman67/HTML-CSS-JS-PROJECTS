const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");

const newYearTime = new Date("Jan 1 , 2024 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  dayEL.textContent = d;
  hourEL.textContent = h;
  minuteEL.textContent = m;
  secondEL.textContent = s;

  setTimeout(updateCountDown, 1000);
}
