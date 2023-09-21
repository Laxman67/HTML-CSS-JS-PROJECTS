const btnEl = document.getElementById("btn");
const accessKey = "jRlvihbzutb3ff0Ec--qX6U-qToGNfHsegCbXF5PuaA";
const errorMessageEl = document.getElementById("errorMessage");

const galleryEl = document.getElementById("gallery");

async function fetchImage() {
  const inputValue = document.getElementById("input").value;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block";
    return;
  }
  let imgs = "";
  try {
    const loading = `<img src="Rolling-1s-58px.svg" / >`;
    galleryEl.appendChild = loading;

    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=${accessKey}`
    ).then((res) => {
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `
            <img src =${pic.urls.small} alt ="image">`;
            console.log(imgs);
          });
          galleryEl.style.display = "block";
          galleryEl.innerHTML = imgs;
        }
      });
    });

    errorMessageEl.style.display = "none";
  } catch (error) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "An error happen , try later";
  }
}

btnEl.addEventListener("click", fetchImage);
