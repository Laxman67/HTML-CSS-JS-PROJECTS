const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
// const colors= ["red",]

starsEl.forEach((starEL, index) => {
  starEL.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }

    emojisEl.forEach((emojiEL) => {
      emojiEL.style.transform = `translateX(-${index * 50}px)`;
    });
  });
}
