const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEL = document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEL) => {
  ratingEL.addEventListener("click", (event) => {
    removeActive(ratingEls);
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating != "") {
    containerEL.innerHTML = `<Strong>Thank you!</Strong> 
    <br>
    <br>
    <Strong>Feedback : ${selectedRating}</Strong> 
    <br>
    <br>

    <p>We'll use your Feedback to Improve our customer support.
    `;
  }
});

function removeActive(ratingELs) {
  ratingELs.forEach((ratingEL) => {
    ratingEL.classList.remove("active");
  });
}
