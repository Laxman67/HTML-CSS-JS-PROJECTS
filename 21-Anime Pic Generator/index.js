const btnEL = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");

const animeImgEL = document.querySelector("anime-img");

const animeNameEL = document.querySelector("anime-name");

btnEL.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    console.log(data);
  } catch {}
});
