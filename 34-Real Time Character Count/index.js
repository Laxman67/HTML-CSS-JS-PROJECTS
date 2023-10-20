const textareaEL = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");
const remainigCounterEl = document.getElementById("remainig-counter");

textareaEL.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textareaEL.value.length;

  remainigCounterEl.innerText =
    textareaEL.getAttribute("maxLength") - textareaEL.value.length;
}
