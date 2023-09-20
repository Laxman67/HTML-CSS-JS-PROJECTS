const btnEL = document.getElementById("btn");
const API_KEY = "y7xa+Cyg9byX9LI/PdTdXw==PZhQF9zYso4k7Rgo";
const jokeEl = document.getElementById("joke");
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEL.disabled = false;
    btnEL.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error Happend, try again Later";
    console.log(error);
  }
}
btnEL.addEventListener("click", getJoke);
