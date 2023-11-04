const yearEl= document.getElementById("year");
const dayName= document.getElementById("day-name")
const dayNumber= document.getElementById("day-number")
const monthName= document.getElementById("month-name")



const today = new Date();

dayName.textContent = today.toLocaleString('en-US', {weekday: 'long'});
dayNumber.textContent = today.getDate();
monthName.textContent = today.toLocaleString('en-US', {month: 'long'});
yearEl.textContent = today.getFullYear();