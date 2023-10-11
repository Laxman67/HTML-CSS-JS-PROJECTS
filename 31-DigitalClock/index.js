const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const ampmEl = document.getElementById("ampm");

function UpdateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEl.innerText = h;
  minuteEl.innerHTML = m;
  secondEl.innerText = s;
  ampmEl.innerHTML = ampm;
  setTimeout(() => {
    UpdateClock();
  }, 1000);
}

UpdateClock();
