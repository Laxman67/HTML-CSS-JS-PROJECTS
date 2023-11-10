const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");

const socialListEL = document.querySelector(".social-lists");

const listItemsEl = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
  socialListEL.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

listItemsEl.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    menuTextEl.innerHTML = listItem.innerHTML;
    socialListEL.classList.add("hide");
  });
});
